'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation/Navigation'
import FloatingParticles from '@/components/FloatingParticles/FloatingParticles'
import styles from '../discipline-page.module.css'
import { assetPath } from '@/lib/assetPath'

export default function Registrazione() {
  useEffect(() => {
    const scrollToTopBtn = document.createElement('button')
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'
    scrollToTopBtn.className = 'scroll-to-top'
    document.body.appendChild(scrollToTopBtn)

    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        scrollToTopBtn.classList.add('visible')
      } else {
        scrollToTopBtn.classList.remove('visible')
      }
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('scroll', handleScroll)
    scrollToTopBtn.addEventListener('click', scrollToTop)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      scrollToTopBtn.removeEventListener('click', scrollToTop)
      document.body.removeChild(scrollToTopBtn)
    }
  }, [])

  const programItems = [
    { icon: 'fas fa-microphone', text: 'Tecniche di registrazione' },
    { icon: 'fas fa-sliders-h', text: 'Mixing professionale' },
    { icon: 'fas fa-volume-up', text: 'Mastering audio' },
    { icon: 'fas fa-headphones', text: 'Monitoraggio' },
    { icon: 'fas fa-cog', text: 'Setup studio' },
    { icon: 'fas fa-play', text: 'Post-produzione' }
  ]

  return (
    <main className="mt-0">
      <Navigation />
      <FloatingParticles />
      
      <section className={styles.disciplineHero}>
        <div className="hero-background">
          <div 
            className="hero-bg-image"
            style={{ backgroundImage: `url(${assetPath('/assets/studio.webp')})` }}
          />
          <div className="hero-bg-overlay" />
        </div>
        
        <div className="hero-content">
          <h1 className={styles.disciplineTitle}>
            <i className="fas fa-microphone"></i>
            <span>VIDEO-LEZIONI REGISTRAZIONE</span>
          </h1>
          
          <div className={styles.disciplinePreview}>
            <div className="instrument-icons">
              <i className="fas fa-microphone"></i>
              <i className="fas fa-music"></i>
            </div>
            <h3>Corso di Registrazione</h3>
            <p>
              Impara le tecniche professionali di registrazione e post-produzione audio.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.disciplineContent}>
        <div className="content-grid">
          <div className={styles.contentCard}>
            <div className={styles.cardHeader}>
              <i className="fas fa-list"></i>
              <h3>Programma di Studio</h3>
            </div>
            <div className={styles.cardContent}>
              <p>
                Un percorso completo nella registrazione e post-produzione audio professionale.
              </p>
              <div className="program-grid">
                {programItems.map((item, index) => (
                  <div key={index} className="program-item">
                    <i className={item.icon}></i>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.disciplineCta}>
        <div className={styles.ctaContent}>
          <h2>Pronto a Registrare?</h2>
          <p>
            Contattami per una lezione di prova gratuita e scopri i segreti della registrazione professionale.
          </p>
          <div className={styles.ctaButtons}>
            <Link 
              href="/#contact" 
              className={`${styles.ctaButton} ${styles.primary}`}
            >
              <i className="fas fa-phone"></i>
              Prenota una Lezione
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
