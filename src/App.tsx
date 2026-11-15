import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header'
import SocialLinks from './components/SocialLinks'
import QrCodeSection from './components/QrCodeSection'

export default function App() {
  const isDev = import.meta.env.DEV

  // Site URL: dev → the page origin; production → the public site URL (set on Vercel).
  const siteUrl = isDev
    ? (import.meta.env.VITE_SITE_URL || window.location.origin)
    : (import.meta.env.PUBLIC_SITE_URL || window.location.origin)

  return (
    <div className="mx-auto max-w-2xl px-3 py-4 sm:py-8">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-30 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink">
        Skip to content
      </a>
      <div className="relative flex flex-col rounded-3xl border border-line bg-surface px-3 pb-4 pt-10 sm:px-10 sm:py-8">
        <ThemeToggle />
        <main id="main" className="flex-1">
          <Header />
          <SocialLinks siteUrl={siteUrl} />
          <QrCodeSection />
        </main>
      </div>
      <footer className="py-4 text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} Reaksmey SAN
      </footer>
    </div>
  )
}
