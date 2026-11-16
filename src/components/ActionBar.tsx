import { useState } from 'react'
import { Copy, QrCode, Share2, UserPlus } from 'lucide-react'
import { profile } from '../config/profile'
import { socialLinks } from '../config/social'
import { getSiteUrl } from '../lib/links'
import { downloadVCard } from '../lib/vcard'
import { useLang } from '../i18n/LangContext'
import ActionButton from './ActionButton'

export default function ActionBar() {
  const { t, lang } = useLang()
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
    <div className="mb-8">
      <div className="flex justify-center gap-2 sm:gap-3">
        <ActionButton
          onClick={copyLink}
          ariaLabel={t.copyAria}
          icon={<Copy size={16} aria-hidden />}
          label={copied ? t.copied : t.copyLink}
        />
        <ActionButton
          onClick={share}
          ariaLabel={t.shareAria}
          icon={<Share2 size={16} aria-hidden />}
          label={t.share}
        />
        <ActionButton
          href="#qr"
          ariaLabel={t.qrAria}
          icon={<QrCode size={16} aria-hidden />}
          label={t.qr}
        />
      </div>

      <button
        type="button"
        onClick={() => downloadVCard(lang === 'km' && profile.km ? { ...profile, ...profile.km } : profile, socialLinks, url)}
        className="btn btn-ghost mt-2 w-full text-accent-ink sm:mt-3"
      >
        <UserPlus size={18} aria-hidden /> {t.saveContact}
      </button>

      {/* Announces the copy result to screen readers */}
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? t.copiedSr : ''}
      </span>
    </div>
  )
}
