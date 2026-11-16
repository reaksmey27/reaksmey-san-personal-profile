import { socialLinks } from '../config/social'
import SocialLink from './SocialLink'

export default function SocialLinks() {
  return (
    <ul className="flex flex-col gap-3">
      {socialLinks.map((link, i) => (
        <li key={link.id} className="fade-up" style={{ animationDelay: `${80 + i * 60}ms` }}>
          <SocialLink {...link} />
        </li>
      ))}
    </ul>
  )
}
