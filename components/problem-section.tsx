import { X } from "lucide-react"

export function ProblemSection() {
  const problems = [
    "不満を持つ保護者が外部サイトに低評価を書いてしまう",
    "口コミ依頼をしても実際に書いてくれる人が少ない",
    "どの保護者に口コミをお願いすべきか分からない",
    "悪い口コミが来ると評価が下がって集客に悪影響",
  ]

  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">こんなお悩み、ありませんか？</h2>
        <p className="text-xl text-muted-foreground mb-16">習い事教室の口コミ管理でよくある課題</p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-8 bg-white border border-destructive/10 rounded-2xl text-left shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="h-5 w-5 text-destructive" />
                </div>
              </div>
              <p className="text-foreground leading-relaxed text-base">{problem}</p>
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-bold text-lg shadow-lg">
          SmartReviewなら、これらの問題を一気に解決できます
        </div>
      </div>
    </section>
  )
}
