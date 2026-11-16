import ActionBar from './components/ActionBar'
import Header from './components/Header'
import QrCodeSection from './components/QrCodeSection'
import SocialLinks from './components/SocialLinks'
import LanguageToggle from './components/LanguageToggle'
import ThemeToggle from './components/ThemeToggle'
import { useLang } from './i18n/LangContext'
import { profile } from './config/profile'

export default function App() {
  const { t } = useLang()
  return (
    <div className="relative isolate mx-auto max-w-2xl px-3 py-3 sm:py-8">
      {/* Soft color blobs behind the glass */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-400/50 blur-3xl dark:bg-violet-600/40" />
        <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-sky-300/50 blur-3xl dark:bg-indigo-500/30" />
        <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-pink-300/50 blur-3xl dark:bg-fuchsia-600/25" />
      </div>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-30 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        {t.skip}
      </a>
      <div className="glass relative rounded-3xl px-3 pb-6 pt-8 sm:px-10 sm:py-8">
        <LanguageToggle />
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
