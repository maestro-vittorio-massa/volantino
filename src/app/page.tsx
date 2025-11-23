'use client'

import { useEffect, useState } from 'react'
// import Image from 'next/image' // Unused for now
// import Link from 'next/link' // Unused for now
// import Video360 from '@/components/Video360'
import Hero from '@/components/Hero/Hero'
import VideoLessons from '@/components/VideoLessons/VideoLessons'
import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const [currentYear] = useState(new Date().getFullYear())
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 500)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className="mt-0">
      {/* Hero Section */}
      <Hero />

      {/* Video Lessons Section */}
      {/* <VideoLessons /> */}

      {/* Contact Section */}
      <Contact />

      {/* About Section */}
      <About />

      {/* Footer */}
      <Footer currentYear={currentYear} />

      {/* Scroll To Top Button */}
      <button
        aria-label="Scroll to top"
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </main>
  )
}