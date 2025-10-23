import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "口コミサイトはどこに対応していますか？",
      answer:
        "主要な口コミサイトに対応しています。GMOくちコミ、Googleマイビジネス（Googleマップ）、エキテン、食べログ（飲食系の習い事向け）、その他カスタム設定も可能です。スタンダードプラン以上では複数サイトへの同時誘導も可能です。",
    },
    {
      question: "既存のアンケートツールとの違いは何ですか？",
      answer:
        "SmartReviewの最大の特徴は「満足度に応じた遷移先の自動振り分け」機能です。一般的なアンケートツールは回答内容に関わらず全員が同じ画面へ遷移しますが、SmartReviewは高評価者→外部口コミサイトへ、低評価者→内部フィードバックフォームへと自動振り分けします。結果として良い口コミだけが増える仕組みです。",
    },
    {
      question: "技術的な知識は必要ですか？",
      answer:
        "全く必要ありません。テンプレートを選ぶ（1分）→質問項目を確認・編集（5分）→アンケートURLを保護者に送信（1分）の合計10分程度で開始できます。専任サポートスタッフが導入をお手伝いしますので、パソコンが苦手な方でも安心してご利用いただけます。",
    },
    {
      question: "LINEで配信できますか？",
      answer:
        "はい、可能です。LINE公式アカウントから配信、メールで配信、QRコードを印刷して配布、教室のWebサイトに埋め込みなど、様々な方法に対応しています。最も回答率が高いのはLINE配信（平均回答率65%）です。",
    },
    {
      question: "解約は簡単ですか？",
      answer:
        "はい、管理画面からワンクリックで解約可能です。違約金なし、最低利用期間なし、電話連絡不要、即日解約可能です。データのエクスポートも可能ですので、安心してご利用いただけます。",
    },
    {
      question: "個人情報の管理は大丈夫ですか？",
      answer:
        "万全のセキュリティ対策を実施しています。SSL/TLS暗号化通信、ISO27001準拠のデータセンター、定期的な脆弱性診断、アクセスログの記録、バックアップ体制を整えています。個人情報保護法に完全準拠しており、プライバシーマークも取得予定です。",
    },
    {
      question: "サポート体制はどうなっていますか？",
      answer:
        "プランに応じて充実したサポートを提供しています。スタータープランはメールサポート（24時間以内に返信）、スタンダードプランはメール+チャットサポート（営業時間内即時対応）、プレミアムプランはメール+チャット+電話+訪問（専任担当者が対応）です。全プランで導入時のオンライン説明会（30分）を無料で実施しています。",
    },
    {
      question: "無料トライアル期間中に解約したら料金は発生しますか？",
      answer:
        "一切発生しません。14日間完全無料、クレジットカード登録不要、全機能を制限なく利用可能、自動課金なしです。期間終了後、自動的に無料プランへ移行しますので、安心してお試しいただけます。",
    },
    {
      question: "複数店舗での利用は可能ですか？",
      answer:
        "はい、スタンダードプラン以上で対応しています。スタータープランは1店舗、スタンダードプランは3店舗、プレミアムプランは無制限です。店舗ごとに異なるアンケートを設定でき、統合ダッシュボードで全店舗の状況を一元管理できます。",
    },
    {
      question: "アンケート回答率を上げるコツはありますか？",
      answer:
        "以下の施策で平均回答率65%を達成できます：①タイミング（レッスン終了後24時間以内に配信）、②配信方法（LINEでの配信が最も効果的）、③質問数（3-5問程度にコンパクトに）、④リマインド（3日後、7日後に自動リマインド）、⑤インセンティブ（回答者に小さなプレゼント）。これらはすべてSmartReviewの標準機能で実現できます。",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">よくある質問</h2>
          <p className="text-lg text-muted-foreground">導入前の疑問にお答えします</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
