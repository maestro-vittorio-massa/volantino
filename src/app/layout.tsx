import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation/Navigation'
import FloatingParticles from '@/components/FloatingParticles/FloatingParticles'
import '@/lib/fontawesome'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lezioni di Musica - Vittorio Massa',
  description: 'Lezioni di musica: pianoforte, basso elettrico, produzione elettronica, teoria & solfeggio, armonia e arrangiamento.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <Navigation />
        <FloatingParticles />
        {children}
      </body>
    </html>
  )
}
