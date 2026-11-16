import { profile } from '../config/profile'

/** URL used by the QR code, copy and share. Falls back to the current origin. */
export function getSiteUrl(): string {
  return profile.siteUrl.trim() || window.location.origin
}
