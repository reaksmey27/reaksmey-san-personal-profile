import { useLang } from '../i18n/LangContext'
import Flag from './Flag'

/** Shows the flag and name of the language you will switch TO. */
export default function LanguageToggle() {
  const { lang, t, toggle } = useLang()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.switchTo}
      className="glass glass-hover absolute left-4 top-4 flex h-10 items-center gap-2 rounded-full px-3 text-sm font-semibold text-muted hover:text-ink"
    >
      <Flag lang={lang === 'en' ? 'km' : 'en'} />
      {t.switchLabel}
    </button>
  )
}
