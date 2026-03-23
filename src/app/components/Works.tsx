import Image from 'next/image'

const works = [
  {
    id: 1,
    category: '美容室 / ヘアサロン',
    name: 'hair salon LIEN',
    nameJp: 'ヘアサロン リアン',
    description:
      'くすみピンク×ベージュの上質な雰囲気。スタイリスト紹介・スタイルギャラリー・LINE予約など、美容室に必要な機能をすべて網羅したワンページLP。',
    tags: ['美容室', 'ヘアサロン', 'LP', 'LINE予約'],
    url: 'https://hair-salon-lien.vercel.app',
    thumbnail: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#c4a68a',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-700',
    accentBorder: 'border-amber-200',
  },
  {
    id: 2,
    category: 'イタリアンレストラン',
    name: 'trattoria SOLE',
    nameJp: 'トラットリア ソーレ',
    description:
      'ワインレッドが映える本格イタリアンLP。手打ちパスタへのこだわりや厳選ワインを魅力的に訴求。ギャラリー・ネット予約誘導・フォームを完備。',
    tags: ['飲食店', 'イタリアン', 'LP', 'ご予約フォーム'],
    url: 'https://trattoria-sole-two.vercel.app',
    thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#722f37',
    accentBg: 'bg-red-50',
    accentText: 'text-red-800',
    accentBorder: 'border-red-200',
  },
]

export default function Works() {
  return (
    <section id="works" className="py-28 md:py-36 bg-offwhite">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-20 animate-on-scroll">
          <span className="font-sans text-xs text-indigo tracking-widest uppercase font-medium">
            Portfolio
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mt-4">
            制作実績
          </h2>
          <p className="font-sans font-light text-secondary text-sm mt-4 leading-relaxed">
            実際のデモサイトをご覧いただけます。ボタンをクリックして公開中のサイトをご確認ください。
          </p>
        </div>

        {/* 実績カード */}
        <div className="space-y-24">
          {works.map((work, i) => (
            <article
              key={work.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-on-scroll ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* ブラウザモック */}
              <div className={`browser-mock ${i % 2 === 1 ? 'delay-1' : ''}`}>
                {/* ブラウザバー */}
                <div className="bg-slate-200 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white rounded text-[11px] text-slate-400 px-3 py-1 text-center truncate min-w-0">
                    {work.url}
                  </div>
                  <div className="shrink-0 w-5 h-5 flex items-center justify-center">
                    <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
                {/* スクリーンショット */}
                <div className="relative h-60 md:h-72 overflow-hidden group bg-slate-100">
                  <Image
                    src={work.thumbnail}
                    alt={`${work.name} のデモサイト`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                  {/* ホバーオーバーレイ */}
                  <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-white border border-white/60 px-6 py-2.5 hover:bg-white hover:text-navy transition-colors duration-200 flex items-center gap-2"
                    >
                      デモサイトを開く
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* テキスト */}
              <div>
                <span className={`font-sans text-xs font-medium tracking-widest uppercase tag ${work.accentBg} ${work.accentText} border ${work.accentBorder}`}>
                  {work.category}
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-primary mt-4 mb-1">
                  {work.name}
                </h3>
                <p className="font-sans text-xs text-muted tracking-widest mb-5">{work.nameJp}</p>

                <p className="font-sans font-light text-secondary text-sm leading-relaxed mb-6">
                  {work.description}
                </p>

                {/* タグ */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {work.tags.map((tag) => (
                    <span key={tag} className="font-sans text-xs text-secondary bg-white border border-border px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ボタン */}
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm text-white bg-indigo hover:bg-indigo-dark transition-colors duration-300 px-6 py-3 rounded group"
                >
                  デモサイトを見る
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* 今後追加予定ノート */}
        <div className="mt-20 text-center animate-on-scroll">
          <div className="inline-flex items-center gap-3 border border-dashed border-border rounded-lg px-8 py-5 text-muted">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
            <span className="font-sans text-sm">工務店・クリニック・士業など、順次追加予定</span>
          </div>
        </div>
      </div>
    </section>
  )
}
