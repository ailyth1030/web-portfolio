const techStack = [
  { name: 'Next.js', desc: 'Reactフレームワーク', color: 'bg-slate-900 text-white' },
  { name: 'TypeScript', desc: '型安全な開発', color: 'bg-blue-600 text-white' },
  { name: 'Tailwind CSS', desc: 'ユーティリティCSS', color: 'bg-cyan-500 text-white' },
  { name: 'Vercel', desc: '高速デプロイ', color: 'bg-slate-800 text-white' },
  { name: 'Google Fonts', desc: '日本語対応フォント', color: 'bg-indigo-500 text-white' },
  { name: 'Unsplash', desc: '高品質フリー素材', color: 'bg-emerald-600 text-white' },
]

const industries = [
  { icon: '✂️', name: '美容室・ヘアサロン' },
  { icon: '🍝', name: '飲食店・カフェ・バー' },
  { icon: '🏗️', name: '工務店・リフォーム' },
  { icon: '🏥', name: '整骨院・クリニック' },
  { icon: '⚖️', name: '士業・コンサルタント' },
  { icon: '🛍️', name: 'EC・ネットショップ' },
  { icon: '🏨', name: 'ホテル・宿泊施設' },
  { icon: '📚', name: 'スクール・教室' },
]

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'スマホ完全対応',
    desc: 'あらゆるデバイスで美しく表示されるレスポンシブデザイン。スマホでの閲覧率が高い業種でも安心です。',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '高速表示',
    desc: 'Next.jsの静的生成により、Lighthouseスコア90点以上を実現。表示が遅いと離脱する訪問者を逃しません。',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO対策済み',
    desc: 'メタタグ・OGP・構造化されたHTMLで検索エンジン対策も標準装備。Googleに正しく認識されるサイトを制作します。',
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {features.map((f, i) => (
            <div key={f.title} className={`group relative bg-offwhite rounded-2xl p-8 hover:bg-indigo/5 transition-colors duration-300 animate-on-scroll delay-${i + 1}`}>
              <div className="w-10 h-10 rounded-lg bg-indigo/10 text-indigo flex items-center justify-center mb-5 group-hover:bg-indigo group-hover:text-white transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="font-serif text-base font-semibold text-primary mb-2">{f.title}</h3>
              <p className="font-sans font-light text-secondary text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* 技術スタック */}
          <div className="animate-on-scroll">
            <h3 className="font-serif text-xl font-semibold text-primary mb-2">使用技術</h3>
            <p className="font-sans text-xs text-muted mb-6">モダンな技術スタックで高品質なサイトを構築します。</p>
            <div className="space-y-2.5">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex items-center gap-3 py-2.5 border-b border-border last:border-0">
                  <span className={`font-sans text-xs font-bold px-2.5 py-1 rounded shrink-0 ${tech.color}`}>
                    {tech.name}
                  </span>
                  <span className="font-sans text-sm text-secondary">{tech.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 対応業種 */}
          <div className="animate-on-scroll delay-2">
            <h3 className="font-serif text-xl font-semibold text-primary mb-2">対応業種</h3>
            <p className="font-sans text-xs text-muted mb-6">業種を問わず幅広く対応いたします。</p>
            <div className="space-y-1">
              {industries.map((ind) => (
                <div key={ind.name} className="flex items-center gap-3 py-2.5 border-b border-border last:border-0">
                  <svg className="w-4 h-4 text-indigo shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base leading-none">{ind.icon}</span>
                  <span className="font-sans text-sm text-primary">{ind.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
