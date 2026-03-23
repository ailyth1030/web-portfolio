'use client'

import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Works from './components/Works'
import Skills from './components/Skills'
import Flow from './components/Flow'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.animate-on-scroll, .animate-fade-in, .animate-slide-up'
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <Header />
      <div id="top"><Hero /></div>
      <Works />
      <Skills />
      <Flow />
      <Cta />
      <Footer />
    </main>
  )
}
