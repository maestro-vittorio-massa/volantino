import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { CSSProperties } from 'react'
import {
  faPlayCircle,
  faEnvelope,
  faHome,
  faUser,
  faGuitar,
  faSlidersH,
  faMicrophone,
  faMusic,
  faLayerGroup,
  faGraduationCap,
  faAward,
  faChalkboardUser,
  faTheaterMasks,
  faMapPin,
  faPhone,
  faCar,
  faLaptop,
  faGift,
  faArrowUp,
  faChevronDown,
  faArrowDown,
  faMapMarkerAlt,
  faUserGraduate,
  faUserCircle,
  faList,
  faBullseye,
  faTools,
  faChartLine,
  faTrophy,
  faStar,
  faPlay,
  faClock,
  faMobileAlt,
  faHourglassHalf,
  faEye,
  faHandPaper,
  faVolumeUp,
  faHandRock,
  faUsers,
  faPalette,
  faPen,
  faHeadphones,
  faCog,
} from '@fortawesome/free-solid-svg-icons'

interface IconProps {
  icon: string | IconDefinition
  className?: string
  size?: 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'
  style?: React.CSSProperties
}

// Map of icon names to FontAwesome icon definitions
const iconMap: Record<string, IconDefinition> = {
  'fas fa-play-circle': faPlayCircle,
  'fas fa-envelope': faEnvelope,
  'fas fa-home': faHome,
  'fas fa-user': faUser,
  'fas fa-guitar': faGuitar,
  'fas fa-piano': faMusic, // Using faMusic as replacement for faPiano
  'fas fa-sliders-h': faSlidersH,
  'fas fa-microphone': faMicrophone,
  'fas fa-music': faMusic,
  'fas fa-layer-group': faLayerGroup,
  'fas fa-graduation-cap': faGraduationCap,
  'fas fa-award': faAward,
  'fas fa-chalkboard-user': faChalkboardUser,
  'fas fa-theater-masks': faTheaterMasks,
  'fas fa-map-pin': faMapPin,
  'fas fa-phone': faPhone,
  'fas fa-car': faCar,
  'fas fa-laptop': faLaptop,
  'fas fa-gift': faGift,
  'fas fa-arrow-up': faArrowUp,
  'fas fa-chevron-down': faChevronDown,
  'fas fa-arrow-down': faArrowDown,
  'fas fa-map-marker-alt': faMapMarkerAlt,
  'fas fa-user-graduate': faUserGraduate,
  'fas fa-user-circle': faUserCircle,
  'fas fa-list': faList,
  'fas fa-bullseye': faBullseye,
  'fas fa-tools': faTools,
  'fas fa-target': faBullseye, // Using faBullseye as replacement for faTarget
  'fas fa-chart-line': faChartLine,
  'fas fa-trophy': faTrophy,
  'fas fa-star': faStar,
  'fas fa-cable': faTools, // Using faTools as replacement for faCable
  'fas fa-play': faPlay,
  'fas fa-clock': faClock,
  'fas fa-mobile-alt': faMobileAlt,
  'fas fa-hourglass-half': faHourglassHalf,
  'fas fa-eye': faEye,
  'fas fa-hand-paper': faHandPaper,
  'fas fa-volume-up': faVolumeUp,
  'fas fa-hand-rock': faHandRock,
  'fas fa-users': faUsers,
  'fas fa-palette': faPalette,
  'fas fa-pen': faPen,
  'fas fa-equalizer': faSlidersH, // Using faSlidersH as replacement for faEqualizer
  'fas fa-headphones': faHeadphones,
  'fas fa-cog': faCog,
}

export default function Icon({ icon, className, size = '1x', style }: IconProps) {
  // Handle both string and IconDefinition
  const iconDefinition = typeof icon === 'string' ? iconMap[icon] : icon
  
  if (!iconDefinition) {
    console.warn(`Icon not found: ${icon}`)
    return null
  }

  return (
    <FontAwesomeIcon 
      icon={iconDefinition} 
      className={className}
      size={size}
      style={style as CSSProperties & { [key: string]: string }} // TODO:CSSVariables missing from types in fontawesome
    />
  )
}
