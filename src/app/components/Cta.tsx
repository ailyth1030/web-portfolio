export default function Cta() {
  return (
    <section id="contact" className="py-28 md:py-40 bg-navy relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-indigo/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div className="animate-on-scroll">
          <span className="font-sans text-xs text-indigo-300 tracking-widest uppercase font-medium">
            Contact
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white mt-5 mb-6 leading-snug">
            まずは、お気軽に<br />ご相談ください。
          </h2>
          <p className="font-sans font-light text-white/50 text-sm leading-relaxed mb-14">
            「どんなサイトが作れますか？」「費用はどのくらい？」など、<br />
            些細な質問でも大歓迎です。無料でご相談を承ります。
          </p>

          {/* メールCTA */}
          <a
            href="mailto:info@mhlab.one"
            className="group inline-flex items-center gap-5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo/40 transition-all duration-300 rounded-2xl px-8 py-6 mx-auto"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo/25 text-indigo-300 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-sans text-xs text-white/40 tracking-wider mb-1">メールでお問い合わせ</p>
              <p className="font-playfair text-xl md:text-2xl text-white group-hover:text-indigo-300 transition-colors duration-200">
                info@mhlab.one
              </p>
            </div>
            <svg className="w-5 h-5 text-white/20 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all duration-200 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* 補足 */}
          <p className="font-sans text-xs text-white/20 mt-12 leading-loose">
            合同会社MH研究所 〒101-0041 東京都千代田区神田須田町1-7-8 VORT秋葉原Ⅳ 2F<br />
            通常2営業日以内にご返信いたします。
          </p>
        </div>
      </div>
    </section>
  )
}
