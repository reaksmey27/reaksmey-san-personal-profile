import ActionBar from './components/ActionBar'
import Header from './components/Header'
import QrCodeSection from './components/QrCodeSection'
import SocialLinks from './components/SocialLinks'
import ThemeToggle from './components/ThemeToggle'
import { profile } from './config/profile'

export default function App() {
  return (
    <div className="mx-auto max-w-2xl px-3 py-3 sm:py-8">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-30 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <div className="relative rounded-3xl border border-line bg-surface px-3 pb-6 pt-8 sm:px-10 sm:py-8">
        <ThemeToggle />
        <main id="main">
          <Header />
          <div className="mx-auto max-w-xl px-3">
            <ActionBar />
            <SocialLinks />
          </div>
          <QrCodeSection />
        </main>
      </div>
      <footer className="py-4 text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  )
}
