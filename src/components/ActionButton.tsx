import type { ReactNode } from 'react'

const styles =
  'flex flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-surface px-3 py-2.5 text-sm font-semibold text-muted transition-colors hover:bg-ink/5 hover:text-ink'

type Props = {
  icon: ReactNode
  label: string
  ariaLabel: string
} & ({ onClick: () => void; href?: never } | { href: string; onClick?: never })

/** Small outlined button used in the copy / share / QR row. Renders a link when `href` is set. */
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
