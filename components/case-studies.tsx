import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CaseStudies() {
  const cases = [
    {
      title: "東京都 ピアノ教室Aスクール",
      category: "ピアノ教室",
      students: "約80名",
      period: "6ヶ月",
      before: {
        rating: "3.2",
        inquiries: "月5件",
        issues: ["悪い口コミへの対応に時間を取られる", "どの保護者が満足しているか把握できない"],
      },
      after: {
        rating: "4.7 (+1.5点)",
        inquiries: "月23件 (4.6倍)",
        achievements: ["良い口コミ: 6ヶ月で58件獲得", "生徒継続率: 82% → 91%"],
      },
      comment: "保護者の満足度が可視化されたことで、どのクラス・講師が高評価なのかが一目瞭然になりました。",
    },
    {
      title: "大阪府 スイミングスクールBクラブ",
      category: "スイミングスクール",
      students: "約250名",
      period: "4ヶ月",
      before: {
        rating: "3.5",
        inquiries: "伸び悩み",
        issues: ["月に2-3件の悪い口コミ対応に疲弊", "保護者からのクレーム対応が後手に回る"],
      },
      after: {
        rating: "4.6 (+1.1点)",
        inquiries: "1.8倍",
        achievements: ["悪い口コミ: ほぼゼロ（月0.2件）", "良い口コミ獲得: 4ヶ月で50件"],
      },
      comment:
        "不満をもつ保護者と直接対話できる仕組みが素晴らしいです。問題を早期に発見して解決できるので、退会率も大幅に下がりました。",
    },
    {
      title: "福岡県 英会話教室Cスクール",
      category: "英会話教室",
      students: "約120名",
      period: "3ヶ月",
      before: {
        rating: "口コミ数少",
        inquiries: "月8件",
        issues: ["口コミ依頼をしても誰も書いてくれない", "新規入会の決め手となる口コミが少ない"],
      },
      after: {
        rating: "回答率65%",
        inquiries: "月19件",
        achievements: ["口コミ投稿率: 40%", "3ヶ月で32件の口コミ獲得"],
      },
      comment: "テンプレートがあるので導入が簡単でした。わずか1時間でセットアップ完了。保護者も好評です。",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">導入事例</h2>
          <p className="text-lg text-muted-foreground">実際の導入企業様の成功事例をご紹介</p>
        </div>

        <div className="space-y-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-primary/5">
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <CardTitle className="text-2xl">{caseStudy.title}</CardTitle>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {caseStudy.category}
                    </span>
                    <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      生徒数: {caseStudy.students}
                    </span>
                    <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      導入期間: {caseStudy.period}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-destructive">Before（導入前の課題）</h4>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm">
                        <span className="font-medium">口コミ評価:</span> {caseStudy.before.rating}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">新規問い合わせ:</span> {caseStudy.before.inquiries}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {caseStudy.before.issues.map((issue, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-destructive mt-1">•</span>
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-accent">After（導入後の成果）</h4>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm">
                        <span className="font-medium">口コミ評価:</span> {caseStudy.after.rating}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">新規問い合わせ:</span> {caseStudy.after.inquiries}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {caseStudy.after.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-sm leading-relaxed italic">「{caseStudy.comment}」</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
