import { ArrowRight } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "アンケート送信",
      description: "LINEやメールで簡単アンケートを保護者に送信",
      details: ["お子様のレッスンについて教えてください", "ワンクリックで回答可能", "所要時間30秒"],
      icon: "📱",
    },
    {
      number: "02",
      title: "満足度を自動判定",
      description: "評価に応じて最適な遷移先へ自動振り分け",
      details: [
        "⭐ 高評価（4-5点）→ 外部口コミサイトへ誘導",
        "😐 中評価（3点）→ お礼メッセージのみ",
        "😞 低評価（1-2点）→ 内部フィードバックフォームへ",
      ],
      icon: "🎯",
    },
    {
      number: "03",
      title: "良い口コミだけが増える",
      description: "GMOくちコミなど外部サイトの評価が自動的に向上",
      details: ["悪い口コミの公開リスクを最小化", "不満は内部で把握してサービス改善に活用"],
      icon: "📈",
    },
  ]

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">SmartReviewの仕組み</h2>
          <p className="text-xl text-muted-foreground">3ステップで良い口コミを自動的に増やします</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card border border-border rounded-3xl p-10 h-full hover:shadow-xl hover:border-primary/30 transition-all">
                <div className="text-7xl mb-6">{step.icon}</div>
                <div className="text-sm font-bold text-primary mb-3 tracking-wider">STEP {step.number}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-base">{step.description}</p>
                <ul className="space-y-3">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-sm leading-relaxed flex items-start gap-3">
                      <span className="text-accent mt-1 font-bold">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-10 w-10 text-primary" strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-accent/10 text-accent rounded-full font-medium text-base border border-accent/20">
            💡 低評価者には内部でヒアリング→サービス改善に活用
          </div>
        </div>
      </div>
    </section>
  )
}
