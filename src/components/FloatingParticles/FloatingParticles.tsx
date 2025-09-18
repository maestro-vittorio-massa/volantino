'use client'

import styles from './FloatingParticles.module.css'

export default function FloatingParticles() {
  return (
    <div className={styles.connectionParticles}>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
    </div>
  )
}
