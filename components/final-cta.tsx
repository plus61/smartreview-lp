import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Check } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="cloud-decoration w-96 h-96 top-10 right-20 opacity-20"></div>
      <div className="cloud-decoration w-80 h-80 bottom-10 left-20 opacity-15"></div>

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-balance text-white leading-tight">
          今すぐ無料で始めて、
          <br />
          良い口コミを増やしませんか？
        </h2>
        <p className="text-xl text-white/90 mb-12">クレジットカード不要・14日間すべての機能が使い放題</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            size="lg"
            className="text-lg px-12 py-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-xl hover:shadow-2xl transition-all font-bold"
          >
            無料で14日間試す
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-12 py-8 bg-white text-primary border-white hover:bg-white/90 font-bold"
          >
            <Play className="mr-2 h-6 w-6" />
            デモ動画を見る
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {["14日間は完全無料", "クレジットカード登録不要", "自動課金なし", "解約もワンクリック"].map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-2 text-base text-white/95">
              <Check className="h-5 w-5 text-secondary flex-shrink-0" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
