export function CompanyLogos() {
  const categories = [
    "ピアノ教室",
    "スイミングスクール",
    "英会話教室",
    "プログラミング教室",
    "ダンススタジオ",
    "学習塾",
    "体操教室",
    "書道教室",
  ]

  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        <p className="text-center text-base font-medium text-foreground mb-4">導入実績</p>
        <p className="text-center text-3xl font-bold text-foreground mb-12">500教室以上</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <span className="text-sm font-medium text-foreground text-center">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
