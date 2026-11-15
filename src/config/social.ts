
import type { IconType } from 'react-icons'

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
  bg: string
  fg: string
}

export const socialPlatforms: SocialPlatform[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com/share/1DsuUHGMBJ/?mibextid=wwXIfr',
    Icon: FaFacebook,
    bg: '#1877F2',
    fg: '#FFFFFF',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    url: 'https://www.tiktok.com/@smey_quality27',
    Icon: FaTiktok,
    bg: '#25F4EE',
    fg: '#000000',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    url: 'https://youtube.com/@smeyquality27?si=wqbY9hgMVClPOeqQ',
    Icon: FaYoutube,
    bg: '#FF0000',
    fg: '#FFFFFF',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    url: 'https://t.me/Smey_Quality27',
    Icon: FaTelegram,
    bg: '#24A1DE',
    fg: '#FFFFFF',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/reaksmey-san-354472399/',
    Icon: FaLinkedin,
    bg: '#0A66C2',
    fg: '#FFFFFF',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/reaksmey27',
    Icon: FaGithub,
    bg: '#24292E',
    fg: '#FFFFFF',
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    url: 'https://smey-dev.site',
    Icon: FaGlobe,
    bg: '#635BFF',
    fg: '#FFFFFF',
  },
]
