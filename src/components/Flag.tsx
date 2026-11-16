import type { Lang } from '../i18n/strings'

/** Small inline SVG flags (emoji flags do not render on Windows). */
export default function Flag({ lang }: { lang: Lang }) {
  return (
    <span
      aria-hidden
      className="block h-[14px] w-5 shrink-0 overflow-hidden rounded-[3px] shadow-sm ring-1 ring-black/15"
    >
      {lang === 'km' ? (
        <svg viewBox="0 0 30 20" className="h-full w-full">
          <rect width="30" height="20" fill="#032EA1" />
          <rect y="5" width="30" height="10" fill="#E00025" />
          <g fill="#fff">
            <rect x="9.5" y="12.4" width="11" height="1.1" />
            <rect x="10.5" y="11.3" width="9" height="1.1" />
            <rect x="13.7" y="8" width="2.6" height="3.3" />
            <path d="M15 6 l1.1 2 h-2.2z" />
            <rect x="11.2" y="9.4" width="1.9" height="1.9" />
            <path d="M12.15 8.1 l.8 1.3 h-1.6z" />
            <rect x="16.9" y="9.4" width="1.9" height="1.9" />
            <path d="M17.85 8.1 l.8 1.3 h-1.6z" />
          </g>
        </svg>
      ) : (
        <svg viewBox="0 0 60 30" className="h-full w-full">
          <rect width="60" height="30" fill="#012169" />
          <path d="M0 0 60 30M60 0 0 30" stroke="#fff" strokeWidth="6" />
          <path d="M0 0 60 30M60 0 0 30" stroke="#C8102E" strokeWidth="2" />
          <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
          <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
        </svg>
      )}
    </span>
  )
}
