import { profile } from '../config/profile'
import { getSiteUrl } from './links'

const esc = (v: string) =>
  v.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,')

/** Builds a vCard 3.0 string from the profile config. Empty fields are skipped. */
export function buildVCard(): string {
  const { name, firstName, lastName, title, city, country, social } = profile
  const site = getSiteUrl()
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${esc(lastName)};${esc(firstName)};;;`,
    `FN:${esc(name)}`,
    `TITLE:${esc(title)}`,
    `ADR;TYPE=HOME:;;;${esc(city)};;;${esc(country)}`,
  ]
  for (const url of [social.portfolio, social.github, social.linkedin, social.facebook, social.tiktok, social.youtube, social.telegram]) {
    if (url.trim() && url.trim() !== site) lines.push(`URL:${url.trim()}`)
  }
  lines.push(`URL:${site}`)
  lines.push('END:VCARD')
  return lines.join('\r\n') + '\r\n'
}

export function downloadVCard(): void {
  const blob = new Blob([buildVCard()], { type: 'text/vcard;charset=utf-8' })
  const href = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = href
  a.download = `${profile.firstName}-${profile.lastName}.vcf`
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(href)
}
