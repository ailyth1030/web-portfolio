const stats = [
  { value: '2+', label: '制作実績' },
  { value: '5+', label: '対応業種' },
  { value: '最短', label: '3日で公開' },
]

export default function Hero() {
  const scrollToWorks = () => {
    document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* 背景グラデーション装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
      </div>

      {/* グリッドライン装飾 */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* バッジ */}
        <div className="inline-flex items-center gap-2 bg-indigo/10 border border-indigo/30 text-indigo-300 px-4 py-1.5 rounded-full mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="font-sans text-xs tracking-widest">SiteBoost AI — Web制作サービス</span>
        </div>

        {/* キャッチコピー */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-snug mb-6 animate-fade-in">
          Webの力で、<br />
          <span className="gradient-text">ビジネスを加速する。</span>
        </h1>

        <p className="font-sans font-light text-white/60 text-sm md:text-base leading-relaxed mb-12 max-w-xl mx-auto animate-fade-in">
          美容室・飲食店・工務店など、業種に合わせた本格Webサイトを制作します。<br />
          下記のデモサイトから、実際の仕上がりをご確認ください。
        </p>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <button
            onClick={scrollToWorks}
            className="font-sans text-sm tracking-wider px-8 py-3.5 bg-indigo text-white hover:bg-indigo-dark transition-colors duration-300 rounded group flex items-center gap-2"
          >
            制作実績を見る
            <span className="group-hover:translate-x-1 transition-transform duration-300">↓</span>
          </button>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="font-sans text-sm tracking-wider px-8 py-3.5 border border-white/20 text-white/80 hover:bg-white/10 transition-colors duration-300 rounded"
          >
            無料相談はこちら
          </a>
        </div>

        {/* 統計 */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-sm mx-auto animate-fade-in">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-playfair text-3xl font-bold text-white">{stat.value}</p>
              <p className="font-sans text-xs text-white/40 mt-1 tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="font-sans text-[10px] tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
