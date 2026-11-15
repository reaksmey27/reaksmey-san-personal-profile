import { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { Download } from 'lucide-react'
import { profile } from '../config/profile'
import { getSiteUrl } from '../lib/links'

export default function QrCodeSection() {
  const url = getSiteUrl()
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    QRCode.toDataURL(url, { width: 512, margin: 2, color: { dark: '#000000', light: '#ffffff' } })
      .then((data) => {
        if (active) setSrc(data)
      })
      .catch(() => ({
        active: false,
      }))
    return () => {
      active = false
    }
  }, [url])

  return (
    <div className="mx-auto mt-8 max-w-2xl px-3">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-44 w-44 items-center justify-center rounded-xl border border-line bg-white shadow-sm">
          {src ? (
            <img src={src} alt={`QR code that opens ${url}`} className="h-full w-full" />
          ) : (
            <div className="grid h-28 w-28 place-items-center text-sm text-muted">Loading QR...</div>
          )}
        </div>
        <p className="mt-3 max-w-full break-all text-xs text-muted">{url}</p>
        <a
          href={src || undefined}
          download={`${profile.firstName}-${profile.lastName}-QR.png`}
          aria-disabled={!src}
          className="btn btn-ghost mt-4"
        >
          <Download size={18} aria-hidden /> Download QR code
        </a>
      </div>
    </div>
  )
}
