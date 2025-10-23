import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary pt-20 pb-32">
      <div className="cloud-decoration w-96 h-96 top-10 right-10 opacity-30"></div>
      <div className="cloud-decoration w-64 h-64 bottom-20 left-20 opacity-20"></div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 text-primary rounded-full text-sm font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              全国500教室が導入
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance text-white">
              悪い口コミを防ぎ、
              <br />
              <span className="text-secondary">良い口コミだけ</span>を増やす
            </h1>

            <p className="text-xl text-white/90 leading-relaxed text-pretty">
              習い事教室専用のスマート口コミ集客ツール
              <br />
              アンケートで満足度を測定してから
              <br />
              高評価のお客様だけを口コミサイトへ自動誘導
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all"
              >
                無料で始める
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white text-primary border-white hover:bg-white/90"
              >
                <Play className="mr-2 h-5 w-5" />
                デモを見る
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-white/90">14日間無料</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-white/90">クレカ登録不要</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-white/90">口コミ評価★4.5達成</span>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Firefly_1.png-BQsH4NjP1ZvorvqAweYLhQqY4zr1oM.jpeg"
                alt="SmartReview - 顧客満足度とレビュー管理"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-white/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
