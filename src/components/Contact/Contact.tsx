'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMapPin, 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faHome, 
  faCar, 
  faLaptop 
} from '@fortawesome/free-solid-svg-icons'
import styles from './Contact.module.css'

export default function Contact() {
  const locations = [
    {
      icon: faMapPin,
      text: 'Via Carcano 31B\nCantù (CO)'
    },
    {
      icon: faMapPin,
      text: 'Via Alfredo Albertini 6\nMilano (MI)'
    },
    {
      icon: faMapPin,
      text: 'Via Francesco Cilea 18\nMilano (MI)'
    }
  ]

  const contactMethods = [
    {
      icon: faPhone,
      text: '+39 3398581324',
      href: 'tel:+393398581324'
    },
    {
      icon: faEnvelope,
      text: 'vittoriomassa999@gmail.com',
      href: 'mailto:vittoriomassa999@gmail.com'
    }
  ]

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.sectionBackground}>
        <div className={styles.bgPattern} />
      </div>
      
      <div className={styles.sectionContent}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            SEDI LEZIONI
          </h2>
          <div className={styles.sinusoidLine}></div>
        </div>
        
        <div className={styles.contactContent}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faHome} />
              </div>
              <h3>IN PRESENZA</h3>
              <ul className={styles.locationList}>
                {locations.map((location, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={location.icon} />
                    <span className="whitespace-pre-line">{location.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faCar} />
              </div>
              <h3>A DOMICILIO</h3>
              <p>
                Disponibile a domicilio in zona Milano, Como e province, previa disponibilità.
              </p>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faLaptop} />
              </div>
              <h3>ONLINE</h3>
              <p>
                Disponibili su richiesta. Perfette per mantenere continuità o per chi preferisce maggiore flessibilità.
              </p>
            </div>
          </div>

          <div className={styles.contactInfo}>
            <h3>Dove Trovarmi</h3>
            <div className={styles.contactMethods}>
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className={styles.contactMethod}
                >
                  <FontAwesomeIcon icon={method.icon} />
                  <span>{method.text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.personalizedMessage}>
            <h3>Percorso personalizzato</h3>
            <p>
              I corsi sono pensati per qualsiasi età e livello di preparazione.<br />
              Che tu non ti sia mai avvicinato allo strumento o che già possieda le tecniche di base, il percorso di formazione<br />
              verrà personalizzato in base ai tuoi obiettivi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}