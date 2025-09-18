'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.css'
import { faChevronDown, faGuitar, faLayerGroup, faMicrophone, faMusic, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Hero() {
  useEffect(() => {
    // Enhanced 3D Parallax effects
    const heroBackground = document.querySelector('.hero-background')
    const floatingNotes = document.querySelectorAll('.note')
    const floatingCircles = document.querySelectorAll('.floating-circle')
    
    if (heroBackground) {
      const handleMouseMove = (e: MouseEvent) => {
        const mouseX = e.clientX / window.innerWidth
        const mouseY = e.clientY / window.innerHeight
        
        // Parallax effect for floating elements
        floatingNotes.forEach((note, index) => {
          const speed = (index + 1) * 0.5
          const x = (mouseX - 0.5) * speed * 20
          const y = (mouseY - 0.5) * speed * 20
          ;(note as HTMLElement).style.transform = `translate(${x}px, ${y}px) rotateZ(${x * 0.1}deg)`
        })
        
        floatingCircles.forEach((circle, index) => {
          const speed = (index + 1) * 0.3
          const x = (mouseX - 0.5) * speed * 15
          const y = (mouseY - 0.5) * speed * 15
          ;(circle as HTMLElement).style.transform = `translate(${x}px, ${y}px) rotateX(${y * 0.1}deg) rotateY(${x * 0.1}deg)`
        })
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const disciplines = [
    { href: '/basso-chitarra', icon: faGuitar, text: 'Chitarra & Basso' },
    { href: '/pianoforte', icon: faMusic, text: 'Pianoforte' },
    { href: '/produzione-elettronica', icon: faSlidersH, text: 'Produzione elettronica' },
    { href: '/registrazione', icon: faMicrophone, text: 'Registrazione' },
    { href: '/teoria-solfeggio', icon: faMusic, text: 'Teoria & solfeggio' },
    { href: '/armonia-arrangiamento', icon: faLayerGroup, text: 'Armonia e arrangiamento' },
  ]

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div 
          className={styles.heroBgImage}
          style={{ backgroundImage: 'url(/assets/classical-music.jpg)' }}
        />
        <div className={styles.heroBgOverlay} />
        
        {/* Floating Music Notes */}
        <div className={styles.floatingMusicNotes}>
          <div className={`${styles.note} ${styles.note1}`}>♪</div>
          <div className={`${styles.note} ${styles.note2}`}>♬</div>
          <div className={`${styles.note} ${styles.note3}`}>♩</div>
          <div className={`${styles.note} ${styles.note4}`}>♭</div>
          <div className={`${styles.note} ${styles.note5}`}>♯</div>
          <div className={`${styles.note} ${styles.note6}`}>♮</div>
          <div className={`${styles.note} ${styles.note7}`}>♫</div>
        </div>
        
        {/* Floating Elements */}
        <div className={styles.floatingElements}>
          <div className={`${styles.floatingCircle} ${styles.floatingCircle1}`}></div>
          <div className={`${styles.floatingCircle} ${styles.floatingCircle2}`}></div>
          <div className={`${styles.floatingCircle} ${styles.floatingCircle3}`}></div>
          <div className={`${styles.floatingCircle} ${styles.floatingCircle4}`}></div>
          <div className={`${styles.floatingCircle} ${styles.floatingCircle5}`}></div>
        </div>
        
        <div className={styles.fluidWave} />
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroTop}>
          <div className={styles.heroLeft}>
            {/* Text Content */}
            <div className={styles.heroText}>
              <div className={styles.textContainer}>
                <div className={styles.greetingText}>Ciao, sono</div>
                <h2 className={`${styles.instructor} highlight`}>
                  <span className="highlight">
                    <span>Vittorio Massa</span>
                  </span>
                  <div className="sinusoid-line">
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-primary animate-wave"></div>
                  </div>
                </h2>
                <div className={styles.heroSubtitle}>
                  <h3 className={styles.statTitle}>Maestro di Musica & Compositore</h3>
                  {/* Experience Stats */}
                  <div className={styles.experienceStats}>
                    <div className={styles.statItem}>
                      <div className={styles.statNumber}>15+</div>
                      <div className={styles.statLabel}>Anni di esperienza</div>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                      <div className={styles.statNumber}>200+</div>
                      <div className={styles.statLabel}>Studenti formati</div>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                      <div className={styles.statNumber}>5</div>
                      <div className={styles.statLabel}>Discipline insegnate</div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
          <div className={styles.heroRight}>
            {/* Decorative Elements */}
            <div className={styles.rightDecorativeElements}>
              <div className={styles.decorativeCircle1}></div>
              <div className={styles.decorativeCircle2}></div>
              <div className={styles.decorativeLine}></div>
              <div className={styles.decorativeNote1}>♪</div>
              <div className={styles.decorativeNote2}>♫</div>
            </div>

            {/* Profile Section */}
            <div className={styles.profileSection}>
              <div className={styles.heroImage}>
                <div className={styles.imageGlow}></div>
                <Image
                  src="/assets/faccia.jpg"
                  alt="Vittorio Massa"
                  width={500}
                  height={500}
                  className={styles.heroImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              
              {/* Status Badge */}
              <div className={styles.statusBadge}>
                <div className={styles.statusDot}></div>
                <span>Disponibile per lezioni</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.heroBottom}>
          <div className={styles.disciplinesGrid}>
            {disciplines.map((discipline, index) => (
              <Link
                key={discipline.href}
                href={discipline.href}
                className={styles.disciplineItem}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FontAwesomeIcon icon={discipline.icon} className={styles.disciplineIcon} />
                <span className={styles.disciplineText}>{discipline.text}</span>
              </Link>
            ))}
          </div>
        </div>
        
        {/* <div className={styles.scrollIndicator}>
          <div className={styles.heroCta}>
            <a href="#contact" className={styles.ctaButton}>
              <FontAwesomeIcon icon={faChevronDown} />
              <span>Scorri per scoprire</span>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  )
}