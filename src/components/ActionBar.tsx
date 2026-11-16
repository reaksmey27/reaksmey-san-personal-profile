import { useState } from 'react'
import { Copy, QrCode, Share2 } from 'lucide-react'
import { profile } from '../config/profile'
import { getSiteUrl } from '../lib/links'
import ActionButton from './ActionButton'

export default function ActionBar() {
  const [copied, setCopied] = useState(false)
  const url = getSiteUrl()

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      console.error('Unable to copy profile link')
    }
  }

  const share = () => {
    if (navigator.share) {
      navigator.share({ title: profile.name, url }).catch(() => undefined)
    } else {
      void copyLink()
    }
  }

  return (
    <div className="mb-8 flex justify-center gap-3">
      <ActionButton
        onClick={copyLink}
        ariaLabel="Copy profile link"
        icon={<Copy size={16} aria-hidden />}
        label={copied ? 'Copied!' : 'Copy link'}
      />
      <ActionButton
        onClick={share}
        ariaLabel="Share profile"
        icon={<Share2 size={16} aria-hidden />}
        label="Share"
      />
      <ActionButton
        href="#qr"
        ariaLabel="Go to the QR code"
        icon={<QrCode size={16} aria-hidden />}
        label="QR code"
      />
    </div>
  )
}
