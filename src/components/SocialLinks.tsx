import { useState } from 'react'
import { socialPlatforms } from '../config/social'
import { IconType } from 'react-icons'

interface Props {
  /** Empty string = current origin. Set this after the first deploy in src/config/profile.ts. */
  siteUrl: string
}

function SocialIcon({ Icon, className }: { Icon: IconType; className?: string }) {
  return <Icon size={20} className={className} aria-hidden />
}

export default function SocialLinks({ siteUrl }: Props) {
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(siteUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    }
  }

  if (typeof window === 'undefined') return null

  return (
    <div className="mx-auto max-w-xl px-3">
      {/* Bottom action bar: Copy link / Share / QR code */}
      <div className="mb-8 flex justify-center gap-3">
        <button
          type="button"
          onClick={copyLink}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-line bg-surface px-4 py-3 text-sm font-semibold text-muted transition-colors hover:bg-ink/5 hover:text-ink"
          aria-label="Copy profile link"
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copy link
          {copied ? (
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 ">
              Copied
            </span>
          ) : null}
        </button>

        <button
          type="button"
          onClick={() => {
            if (navigator.share) {
              navigator.share({ title: 'Reaksmey SAN', url: siteUrl }).catch(() => undefined)
            } else {
              copyLink()
            }
          }}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-line bg-surface px-4 py-3 text-sm font-semibold text-muted transition-colors hover:bg-ink/5 hover:text-ink"
          aria-label="Share profile"
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          Share
        </button>

        <a
          href={siteUrl}
          target="_blank"
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-line bg-surface px-4 py-3 text-sm font-semibold text-muted transition-colors hover:bg-ink/5 hover:text-ink"
          aria-label={`Open QR code for ${siteUrl}`}
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18v1.5H3z M9 3v1.5M3 12h1.5M12 3v1.5M15 9h1.5M12 15h1.5M9 15l1.5-1.5" />
          </svg>
          QR code
        </a>
      </div>

      {/* Social / link buttons — all 7 rendered; functional where a URL is set. */}
      <div className="flex flex-col gap-3">
        {socialPlatforms.map((p) => {
          const hasUrl = p.url.trim().length > 0
          return (
            <a
              key={p.id}
              href={hasUrl ? p.url.trim() : undefined}
              target="_blank"
              aria-label={hasUrl ? `${p.label} profile` : `${p.label} (not set)`}
              aria-disabled={!hasUrl}
              rel={hasUrl ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 rounded-2xl border border-line bg-surface px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-ink/10"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 hover:scale-110"
                style={{ background: p.bg, color: p.fg }}
              >
                <SocialIcon Icon={p.Icon} />
              </span>
              <span className="flex-1 truncate text-left font-semibold text-ink">{p.label}</span>
              <span className="text-muted">&gt;</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
