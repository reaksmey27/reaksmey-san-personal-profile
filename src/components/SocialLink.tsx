import { ChevronRight } from 'lucide-react'
import type { SocialLink as SocialLinkData } from '../config/social'

export default function SocialLink({ label, url, Icon, bg, fg }: SocialLinkData) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${label} profile`}
      className="group flex items-center gap-3 rounded-xl border border-line bg-surface px-3 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/10 hover:shadow-lg sm:gap-4 sm:px-4 sm:py-4"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110 sm:h-10 sm:w-10"
        style={{ background: bg, color: fg }}
      >
        <Icon size={22} aria-hidden="true" />
      </span>
      <span className="flex-1 truncate text-left text-sm font-semibold text-ink sm:text-base">
        {label}
      </span>
      <ChevronRight size={18} className="text-muted" aria-hidden />
    </a>
  )
}
