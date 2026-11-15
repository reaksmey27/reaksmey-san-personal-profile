import { profile } from '../config/profile'

/** The URL the QR code points to. Uses siteUrl if set, otherwise the current origin. */
export function getSiteUrl(): string {
  const configured = profile.siteUrl.trim()
  return configured || window.location.origin
}
