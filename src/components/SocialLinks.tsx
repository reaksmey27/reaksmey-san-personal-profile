
import { useState } from 'react'
import { socialPlatforms } from '../config/social'

interface Props {
  siteUrl: string
}

export default function SocialLinks({ siteUrl }: Props) {
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      console.error('Unable to copy profile link')
    }
  }

  const visiblePlatforms = socialPlatforms.filter(
    (platform) => platform.url.trim().length > 0
  )

  return (
    <div className="mx-auto max-w-xl px-3">

      {/* Copy / Share / QR Code */}
      <div className="mb-8 flex justify-center gap-3">

        <button
          type="button"
          onClick={copyLink}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-line bg-surface px-4 py-3 text-sm font-semibold text-muted transition-colors hover:bg-ink/5 hover:text-ink"
          aria-label="Copy profile link"
        >
          <svg
            className="h-4 w-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>

          {copied ? 'Copied!' : 'Copy link'}
        </button>

        <button
          type="button"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: 'Reaksmey SAN',
                url: siteUrl,
              }).catch(() => undefined)
            } else {
              copyLink()
            }
          }}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-line bg-surface px-4 py-3 text-sm font-semibold text-muted transition-colors hover:bg-ink/5 hover:text-ink"
          aria-label="Share profile"
        >
          <svg
            className="h-4 w-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
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
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-line bg-surface px-4 py-3 text-sm font-semibold text-muted transition-colors hover:bg-ink/5 hover:text-ink"
          aria-label="Open profile QR code"
        >
          <svg
            className="h-4 w-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 3v6M15 9v3M9 15h3M15 15h6" />
          </svg>

          QR code
        </a>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col gap-3">
        {visiblePlatforms.map((platform) => {
          const Icon = platform.Icon

          return (
            <a
              key={platform.id}
              href={platform.url.trim()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${platform.label} profile`}
              className="flex items-center gap-4 rounded-2xl border border-line bg-surface px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/10 hover:shadow-lg"
            >
              {/* Official Brand Icon */}
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 hover:scale-110"
                style={{
                  background: platform.bg,
                  color: platform.fg,
                }}
              >
                <Icon
                  size={24}
                  aria-hidden="true"
                />
              </span>

              {/* Platform Name */}
              <span className="flex-1 truncate text-left font-semibold text-ink">
                {platform.label}
              </span>

              {/* Arrow */}
              <span className="text-muted">
                &gt;
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
