'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPlayCircle, 
  faUser, 
  faEnvelope, 
  faHome 
} from '@fortawesome/free-solid-svg-icons'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [expandedNav, setExpandedNav] = useState<string | null>(null)
  const [hasAutoOpened, setHasAutoOpened] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      // Hide navigation when scrolling down, show when at top
      setIsScrolled(scrollTop > 100)

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      
      sections.forEach(section => {
        const htmlSection = section as HTMLElement
        const sectionTop = htmlSection.offsetTop
        const sectionHeight = htmlSection.offsetHeight
        const sectionBottom = sectionTop + sectionHeight
        
        // Check if section is in viewport
        if (scrollTop >= sectionTop - 200 && scrollTop <= sectionBottom - 100) {
          current = section.getAttribute('id') || ''
        }
      })
      
      setActiveSection(current)
      
      // Auto-expand nav item when section is in view
      if (current) {
        setExpandedNav(current)
      } else {
        setExpandedNav(null)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-open navigation on page load
  useEffect(() => {
    if (!hasAutoOpened && pathname === '/') {
      setExpandedNav('video-lessons')
      setHasAutoOpened(true)
      
      // Auto-close after 5 seconds
      const timer = setTimeout(() => {
        setExpandedNav(null)
      }, 5000)
      
      return () => clearTimeout(timer)
    }
  }, [hasAutoOpened, pathname])

  const navLinks = [
    { href: '/#video-lessons', icon: faPlayCircle, text: 'VIDEOLEZIONI', id: 'video-lessons' },
    { href: '/#about', icon: faUser, text: 'About', id: 'about' },
    { href: '/#contact', icon: faEnvelope, text: 'Contact', id: 'contact' },
  ]

  return (
    <>
      {/* Absolute positioned navigation for first 3 items */}
      {pathname === '/' && (
        <div className={styles.absoluteNav}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.absoluteNavLink} ${
                expandedNav === link.id ? styles.expanded : ''
              } ${
                activeSection === link.id ? styles.active : ''
              }`}
              onMouseEnter={() => setExpandedNav(link.id)}
              onMouseLeave={() => {
                // Only close if not in the active section
                if (activeSection !== link.id) {
                  setExpandedNav(null)
                }
              }}
            >
              <FontAwesomeIcon icon={link.icon} className={styles.navIcon} />
              <span className={styles.navText}>{link.text}</span>
            </a>
          ))}
        </div>
      )}

      <header className={`${styles.siteHeader} ${isScrolled ? styles.hidden : ''}`}>
        <nav className={styles.nav}>
          <div className={styles.navLeft}>
            {pathname !== '/' && (
              <>
                <Link href="/" className={styles.navLink}>
                  <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
                  <span className={styles.navText}>Home</span>
                </Link>
                <Link href="/#about" className={styles.navLink}>
                  <FontAwesomeIcon icon={faUser} className={styles.navIcon} />
                  <span className={styles.navText}>About</span>
                </Link>
              </>
            )}
          </div>
          
          <h1 className={styles.siteTitle}>
            <div className={styles.titleLine}>
              <span className={styles.musicKey}>𝄞</span>
              <span>LEZIONI DI</span>
            </div>
            <div className={styles.titleLine}>
              <span className={styles.musicKey}>𝄢</span>
              <span>MUSICA</span>
            </div>
          </h1>
          
          <div className={styles.navRight}>
            {/* Keep right nav empty for home page since we have absolute nav */}
          </div>
        </nav>
      </header>
    </>
  )
}
