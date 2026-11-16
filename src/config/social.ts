import type { IconType } from 'react-icons'
import { FaGlobe, FaLinkedin } from 'react-icons/fa6'
import { SiFacebook, SiGithub, SiTelegram, SiTiktok, SiYoutube } from 'react-icons/si'
import type { SocialId } from '../types'
import { profile } from './profile'

interface PlatformStyle {
  id: SocialId
  label: string
  Icon: IconType
  /** Icon tile background and icon color. */
  bg: string
  fg: string
}

/** Display order, labels and brand colors. URLs come from profile.ts. */
const PLATFORMS: PlatformStyle[] = [
  { id: 'facebook', label: 'Facebook', Icon: SiFacebook, bg: '#1877F2', fg: '#FFFFFF' },
  { id: 'tiktok', label: 'TikTok', Icon: SiTiktok, bg: '#000000', fg: '#FFFFFF' },
  { id: 'youtube', label: 'YouTube', Icon: SiYoutube, bg: '#FF0000', fg: '#FFFFFF' },
  { id: 'telegram', label: 'Telegram', Icon: SiTelegram, bg: '#24A1DE', fg: '#FFFFFF' },
  { id: 'linkedin', label: 'LinkedIn', Icon: FaLinkedin, bg: '#0A66C2', fg: '#FFFFFF' },
  { id: 'github', label: 'GitHub', Icon: SiGithub, bg: '#24292E', fg: '#FFFFFF' },
  { id: 'portfolio', label: 'Portfolio', Icon: FaGlobe, bg: '#635BFF', fg: '#FFFFFF' },
]

export interface SocialLink extends PlatformStyle {
  url: string
}

/** Only platforms that have a URL. */
export const socialLinks: SocialLink[] = PLATFORMS.map((p) => ({
  ...p,
  url: profile.social[p.id].trim(),
})).filter((p) => p.url.length > 0)
