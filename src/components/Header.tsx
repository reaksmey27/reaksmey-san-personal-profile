import { profile } from '../config/profile'

export default function Header() {
  return (
    <header className="flex flex-col items-center pb-2 pt-4 text-center">
      <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/40 bg-avatar shadow-[0_0_30px_-8px_rgba(0,0,0,0.5)] dark:shadow-[0_0_30px_-8px_rgba(59,130,246,0.5)]"
        style={{ background: 'var(--avatar)', boxShadow: 'inset 0 0 0 2px var(--avatar-border)' }}>
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          className="h-full w-full object-cover object-[50%_20%]"
        />
      </div>

      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-ink">
        {profile.name}
      </h1>
      <p className="mt-2 text-lg font-semibold text-accent-ink accent">{profile.title}</p>
      <p className="mt-1 flex items-center justify-center gap-1 text-sm text-muted dark:text-ink">
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        {profile.city}, {profile.country}
      </p>
    </header>
  )
}
