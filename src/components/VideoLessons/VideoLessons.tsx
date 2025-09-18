'use client'

import Image from 'next/image'
import styles from './VideoLessons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassHalf, faMobileAlt, faPlayCircle, faUserClock } from '@fortawesome/free-solid-svg-icons'
import { assetPath } from '@/lib/assetPath'

export default function VideoLessons() {
  return (
    <section id="video-lessons" className={styles.videoLessons}>
      <div className={styles.sectionBackground}>
        <div className={styles.bgPattern} />
        <div className={styles.floatingElementsSecondary}>
          <div className={`${styles.floatingDot} ${styles.dot1}`}></div>
          <div className={`${styles.floatingDot} ${styles.dot2}`}></div>
          <div className={`${styles.floatingDot} ${styles.dot3}`}></div>
        </div>
        <div className={styles.sectionMusicNotes}>
          <div className={`${styles.sectionNote} ${styles.noteSection1}`}>♪</div>
          <div className={`${styles.sectionNote} ${styles.noteSection2}`}>♫</div>
        </div>
      </div>
      
      <div className={styles.sectionContent}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faPlayCircle} />
            VIDEO-LEZIONI
          </h2>
          <div className={styles.sinusoidLine}></div>
        </div>
        
        <div className={styles.videoContent}>
          <div className={styles.videoPreview}>
            <div className={styles.videoPlaceholder}>
              <div className={styles.videoThumbnail}>
                <Image
                  src={assetPath('/assets/studio.webp')}
                  alt="Video lezione in studio"
                  width={400}
                  height={300}
                  className={styles.videoImg}
                  style={{ width: 'auto', height: 'auto' }}
                />
                <div className={styles.playOverlay}>
                  <FontAwesomeIcon icon={faPlayCircle} />
                </div>
              </div>
              <p>Video preview</p>
            </div>
          </div>
          
          <div className={styles.videoInfo}>
            <h3>Impara al tuo ritmo</h3>
            <p>
              Lezioni registrate, disponibili 24/7 per un apprendimento flessibile.
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faUserClock} />
                <span>Accesso illimitato per i già studenti</span>
              </div>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faMobileAlt} />
                <span>Su tutti i dispositivi</span>
              </div>
            </div>
            
            <div className={styles.videoCta}>
              <button className={`${styles.btn} ${styles.comingSoon}`}>
                <FontAwesomeIcon icon={faHourglassHalf} />
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}