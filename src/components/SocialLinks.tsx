import { socialLinks } from '../config/social'
import SocialLink from './SocialLink'

export default function SocialLinks() {
  return (
    <ul className="flex flex-col gap-3">
      {socialLinks.map((link) => (
        <li key={link.id}>
          <SocialLink {...link} />
        </li>
      ))}
    </ul>
  )
}
