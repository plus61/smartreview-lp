import { Palette, Brain, BarChart3, Clock } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Palette,
      title: "質問項目カスタマイズ",
      description: "業種別テンプレートで簡単セットアップ",
      details: [
        "業種別テンプレート（ピアノ、水泳、英会話など）",
        "自由に質問を追加・編集可能",
        "5段階評価、自由記述、NPS形式に対応",
        "ドラッグ&ドロップで質問順序を変更",
      ],
      image: "/survey-template-customization-interface-dashboard.jpg",
    },
    {
      icon: Brain,
      title: "スマート遷移設定",
      description: "評価点ごとに遷移先を自動設定",
      details: [
        "評価点ごとに遷移先を自動設定",
        "「4点以上→GMOくちコミ」「3点以下→改善要望フォーム」",
        "複数の口コミサイトに対応",
        "Googleマイビジネス連携も可能",
      ],
      image: "/flowchart-diagram-showing-smart-routing-logic.jpg",
    },
    {
      icon: BarChart3,
      title: "リアルタイム集計ダッシュボード",
      description: "NPSスコア、満足度推移をグラフ表示",
      details: [
        "NPSスコア、満足度推移をグラフ表示",
        "講師別・クラス別の評価分析",
        "改善すべきポイントを自動抽出",
        "CSVエクスポート機能",
      ],
      image: "/analytics-dashboard.png",
    },
    {
      icon: Clock,
      title: "自動リマインド機能",
      description: "アンケート未回答者に自動でリマインド",
      details: [
        "アンケート未回答者に自動でリマインド",
        "LINEやメールで配信",
        "回収率が平均2.5倍にアップ",
        "配信タイミングを自由設定",
      ],
      image: "/notification-reminder-on-smartphone-screen.jpg",
    },
  ]

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="cloud-decoration w-96 h-96 top-20 right-10 opacity-20"></div>
      <div className="cloud-decoration w-80 h-80 bottom-20 left-10 opacity-15"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance text-white">
            充実の機能で口コミ管理を効率化
          </h2>
          <p className="text-xl text-white/90">習い事教室に特化した4つの主要機能</p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white text-primary mb-8 shadow-lg">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">{feature.title}</h3>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">{feature.description}</p>
                <ul className="space-y-4">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="leading-relaxed text-white/95 text-base">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white/10"
                  />
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-white/20 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
