'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import styles from './Footer.module.css'

interface FooterProps {
  currentYear: number
}

export default function Footer({ currentYear }: FooterProps) {
  return (
    <footer className={styles.siteFooter}>
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <FontAwesomeIcon icon={faGift} />
          <h3>LA PRIMA LEZIONE È GRATIS!</h3>
          <p>
            Senza impegno, sentiamoci per una chiaccherata conoscitiva! Per vedere se la strada è quella che senti anche tu.
          </p>
        </div>
      </section>
      <div className={styles.footerBottom}>
        <small>&copy; {currentYear}</small>
      </div>
    </footer>
  )
}