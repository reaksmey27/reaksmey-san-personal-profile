export type SocialId =
  | 'facebook'
  | 'tiktok'
  | 'youtube'
  | 'telegram'
  | 'linkedin'
  | 'github'
  | 'portfolio'

export interface Profile {
  name: string
  firstName: string
  lastName: string
  title: string
  city: string
  country: string
  /** Khmer text for the language switch. */
  km?: { title: string; city: string; country: string }
  /** Image path inside /public, or a full image URL. */
  photo: string
  /** Deployed URL. Used by the QR code and the copy/share buttons. */
  siteUrl: string
  /** Optional. Added to the saved contact card. */
  email?: string
  phone?: string
  /** Profile URL per platform. Leave '' to hide a platform. */
  social: Record<SocialId, string>
}
