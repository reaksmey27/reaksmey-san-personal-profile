import { ChevronRight } from 'lucide-react'
import type { SocialLink as SocialLinkData } from '../config/social'

export default function SocialLink({ id, label, url, Icon, bg, fg }: SocialLinkData) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${label} profile`}
      className="glass glass-hover group flex items-center gap-3 rounded-xl px-3 py-3 hover:-translate-y-0.5 hover:shadow-lg sm:gap-4 sm:px-4 sm:py-4"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-200 group-hover:scale-110 sm:h-10 sm:w-10"
        style={{ background: bg, color: fg }}
      >
        {id === 'tiktok' ? (
          // Official TikTok look: white note with cyan and red offset shadows on black
          <span className="relative block h-[22px] w-[22px]" aria-hidden="true">
            <Icon size={22} className="absolute inset-0 translate-x-[1.5px] translate-y-[1.5px]" style={{ color: '#FE2C55' }} />
            <Icon size={22} className="absolute inset-0 -translate-x-[1.5px] -translate-y-[1.5px]" style={{ color: '#25F4EE' }} />
            <Icon size={22} className="absolute inset-0" style={{ color: '#FFFFFF' }} />
          </span>
        ) : (
          <Icon size={22} aria-hidden="true" />
        )}
      </span>
      <span className="flex-1 truncate text-left text-sm font-semibold text-ink sm:text-base">
        {label}
      </span>
      <ChevronRight size={18} className="text-muted" aria-hidden />
    </a>
  )
}
