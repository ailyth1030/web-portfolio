const steps = [
  {
    num: '01',
    title: 'ヒアリング',
    subtitle: '無料・30分',
    desc: '業種・ターゲット・希望デザイン・掲載内容などをメールまたはオンラインでお聞きします。デモサイトを参考にしながらご要望を整理します。',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'お見積もり・提案',
    subtitle: '1〜2営業日',
    desc: 'ヒアリング内容をもとにお見積もりと制作プランをご提案。デザインの方向性・ページ構成・費用感を明確にお伝えします。',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: '制作・確認',
    subtitle: '3〜10営業日',
    desc: '発注後、スピーディーに制作を開始。プレビューURLを共有してご確認いただきながら修正を進めます。細かい修正は何度でも対応します。',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    num: '04',
    title: '公開・納品',
    subtitle: 'ご入金確認後',
    desc: '高速サーバーへデプロイし、独自ドメイン設定・納品ドキュメントとともにお渡しします。公開後のサポートも対応可能です。',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
]

export default function Flow() {
  return (
    <section id="flow" className="py-28 md:py-36 bg-offwhite">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-20 animate-on-scroll">
          <span className="font-sans text-xs text-indigo tracking-widest uppercase font-medium">
            How it works
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mt-4">
            制作の流れ
          </h2>
          <p className="font-sans font-light text-secondary text-sm mt-4">
            ご相談から公開まで、最短3営業日で対応可能です。
          </p>
        </div>

        {/* ステップ */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative bg-white rounded-2xl p-6 shadow-sm border border-border animate-on-scroll delay-${i + 1}`}
            >
              {/* 矢印（デスクトップ） */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 bg-white border border-border rounded-full items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              {/* 番号 */}
              <div className="font-playfair text-5xl font-bold text-indigo/8 leading-none mb-4 select-none">
                {step.num}
              </div>

              {/* アイコン */}
              <div className="w-9 h-9 rounded-lg bg-indigo/10 text-indigo flex items-center justify-center mb-4">
                {step.icon}
              </div>

              {/* テキスト */}
              <p className="font-playfair italic text-indigo text-xs mb-1">{step.subtitle}</p>
              <h3 className="font-serif text-base font-semibold text-primary mb-3">{step.title}</h3>
              <p className="font-sans font-light text-secondary text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
