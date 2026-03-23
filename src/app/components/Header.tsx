'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: '制作実績', href: '#works' },
  { label: 'スキル', href: '#skills' },
  { label: '制作の流れ', href: '#flow' },
  { label: 'お問い合わせ', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* ロゴ */}
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); handleNav('#top') }}
          className="flex items-baseline gap-2"
        >
          <span className={`font-playfair font-bold text-lg tracking-wide transition-colors duration-300 ${
            scrolled ? 'text-primary' : 'text-white'
          }`}>
            MH Creative
          </span>
          <span className={`font-sans text-xs font-medium tracking-widest transition-colors duration-300 ${
            scrolled ? 'text-indigo' : 'text-indigo-300'
          }`}>
            Portfolio
          </span>
        </a>

        {/* デスクトップナビ */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
              className={`font-sans text-xs tracking-wider transition-colors duration-300 hover:text-indigo ${
                scrolled ? 'text-secondary' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
            className="font-sans text-xs tracking-wider px-5 py-2 bg-indigo text-white hover:bg-indigo-dark transition-colors duration-300 rounded"
          >
            無料相談
          </a>
        </nav>

        {/* ハンバーガー */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className={`block w-5 h-px transition-all duration-300 ${
              menuOpen
                ? i === 0 ? 'rotate-45 translate-y-[5px] bg-primary'
                : i === 1 ? 'opacity-0 bg-primary'
                : '-rotate-45 -translate-y-[5px] bg-primary'
                : scrolled ? 'bg-primary' : 'bg-white'
            }`} />
          ))}
        </button>
      </div>

      {/* モバイルメニュー */}
      <div className={`md:hidden fixed inset-0 top-16 bg-white transition-all duration-300 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <nav className="flex flex-col items-center justify-center h-full gap-8 pb-16">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
              className="font-serif text-2xl text-primary hover:text-indigo transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
            className="mt-4 font-sans text-sm px-10 py-3 bg-indigo text-white hover:bg-indigo-dark transition-colors duration-300 rounded"
          >
            無料相談はこちら
          </a>
        </nav>
      </div>
    </header>
  )
}
