'use client'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGuitar, 
  faGraduationCap, 
  faAward, 
  faChalkboardUser, 
  faMusic, 
  faTheaterMasks, 
  faUserGraduate, 
  faUserCircle 
} from '@fortawesome/free-solid-svg-icons'
import styles from './About.module.css'
import { assetPath } from '@/lib/assetPath'

export default function About() {
  const journeyItems = [
    {
      year: '2005-2010',
      icon: faGuitar,
      content: 'Studio autodidatta di chitarra e basso'
    },
    {
      year: '2010-2014',
      icon: faGraduationCap,
      content: 'Diploma in Basso Elettrico presso la NAM di Milano'
    },
    {
      year: '2017-2020',
      icon: faAward,
      content: 'Laurea triennale in Composizione Pop/Rock presso il Conservatorio di Como (110/100)',
      image: '/assets/conservatorio-como.webp',
      imageAlt: 'Conservatorio G.Verdi di Como'
    },
    {
      year: '2020-2022',
      icon: faAward,
      content: 'Laurea biennale in Basso Elettrico Pop/Rock presso il Conservatorio di Milano (108/100)',
      image: '/assets/conservatorio-milano.jpg',
      imageAlt: 'Conservatorio G.Verdi di Milano'
    },
    {
      year: '2017-2022',
      icon: faChalkboardUser,
      content: 'Certificato dei 24 CPFU per l\'abilitazione all\'insegnamento presso i Conservatori di Como e Milano'
    }
  ]

  const experienceItems = [
    {
      icon: faMusic,
      title: 'Le Endrigo',
      description: 'Bassista e cantante della band concorrente di X-Factor 2021 nella squadra di Emma Marrone',
      isSpotify: true
    },
    {
      icon: faTheaterMasks,
      title: 'Teatro',
      description: 'Band dello spettacolo teatrale: "Il saggio di fine anno" di Camihawke (2023/24)',
      image: '/assets/camihawke-il-saggio-di-fine-anno.jpg',
      imageAlt: 'Conservatorio Verdi di Milano'
    },
    {
      icon: faMusic,
      title: 'Live & Studio',
      description: 'Esperienza decennale come autore, compositore e musicista live e in studio',
      image: '/assets/studio.webp',
      imageAlt: 'Conservatorio Verdi di Milano'
    }
  ]

  return (
    <section id="about" className={styles.about}>
      <div className={styles.sectionBackground}>
        <div className={styles.bgPattern} />
      </div>
      
      <div className={styles.sectionContent}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faUserGraduate} />
            La Mia Storia
          </h2>
          <div className={styles.sinusoidLine}></div>
        </div>
        
        <div className={styles.aboutContent}>
          <div className={styles.aboutIntro}>
            <div className={styles.profileImage}>
              <FontAwesomeIcon icon={faUserCircle} />
            </div>
            <div className={styles.introText}>
              <h3>Musicista, Compositore & Insegnante</h3>
              <p>
                Da oltre 15 anni lavoro nel settore musicale in qualità di: cantante, bassista e chitarrista live/studio, compositore e insegnante.
              </p>
            </div>
          </div>
          
          <div className={styles.journeySection}>
            <h3>Formazione</h3>
            <div className={styles.journeyTimeline}>
              {journeyItems.map((item, index) => (
                <div key={index} className={styles.journeyItem}>
                  <div className={styles.journeyYear}>
                    {item.year}
                  </div>
                  <div className={styles.journeyContent}>
                    <FontAwesomeIcon icon={item.icon} />
                    <p>{item.content}</p>
                    {item.image && (
                      <Image
                        src={assetPath(item.image)}
                        alt={item.imageAlt || ''}
                        width={400}
                        height={300}
                        className={styles.timelineImage}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.experienceSection}>
            <h3>Esperienze Lavorative</h3>
            <div className={styles.experienceGrid}>
              {experienceItems.map((item, index) => (
                <div key={index} className={`${styles.experienceCard} ${item.isSpotify ? styles.spotifyCard : ''}`}>
                  <FontAwesomeIcon icon={item.icon} />
                  <h4>{item.title}</h4>
                  {item.isSpotify && (
                    <div className={styles.spotifyEmbed}>
                      <iframe 
                        src="https://open.spotify.com/embed/artist/19iWcNNkOaOpcFtSRF7q5a" 
                        width="100%" 
                        height="152" 
                        frameBorder="0" 
                        allow="encrypted-media"
                        loading="lazy"
                        onError={(e) => {
                          console.warn('Spotify embed failed to load:', e);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  {item.image && (
                    <Image
                      src={assetPath(item.image)}
                      alt={item.imageAlt || ''}
                      width={250}
                      height={200}
                      className={styles.experienceImage}
                    />
                  )}
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}