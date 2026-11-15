import type { ReactNode } from 'react'

interface Props {
  id: string
  title: string
  children: ReactNode
}

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-6 border-t border-line py-8">
      <h2 id={`${id}-title`} className="mb-5 text-lg font-semibold">
        {title}
      </h2>
      {children}
    </section>
  )
}
