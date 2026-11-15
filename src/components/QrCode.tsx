import { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { Download } from 'lucide-react'
import { profile } from '../config/profile'
import { getSiteUrl } from '../lib/links'
import Section from './Section'

export default function QrCodeSection() {
  const url = getSiteUrl()
  const [src, setSrc] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    let active = true
    QRCode.toDataURL(url, { width: 512, margin: 2, color: { dark: '#000000', light: '#ffffff' } })
      .then((data) => active && setSrc(data))
      .catch(() => active && setError(true))
    return () => {
      active = false
    }
  }, [url])

  return (
    <Section id="qr" title="Scan to Open This Profile">
      <div className="flex flex-col items-center text-center">
        <div className="h-44 w-44 overflow-hidden rounded-xl border border-line bg-white p-1">
          {src && <img src={src} alt={`QR code that opens ${url}`} className="h-full w-full" />}
          {error && <p className="p-4 text-sm text-zinc-600">The QR code could not be created.</p>}
        </div>
        <p className="mt-3 max-w-full break-all text-xs text-muted">{url}</p>
        {import.meta.env.DEV && !profile.siteUrl.trim() && (
          <p className="mt-2 text-xs text-muted">Set siteUrl in src/config/profile.ts after you deploy, so the QR code points to your live link.</p>
        )}
        <a href={src || undefined} download={`${profile.firstName}-${profile.lastName}-QR.png`} aria-disabled={!src} className="btn btn-ghost mt-5">
          <Download size={18} aria-hidden /> Download QR code
        </a>
      </div>
    </Section>
  )
}
