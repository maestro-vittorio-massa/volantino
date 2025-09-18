'use client'

import { useEffect } from 'react'
// import Image from 'next/image' // Unused for now
import Link from 'next/link'
import Navigation from '@/components/Navigation/Navigation'
import FloatingParticles from '@/components/FloatingParticles/FloatingParticles'
import styles from '../discipline-page.module.css'

export default function BassoChitarra() {
  useEffect(() => {
    // Scroll to top functionality
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
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
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
    { icon: 'fas fa-guitar', text: 'Tecnica di base e accordi' },
    { icon: 'fas fa-hand-rock', text: 'Plettro e dita' },
    { icon: 'fas fa-music', text: 'Scale e arpeggi' },
    { icon: 'fas fa-volume-up', text: 'Timing e groove' },
    { icon: 'fas fa-eye', text: 'Lettura tablature' },
    { icon: 'fas fa-users', text: 'Suonare in gruppo' }
  ]

  const equipmentItems = [
    {
      icon: 'fas fa-guitar',
      title: 'Chitarra/Basso',
      description: 'Strumento principale per le lezioni'
    },
    {
      icon: 'fas fa-volume-up',
      title: 'Amplificatore',
      description: 'Per lezioni con chitarra elettrica'
    },
    {
      icon: 'fas fa-cable',
      title: 'Cavo',
      description: 'Connessione strumento-amplificatore'
    },
    {
      icon: 'fas fa-tools',
      title: 'Plettri',
      description: 'Vari spessori per diverse tecniche'
    }
  ]

  const objectives = [
    {
      icon: 'fas fa-play',
      title: 'Principianti',
      description: 'Imparare le basi della chitarra/basso, accordi fondamentali e primi brani.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Intermedi',
      description: 'Sviluppare tecniche avanzate, improvvisazione e repertorio più complesso.'
    },
    {
      icon: 'fas fa-star',
      title: 'Avanzati',
      description: 'Perfezionare lo stile, preparare audizioni e sviluppare un sound personale.'
    }
  ]

  return (
    <main className="mt-0">
      <Navigation />
      <FloatingParticles />
      
      {/* Hero Section */}
      <section className={styles.disciplineHero}>
        <div className="hero-background">
          <div 
            className="hero-bg-image"
            style={{ backgroundImage: 'url(/assets/guitar.jpg)' }}
          />
          <div className="hero-bg-overlay" />
        </div>
        
        <div className="hero-content">
          <h1 className={styles.disciplineTitle}>
            <i className="fas fa-guitar"></i>
            <span>VIDEO-LEZIONI CHITARRA & BASSO</span>
          </h1>
          
          <div className={styles.disciplinePreview}>
            <div className="instrument-icons">
              <i className="fas fa-guitar"></i>
              <i className="fas fa-music"></i>
            </div>
            <h3>Corso di Chitarra e Basso</h3>
            <p>
              Per tutti i livelli. Tecnica, teoria e repertorio rock, pop, jazz e classico.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.disciplineContent}>
        <div className="content-grid">
          {/* Programma */}
          <div className={styles.contentCard}>
            <div className={styles.cardHeader}>
              <i className="fas fa-list"></i>
              <h3>Programma di Studio</h3>
            </div>
            <div className={styles.cardContent}>
              <p>
                Un percorso completo che copre tutti gli aspetti fondamentali della chitarra e del basso, 
                dalla tecnica di base all&apos;interpretazione musicale.
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

          {/* Obiettivi */}
          <div className={styles.contentCard}>
            <div className={styles.cardHeader}>
              <i className="fas fa-bullseye"></i>
              <h3>Obiettivi per Livello</h3>
            </div>
            <div className={styles.cardContent}>
              <div className="objectives-list">
                {objectives.map((objective, index) => (
                  <div key={index} className="objective-item">
                    <i className={objective.icon}></i>
                    <div>
                      <h4>{objective.title}</h4>
                      <p>{objective.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Attrezzatura */}
          <div className={styles.contentCard}>
            <div className={styles.cardHeader}>
              <i className="fas fa-tools"></i>
              <h3>Attrezzatura Necessaria</h3>
            </div>
            <div className={styles.cardContent}>
              <p>
                Per seguire al meglio le lezioni, è consigliabile avere a disposizione:
              </p>
              <div className="equipment-grid">
                {equipmentItems.map((equipment, index) => (
                  <div key={index} className="equipment-item">
                    <i className={equipment.icon}></i>
                    <h4>{equipment.title}</h4>
                    <p>{equipment.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.disciplineCta}>
        <div className={styles.ctaContent}>
          <h2>Pronto a Iniziare?</h2>
          <p>
            Contattami per una lezione di prova gratuita e scopri il tuo percorso personalizzato con chitarra e basso.
          </p>
          <div className={styles.ctaButtons}>
            <Link 
              href="/#contact" 
              className={`${styles.ctaButton} ${styles.primary}`}
            >
              <i className="fas fa-phone"></i>
              Prenota una Lezione
            </Link>
            <Link 
              href="/#about" 
              className={`${styles.ctaButton} ${styles.secondary}`}
            >
              <i className="fas fa-user"></i>
              Scopri di Più
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
