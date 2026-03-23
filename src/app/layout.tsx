import type { Metadata, Viewport } from 'next'
import { Noto_Serif_JP, Noto_Sans_JP, Playfair_Display } from 'next/font/google'
import './globals.css'

const notoSerifJp = Noto_Serif_JP({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
})

const notoSansJp = Noto_Sans_JP({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Web制作実績 | SiteBoost AI – 合同会社MH研究所',
  description:
    '中小企業・個人商店向けの本格Webサイト制作。美容室・飲食店・工務店など業種別のデモサイトをご覧いただけます。Next.js × Tailwind CSSによる高品質なLP制作。',
  keywords: ['Web制作', 'ホームページ制作', 'LP制作', 'Next.js', '東京', '格安', 'SiteBoost'],
  openGraph: {
    title: 'Web制作実績 | SiteBoost AI',
    description: '業種別のデモサイトをご覧ください。美容室・飲食店・工務店など対応実績多数。',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'SiteBoost AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web制作実績 | SiteBoost AI',
    description: '業種別のデモサイトをご覧ください。',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#6366f1',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSerifJp.variable} ${notoSansJp.variable} ${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  )
}
