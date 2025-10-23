import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Waves, Languages, Code, Dumbbell, GraduationCap } from "lucide-react"

export function Templates() {
  const templates = [
    {
      icon: Music,
      title: "ピアノ教室向け",
      items: ["講師の指導力", "練習サポート体制", "発表会の満足度", "教材の質", "上達実感"],
    },
    {
      icon: Waves,
      title: "スイミングスクール向け",
      items: ["コーチングの質", "上達実感", "施設の清潔さ", "安全管理体制", "クラスの雰囲気"],
    },
    {
      icon: Languages,
      title: "英会話教室向け",
      items: ["カリキュラムの質", "講師の質", "上達実感", "料金の妥当性", "教室の雰囲気"],
    },
    {
      icon: Code,
      title: "プログラミング教室向け",
      items: [
        "カリキュラムの分かりやすさ",
        "子供の興味・関心度",
        "講師のサポート力",
        "教材・機器の充実度",
        "将来への期待値",
      ],
    },
    {
      icon: Dumbbell,
      title: "ダンス・体操教室向け",
      items: ["指導方法の適切さ", "教室の雰囲気", "イベント・発表会の満足度", "上達実感", "講師とのコミュニケーション"],
    },
    {
      icon: GraduationCap,
      title: "学習塾向け",
      items: ["講師の指導力", "成績向上実感", "カリキュラムの質", "料金の妥当性", "進路相談のサポート"],
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">すぐに使える業種別テンプレート</h2>
          <p className="text-lg text-muted-foreground">全15業種のテンプレートを用意。導入後すぐに利用開始できます</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <template.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{template.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {template.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            その他、書道教室、そろばん教室、サッカー教室、バレエ教室、美術教室など
            <br />
            <span className="font-semibold text-foreground">全15業種のテンプレート</span>をご用意しています
          </p>
        </div>
      </div>
    </section>
  )
}
