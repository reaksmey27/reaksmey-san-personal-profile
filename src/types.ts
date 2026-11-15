export interface Profile {
  name: string
  firstName: string
  lastName: string
  title: string
  city: string
  country: string
  /** Path in /public or a full image URL. */
  photo: string
  /** Short bio shown under the name. */
  intro: string
  /** Your deployed URL. Used for the QR code and the "copy link" button. */
  siteUrl: string

  // Social links — only these 7 are rendered.
  social: {
    facebook: string
    tiktok: string
    youtube: string
    telegram: string
    linkedin: string
    github: string
    portfolio: string
  }
}
