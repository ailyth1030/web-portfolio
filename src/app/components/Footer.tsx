export default function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 text-white/50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* ロゴ */}
          <div className="flex items-baseline gap-2">
            <span className="font-playfair font-bold text-base text-white tracking-wide">SiteBoost</span>
            <span className="font-sans text-xs font-medium text-indigo tracking-widest">AI</span>
            <span className="font-sans text-xs ml-2">– 合同会社MH研究所</span>
          </div>

          {/* ナビ */}
          <nav className="flex items-center gap-6">
            {[
              { label: '制作実績', href: '#works' },
              { label: 'スキル', href: '#skills' },
              { label: '制作の流れ', href: '#flow' },
              { label: 'お問い合わせ', href: '#contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="font-sans text-xs hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 text-center">
          <p className="font-sans text-xs">
            © 2024 合同会社MH研究所. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
