import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { strings } from './strings'
import type { Lang } from './strings'

type Ctx = { lang: Lang; t: (typeof strings)[Lang]; toggle: () => void }

const LangContext = createContext<Ctx | null>(null)

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'km') return saved
  } catch {
    /* storage blocked */
  }
  return navigator.language?.toLowerCase().startsWith('km') ? 'km' : 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggle = useCallback(() => {
    const next: Lang = lang === 'en' ? 'km' : 'en'
    try {
      localStorage.setItem('lang', next)
    } catch {
      /* ignore */
    }
    setLang(next)
  }, [lang])

  const value = useMemo(() => ({ lang, t: strings[lang], toggle }), [lang, toggle])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>')
  return ctx
}
