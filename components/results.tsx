import { TrendingUp, MessageSquare, Shield } from "lucide-react"

export function Results() {
  const stats = [
    {
      icon: TrendingUp,
      value: "+0.8点UP",
      label: "口コミ評価",
      detail: "平均3.7 → 4.5",
      color: "text-accent",
    },
    {
      icon: MessageSquare,
      value: "3.2倍増加",
      label: "口コミ投稿数",
      detail: "月平均3件 → 10件",
      color: "text-primary",
    },
    {
      icon: Shield,
      value: "-73%削減",
      label: "悪い口コミ発生率",
      detail: "月2件 → 月0.5件",
      color: "text-destructive",
    },
  ]

  const testimonials = [
    {
      name: "佐藤様",
      role: "オーナー",
      company: "東京都・ピアノ教室 Aスクール",
      content:
        "以前は1件の悪い口コミで苦労していましたが、今では月20件の良い口コミが自然に集まります。不満を持つ保護者とも直接対話できるようになり、サービス改善にも役立っています",
      results: ["口コミ評価: 3.2 → 4.7", "新規問い合わせ: 月5件 → 月23件"],
    },
    {
      name: "田中様",
      role: "マネージャー",
      company: "大阪府・スイミングスクール Bクラブ",
      content:
        "悪い口コミへの対応に疲弊していましたが、SmartReviewのおかげで3ヶ月で良い口コミが50件獲得できました。保護者の満足度を数値で把握できるのも大きなメリットです",
      results: ["悪い口コミ件数: 月3件 → 月0件", "良い口コミ獲得: 3ヶ月で50件"],
    },
    {
      name: "鈴木様",
      role: "代表",
      company: "福岡県・英会話教室 Cスクール",
      content:
        "口コミ依頼をしても誰も書いてくれなかったのですが、テンプレートがあるので導入が簡単でした。回答率65%、口コミ投稿率40%を達成しています",
      results: ["アンケート回答率: 15% → 65%", "口コミ投稿率: 5% → 40%"],
    },
  ]

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">数字で証明する導入効果</h2>
          <p className="text-lg text-primary-foreground/80">実際の導入企業様の平均データ</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-primary-foreground/70">{stat.detail}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center mb-12">お客様の声</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-8">
                <div className="mb-6">
                  <div className="font-bold text-lg mb-1">{testimonial.company}</div>
                  <div className="text-sm text-primary-foreground/70">
                    {testimonial.role}：{testimonial.name}
                  </div>
                </div>
                <p className="text-primary-foreground/90 leading-relaxed mb-6">「{testimonial.content}」</p>
                <div className="space-y-2 pt-4 border-t border-primary-foreground/20">
                  <div className="text-sm font-semibold mb-2">導入効果:</div>
                  {testimonial.results.map((result, idx) => (
                    <div key={idx} className="text-sm text-primary-foreground/80 flex items-center gap-2">
                      <span className="text-accent">•</span>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
