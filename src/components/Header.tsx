import { MapPin } from 'lucide-react'
import { profile } from '../config/profile'

export default function Header() {
  return (
    <header className="flex flex-col items-center pb-6 pt-4 text-center">
      <div
        className="h-20 w-20 overflow-hidden rounded-full border-2 border-white/40 sm:h-24 sm:w-24"
        style={{ background: 'var(--avatar)', boxShadow: 'inset 0 0 0 2px var(--avatar-border)' }}
      >
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          className="h-full w-full object-cover object-[50%_20%]"
        />
      </div>

      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {profile.name}
      </h1>
      <p className="mt-2 text-base font-semibold text-accent-ink sm:text-lg">{profile.title}</p>
      <p className="mt-1 flex flex-wrap items-center justify-center gap-1 text-sm text-muted dark:text-ink">
        <MapPin size={16} className="shrink-0" aria-hidden />
        <span>
          {profile.city}, {profile.country}
        </span>
      </p>
    </header>
  )
}
