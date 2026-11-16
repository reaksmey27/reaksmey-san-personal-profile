import type { Profile } from '../types'
import type { SocialLink } from '../config/social'

export function getDisplayProfile(profile: Profile, lang: 'en' | 'km'): Profile {
  if (lang === 'km' && profile.km) {
    return { ...profile, ...profile.km }
  }
  return profile
}

const esc = (v: string) =>
  v.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,')

/** Builds a vCard 3.0 string from the profile and its visible social links. */
export function buildVCard(profile: Profile, links: SocialLink[], siteUrl: string): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${esc(profile.lastName)};${esc(profile.firstName)};;;`,
    `FN:${esc(profile.name)}`,
    `TITLE:${esc(profile.title)}`,
    `ADR;TYPE=HOME:;;;${esc(profile.city)};;;${esc(profile.country)}`,
    `URL:${siteUrl}`,
  ]
  if (profile.email?.trim()) lines.push(`EMAIL;TYPE=INTERNET:${esc(profile.email.trim())}`)
  if (profile.phone?.trim()) lines.push(`TEL;TYPE=CELL:${esc(profile.phone.trim())}`)
  links.forEach((l, i) => {
    lines.push(`item${i + 1}.URL:${l.url}`, `item${i + 1}.X-ABLabel:${esc(l.label)}`)
  })
  lines.push('END:VCARD')
  return lines.join('\r\n')
}

/** Triggers a .vcf download in the browser. */
export function downloadVCard(profile: Profile, links: SocialLink[], siteUrl: string, lang: 'en' | 'km' = 'en') {
  const display = getDisplayProfile(profile, lang)
  const blob = new Blob([buildVCard(display, links, siteUrl)], { type: 'text/vcard;charset=utf-8' })
  const href = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = href
  a.download = `${display.firstName}-${display.lastName}.vcf`
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(href), 1000)
}
