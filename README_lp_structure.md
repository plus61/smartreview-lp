# Faster re-run: sample frames at ~2 FPS via random access to avoid full decode.
import cv2, os, json, numpy as np
from dataclasses import dataclass, asdict
from typing import List, Dict, Any

VIDEO_PATH = "/mnt/data/sample_site2.mp4"
OUT_DIR = "/mnt/data/lp_analysis"
os.makedirs(OUT_DIR, exist_ok=True)

def get_video_meta(cap):
    fps = cap.get(cv2.CAP_PROP_FPS) or 30.0
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT) or 0)
    duration = frame_count / fps if fps else 0
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    return fps, frame_count, duration, width, height

def frame_to_timecode(frame_idx, fps):
    t = frame_idx / fps
    ms = int((t - int(t)) * 1000)
    s = int(t) % 60
    m = (int(t) // 60) % 60
    h = int(t) // 3600
    return f"{h:02d}:{m:02d}:{s:02d}.{ms:03d}"

def compute_histogram(frame):
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    hist = cv2.calcHist([hsv], [0,1], None, [32, 32], [0,180,0,256])
    cv2.normalize(hist, hist)
    return hist

def hist_diff_score(histA, histB):
    corr = cv2.compareHist(histA, histB, cv2.HISTCMP_CORREL)
    return float(max(0.0, min(2.0, 1 - corr)))

cap = cv2.VideoCapture(VIDEO_PATH)
if not cap.isOpened():
    raise FileNotFoundError("Video not found")

fps, frame_count, duration, width, height = get_video_meta(cap)

# Sample at ~2 fps
sample_rate = 2.0
step_frames = max(1, int(fps / sample_rate))
sampled_indices = list(range(0, frame_count, step_frames))

hists = []
frames_cache = {}
for idx in sampled_indices:
    cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
    ok, frame = cap.read()
    if not ok:
        continue
    hists.append(compute_histogram(frame))
    frames_cache[idx] = frame

cap.release()

# diffs
diffs = [0.0]
for i in range(1, len(hists)):
    diffs.append(hist_diff_score(hists[i-1], hists[i]))

import numpy as np
diff_array = np.array(diffs)
dyn_thresh = float(np.percentile(diff_array, 85)) if len(diff_array) >= 8 else 0.35

boundaries = [sampled_indices[0]]
for i, d in enumerate(diffs[1:], start=1):
    if d >= dyn_thresh:
        boundaries.append(sampled_indices[i])
if sampled_indices[-1] not in boundaries:
    boundaries.append(sampled_indices[-1])

# Build sections
min_section_frames = int(fps * 1.0)
sections_frames = []
for i in range(len(boundaries)-1):
    s = boundaries[i]
    e = boundaries[i+1]
    if e - s < min_section_frames:
        if sections_frames:
            sections_frames[-1][1] = e
        else:
            sections_frames.append([s, e])
    else:
        sections_frames.append([s, e])

if len(sections_frames) <= 1 and frame_count > 0:
    # fallback: split into 4 equal parts
    quart = frame_count // 4
    sections_frames = [[i*quart, (i+1)*quart-1 if i<3 else frame_count-1] for i in range(4)]

# Save keyframes and build JSON
sections_json = []
for i, (s, e) in enumerate(sections_frames, start=1):
    kf = int(s + (e - s) * 0.2)
    nearest = min(frames_cache.keys(), key=lambda x: abs(x - kf))
    key_img = frames_cache[nearest]
    key_path = os.path.join(OUT_DIR, f"section_{i:02d}_keyframe.jpg")
    cv2.imwrite(key_path, key_img, [int(cv2.IMWRITE_JPEG_QUALITY), 90])

    sections_json.append({
        "id": f"section_{i:02d}",
        "start_frame": int(s),
        "end_frame": int(e),
        "start_timecode": frame_to_timecode(int(s), fps),
        "end_timecode": frame_to_timecode(int(e), fps),
        "duration_sec": round((e - s) / fps, 2),
        "transition_in": "auto",
        "transition_out": "auto",
        "dominant_motion": "scroll_down",  # simplified assumption for LP scroll video
        "keyframe_path": key_path,
        "layout_hint": "hero" if i == 1 else ("feature" if i in (2,3) else "detail"),
        "elements": [
            {"type":"section_title","role":"h2","text":"{セクション見出し}","animation":"fade-up","delay_ms":60},
            {"type":"body","text":"{本文: 箇条書き3点で要約}","animation":"fade-up","delay_ms":120},
            {"type":"media","kind":"image_or_mock","animation":"slide-in","delay_ms":180},
            {"type":"cta","label":"{CTA}","style":"primary","animation":"zoom-in","delay_ms":240}
        ],
        "actions": [
            {"type":"on_enter","effect":"stagger_children","stagger_ms":80},
            {"type":"on_scroll","effect":"activate_viewport","threshold":0.25}
        ]
    })

lp_json = {
    "schema_version": "1.0.0",
    "video_meta": {
        "fps": fps,
        "frame_count": frame_count,
        "duration_sec": round(duration, 2),
        "resolution": {"width": width, "height": height},
        "sampling": {"sample_rate_fps": sample_rate, "dynamic_threshold": dyn_thresh}
    },
    "sections": sections_json,
    "generator_note": "Sections estimated at ~2 FPS; motion simplified to 'scroll_down'. Adjust texts and animations per design."
}

json_path = os.path.join(OUT_DIR, "lp_structure.json")
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(lp_json, f, ensure_ascii=False, indent=2)

# Create a short README
readme_path = os.path.join(OUT_DIR, "README_lp_structure.md")
with open(readme_path, "w", encoding="utf-8") as f:
    f.write("AI実装用JSON（lp_structure.json）とキーフレーム画像を生成しました。各セクションのレイアウトとアニメーションは要調整です。")

# Return a small preview
preview = {
    "video_duration_sec": lp_json["video_meta"]["duration_sec"],
    "sections_detected": len(sections_json),
    "json_path": json_path,
    "readme_path": readme_path,
    "keyframes": [s["keyframe_path"] for s in sections_json]
}
preview
