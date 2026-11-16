import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { useLang } from '../i18n/LangContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useLang()
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.themeTo(next)}
      className="glass glass-hover absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-muted hover:text-ink"
    >
      {theme === 'dark' ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
    </button>
  )
}
