import type { ReactNode } from 'react'

// Mobile: icon stacked above the label so text never wraps.
// sm and up: icon beside the label. Frosted glass look.
const styles =
  'glass glass-hover flex min-w-0 flex-1 flex-col items-center justify-center gap-1.5 whitespace-nowrap rounded-xl px-2 py-3 text-xs font-semibold text-muted hover:text-ink sm:flex-row sm:gap-2 sm:px-3 sm:py-2.5 sm:text-sm'

type Props = {
  icon: ReactNode
  label: string
  ariaLabel: string
} & ({ onClick: () => void; href?: never } | { href: string; onClick?: never })

/** Small glass button used in the copy / share / QR row. Renders a link when `href` is set. */
export default function ActionButton({ icon, label, ariaLabel, onClick, href }: Props) {
  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={styles}>
        {icon}
        {label}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={styles}>
      {icon}
      {label}
    </button>
  )
}
