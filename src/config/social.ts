import { IconType } from 'react-icons'
import {
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaTelegram,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from 'react-icons/fa6'

export interface SocialPlatform {
  id: string
  label: string
  url: string
  Icon: IconType
  /** CSS background color for the icon badge. */
  bg: string
  /** Icon foreground color. */
  fg: string
}

/**
 * Centralized social media configuration.
 * Only platforms with a non-empty `url` are shown on the live site.
 * Add, remove, or update links here.
 */
export const socialPlatforms: SocialPlatform[] = [
  { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/share/1DsuUHGMBJ/?mibextid=wwXIfr', Icon: FaFacebook, bg: '#1877F2', fg: '#ffffff' },
  { id: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@smey_quality27', Icon: FaTiktok, bg: '#25F4EE', fg: '#000000' },
  { id: 'youtube', label: 'YouTube', url: 'https://youtube.com/@smeyquality27?si=wqbY9hgMVClPOeqQ', Icon: FaYoutube, bg: '#FF0000', fg: '#ffffff' },
  { id: 'telegram', label: 'Telegram', url: 'https://t.me/Smey_Quality27', Icon: FaTelegram, bg: '#24A1DE', fg: '#ffffff' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/reaksmey-san-354472399/', Icon: FaLinkedin, bg: '#0A66C2', fg: '#ffffff' },
  { id: 'github', label: 'GitHub', url: 'https://github.com/reaksmey27', Icon: FaGithub, bg: '#24292E', fg: '#ffffff' },
  { id: 'portfolio', label: 'Portfolio', url: 'https://smey-dev.site', Icon: FaGlobe, bg: 'linear-gradient(135deg, #7c3aed, #3b82f6)', fg: '#ffffff' },
]
