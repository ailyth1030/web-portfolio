export default function Cta() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-navy relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="animate-on-scroll">
          <span className="font-sans text-xs text-indigo-300 tracking-widest uppercase font-medium">
            Contact
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mt-4 mb-6 leading-snug">
            まずは、お気軽に<br />ご相談ください。
          </h2>
          <p className="font-sans font-light text-white/60 text-sm leading-relaxed mb-12">
            「どんなサイトが作れますか？」「予算はどのくらい？」など、<br />
            些細な質問でも大歓迎です。無料でご相談を承ります。
          </p>

          {/* 連絡方法 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {/* メール */}
            <a
              href="mailto:info@mhlab.one"
              className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-indigo/40 hover:bg-indigo/5 transition-all duration-300 rounded-xl p-5 text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo/20 text-indigo-300 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-sans text-xs text-white/40 tracking-wider mb-0.5">メールでお問い合わせ</p>
                <p className="font-sans text-sm text-white group-hover:text-indigo-300 transition-colors duration-200">
                  info@mhlab.one
                </p>
              </div>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-indigo/40 hover:bg-indigo/5 transition-all duration-300 rounded-xl p-5 text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo/20 text-indigo-300 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div>
                <p className="font-sans text-xs text-white/40 tracking-wider mb-0.5">X (Twitter) でDM</p>
                <p className="font-sans text-sm text-white group-hover:text-indigo-300 transition-colors duration-200">
                  @siteboost_ai
                </p>
              </div>
            </a>
          </div>

          {/* 補足 */}
          <p className="font-sans text-xs text-white/30 leading-relaxed">
            合同会社MH研究所 〒101-0041 東京都千代田区神田須田町1-7-8 VORT秋葉原Ⅳ 2F<br />
            通常2営業日以内にご返信いたします。
          </p>
        </div>
      </div>
    </section>
  )
}
