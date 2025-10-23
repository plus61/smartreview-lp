import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "スタータープラン",
      price: "¥4,980",
      description: "小規模教室向け",
      features: [
        "月間100件まで",
        "基本3種類のテンプレート",
        "1店舗のみ",
        "2サイト連携",
        "基本分析",
        "メールサポート",
        "1回リマインド",
        "CSVエクスポート",
      ],
      popular: false,
    },
    {
      name: "スタンダードプラン",
      price: "¥9,980",
      description: "最も人気のプラン",
      features: [
        "月間500件まで",
        "全15種類のテンプレート",
        "3店舗まで",
        "5サイト連携",
        "詳細分析",
        "チャットサポート",
        "2回リマインド",
        "CSV + Excelエクスポート",
      ],
      popular: true,
    },
    {
      name: "プレミアムプラン",
      price: "¥19,980",
      description: "大規模教室向け",
      features: [
        "無制限",
        "全15種類 + カスタム",
        "無制限",
        "無制限",
        "AI分析レポート付き",
        "電話 + 訪問サポート",
        "カスタム設定可",
        "CSV + Excel + API連携",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <p className="text-sm font-bold text-primary mb-4 tracking-wider">PRICE</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">シンプルで分かりやすい料金プラン</h2>
          <p className="text-xl text-muted-foreground">14日間無料トライアル・初期費用なし・いつでも解約可能</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative rounded-3xl ${plan.popular ? "border-primary border-2 shadow-2xl scale-105 bg-white" : "bg-white"}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-secondary text-secondary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    最も人気
                  </div>
                </div>
              )}
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground text-lg">/月</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-8">
                <Button
                  className={`w-full ${plan.popular ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  14日間無料で試す
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              <span>初期費用なし</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              <span>14日間無料トライアル</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              <span>クレジットカード登録不要</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              <span>いつでも解約可能</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
