import { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { Download } from 'lucide-react'
import { profile } from '../config/profile'
import { getSiteUrl } from '../lib/links'

export default function QrCodeSection() {
  const url = getSiteUrl()
  const [src, setSrc] = useState<string | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let active = true
    QRCode.toDataURL(url, { width: 512, margin: 2, color: { dark: '#000000', light: '#ffffff' } })
      .then((data) => active && setSrc(data))
      .catch(() => active && setFailed(true))
    return () => {
      active = false
    }
  }, [url])

  return (
    <section id="qr" aria-label="Profile QR code" className="mt-8 scroll-mt-6 text-center">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted sm:text-base">
        Scan to open this profile
      </h2>
      <div className="mt-3 flex flex-col items-center">
        <div className="flex h-36 w-36 items-center justify-center overflow-hidden rounded-xl border border-line bg-white sm:h-44 sm:w-44">
          {src && <img src={src} alt={`QR code that opens ${url}`} className="h-full w-full" />}
          {!src && !failed && <span className="text-xs text-zinc-500">Loading...</span>}
          {failed && <span className="p-3 text-xs text-zinc-600">QR code could not be created.</span>}
        </div>
        <p className="mt-3 max-w-full break-all text-xs text-muted">{url}</p>
        <a
          href={src ?? undefined}
          download={`${profile.firstName}-${profile.lastName}-QR.png`}
          aria-disabled={!src}
          className="btn btn-ghost mt-4 aria-disabled:pointer-events-none aria-disabled:opacity-50 sm:mt-5"
        >
          <Download size={18} aria-hidden /> Download QR code
        </a>
      </div>
    </section>
  )
}
