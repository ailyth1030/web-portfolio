import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a0f1e',
        'navy-light': '#141c35',
        indigo: '#6366f1',
        'indigo-dark': '#4f46e5',
        offwhite: '#f8fafc',
        primary: '#0f172a',
        secondary: '#475569',
        muted: '#94a3b8',
        border: '#e2e8f0',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        serif: ['var(--font-noto-serif-jp)', 'Georgia', 'serif'],
        sans: ['var(--font-noto-sans-jp)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
    },
  },
  plugins: [],
}

export default config
