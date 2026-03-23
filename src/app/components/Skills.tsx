const techStack = [
  { name: 'Next.js', desc: 'React フレームワーク', color: 'bg-slate-900 text-white' },
  { name: 'TypeScript', desc: '型安全な開発', color: 'bg-blue-600 text-white' },
  { name: 'Tailwind CSS', desc: 'ユーティリティCSS', color: 'bg-cyan-500 text-white' },
  { name: 'Vercel', desc: '高速デプロイ', color: 'bg-slate-800 text-white' },
  { name: 'Google Fonts', desc: '日本語対応フォント', color: 'bg-indigo-500 text-white' },
  { name: 'Unsplash API', desc: '高品質フリー素材', color: 'bg-emerald-600 text-white' },
]

const industries = [
  { icon: '✂️', name: '美容室・サロン', done: true },
  { icon: '🍝', name: '飲食店・カフェ', done: true },
  { icon: '🏗️', name: '工務店・リフォーム', done: true },
  { icon: '🏥', name: 'クリニック・整体', done: false },
  { icon: '⚖️', name: '士業・コンサル', done: false },
  { icon: '🛍️', name: 'EC・ショップ', done: false },
  { icon: '🏨', name: 'ホテル・宿泊', done: false },
  { icon: '📚', name: 'スクール・教室', done: false },
]

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'スマホ完全対応',
    desc: 'すべてのデバイスで美しく表示されるレスポンシブデザイン。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '表示速度が速い',
    desc: 'Next.jsの静的生成で、Lighthouseスコア90点以上を実現。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO対策済み',
    desc: 'メタタグ・OGP・セマンティックHTMLで検索対策も万全。',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-20 animate-on-scroll">
          <span className="font-sans text-xs text-indigo tracking-widest uppercase font-medium">
            Skills &amp; Features
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mt-4">
            技術力と対応業種
          </h2>
        </div>

        {/* 3つの強み */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => (
            <div key={f.title} className={`bg-offwhite rounded-xl p-8 animate-on-scroll delay-${i + 1}`}>
              <div className="w-12 h-12 rounded-lg bg-indigo/10 text-indigo flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">{f.title}</h3>
              <p className="font-sans font-light text-secondary text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 技術スタック */}
          <div className="animate-on-scroll">
            <h3 className="font-serif text-xl font-semibold text-primary mb-6">使用技術</h3>
            <div className="grid grid-cols-2 gap-3">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex items-center gap-3 bg-offwhite rounded-lg p-3">
                  <span className={`font-sans text-xs font-bold px-2.5 py-1 rounded ${tech.color} shrink-0`}>
                    {tech.name}
                  </span>
                  <span className="font-sans text-xs text-secondary">{tech.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 対応業種 */}
          <div className="animate-on-scroll delay-2">
            <h3 className="font-serif text-xl font-semibold text-primary mb-6">対応業種</h3>
            <div className="grid grid-cols-2 gap-2.5">
              {industries.map((ind) => (
                <div
                  key={ind.name}
                  className={`flex items-center gap-3 rounded-lg p-3 border ${
                    ind.done
                      ? 'bg-indigo/5 border-indigo/20 text-primary'
                      : 'bg-offwhite border-border text-muted'
                  }`}
                >
                  <span className="text-lg">{ind.icon}</span>
                  <span className="font-sans text-xs font-medium">{ind.name}</span>
                  {ind.done && (
                    <span className="ml-auto font-sans text-[10px] text-indigo bg-indigo/10 px-2 py-0.5 rounded-full">
                      実績あり
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
