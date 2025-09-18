import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#0f0a05',
        'bg-secondary': '#1a1208',
        'text': '#f5f1e8',
        'text-secondary': '#d4c4a8',
        'accent': '#d4a574',
        'accent-secondary': '#b8860b',
        'accent-tertiary': '#8b4513',
        'wood-light': '#e6d7c3',
        'wood-medium': '#cd853f',
        'wood-dark': '#8b4513',
        'wood-warm': '#23243d',
        'link': '#f5f1e8',
        'border': 'rgba(212, 164, 116, 0.2)',
        'card-bg': 'rgba(212, 164, 116, 0.05)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #d4a574 0%, #b8860b 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #cd853f 0%, #8b4513 100%)',
        'gradient-music': 'linear-gradient(135deg, #daa520 0%, #c5a147 100%)',
        'gradient-wood': 'linear-gradient(135deg, #e6d7c3 0%, #d4a574 50%, #8b4513 100%)',
      },
      boxShadow: {
        'wood': '0 15px 30px rgba(212, 164, 116, 0.2)',
        'shadow': '0 20px 40px rgba(139, 69, 19, 0.3)',
        'shadow-hover': '0 30px 60px rgba(139, 69, 19, 0.4)',
      },
      animation: {
        'float-note-1': 'float-note-1 10s ease-in-out infinite',
        'float-note-2': 'float-note-2 12s ease-in-out infinite',
        'float-note-3': 'float-note-3 9s ease-in-out infinite',
        'float-note-4': 'float-note-4 11s ease-in-out infinite',
        'float-note-5': 'float-note-5 13s ease-in-out infinite',
        'float-note-6': 'float-note-6 10s ease-in-out infinite',
        'float-note-7': 'float-note-7 14s ease-in-out infinite',
        'float-circle': 'float-circle 8s ease-in-out infinite',
        'float-dot': 'float-dot 8s ease-in-out infinite',
        'section-note-float': 'section-note-float 15s ease-in-out infinite',
        'pattern-float': 'pattern-float 10s ease-in-out infinite',
        'particle-float': 'particle-float 20s linear infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'float-note-1': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)', opacity: '0.8' },
          '25%': { transform: 'translateY(-30px) rotate(90deg) scale(1.1)', opacity: '1' },
          '50%': { transform: 'translateY(-15px) rotate(180deg) scale(0.9)', opacity: '0.6' },
          '75%': { transform: 'translateY(-40px) rotate(270deg) scale(1.2)', opacity: '1' },
        },
        'float-note-2': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)', opacity: '0.7' },
          '33%': { transform: 'translateY(-25px) rotate(120deg) scale(1.15)', opacity: '1' },
          '66%': { transform: 'translateY(-35px) rotate(240deg) scale(0.85)', opacity: '0.5' },
        },
        'float-note-3': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translateY(-20px) rotate(180deg) scale(1.1)', opacity: '1' },
        },
        'float-note-4': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)', opacity: '0.8' },
          '25%': { transform: 'translateY(-40px) rotate(90deg) scale(1.2)', opacity: '1' },
          '50%': { transform: 'translateY(-10px) rotate(180deg) scale(0.9)', opacity: '0.6' },
          '75%': { transform: 'translateY(-30px) rotate(270deg) scale(1.1)', opacity: '1' },
        },
        'float-note-5': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)', opacity: '0.7' },
          '20%': { transform: 'translateY(-35px) rotate(72deg) scale(1.25)', opacity: '1' },
          '40%': { transform: 'translateY(-20px) rotate(144deg) scale(0.8)', opacity: '0.5' },
          '60%': { transform: 'translateY(-45px) rotate(216deg) scale(1.15)', opacity: '1' },
          '80%': { transform: 'translateY(-15px) rotate(288deg) scale(0.9)', opacity: '0.6' },
        },
        'float-note-6': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translateY(-30px) rotate(180deg) scale(1.1)', opacity: '1' },
        },
        'float-note-7': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)', opacity: '0.8' },
          '16.66%': { transform: 'translateY(-25px) rotate(60deg) scale(1.1)', opacity: '1' },
          '33.33%': { transform: 'translateY(-40px) rotate(120deg) scale(0.9)', opacity: '0.6' },
          '50%': { transform: 'translateY(-20px) rotate(180deg) scale(1.2)', opacity: '1' },
          '66.66%': { transform: 'translateY(-35px) rotate(240deg) scale(0.85)', opacity: '0.5' },
          '83.33%': { transform: 'translateY(-30px) rotate(300deg) scale(1.15)', opacity: '1' },
        },
        'float-circle': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)', opacity: '0.1' },
          '50%': { transform: 'translateY(-30px) scale(1.1)', opacity: '0.2' },
        },
        'float-dot': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)', opacity: '0.3' },
          '50%': { transform: 'translateY(-15px) scale(1.5)', opacity: '0.6' },
        },
        'section-note-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)', opacity: '0.4' },
          '25%': { transform: 'translateY(-20px) rotate(90deg) scale(1.1)', opacity: '0.7' },
          '50%': { transform: 'translateY(-10px) rotate(180deg) scale(0.9)', opacity: '0.3' },
          '75%': { transform: 'translateY(-25px) rotate(270deg) scale(1.05)', opacity: '0.6' },
        },
        'pattern-float': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(0px) scale(1)', opacity: '0.4' },
          '50%': { transform: 'translateY(-100px) scale(1.5)', opacity: '0.8' },
          '100%': { transform: 'translateY(-200px) scale(0.5)', opacity: '0' },
        },
        'wave': {
          '0%, 100%': { left: '-100%' },
          '50%': { left: '100%' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 164, 116, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 164, 116, 0.6)' },
        },
      },
      animationDelay: {
        '1.5s': '1.5s',
        '2.5s': '2.5s',
        '5s': '5s',
        '7s': '7s',
        '10s': '10s',
        '15s': '15s',
      },
      minHeight: {
        '25': '6.25rem', // 100px
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      rotate: {
        'x-2': 'rotateX(2deg)',
        'x-3': 'rotateX(3deg)',
        'y-2': 'rotateY(2deg)',
        'y-3': 'rotateY(3deg)',
      },
    },
  },
  plugins: [],
}
export default config
