import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState, type ReactNode } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { dictionaries } from "./dictionaries"
import {
  defaultLocale,
  homePathFor,
  isLocale,
  languageMeta,
  localeHomePaths,
  locales,
  routeLocaleFor,
  type Locale,
} from "./languages"
import { translate } from "./translate"
import type { Messages } from "./types"

const STORAGE_KEY = "tgtf.language"

export type TranslateFn = (key: string, vars?: Record<string, string | number>) => string

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslateFn
  /** The active dictionary, for optional entries keyed by data, such as footer link labels. */
  messages: Messages
  /** Where the logo and other home links point in the active language: /es in Spanish, / otherwise. */
  homePath: string
  languages: typeof locales
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const readStoredLocale = (): Locale => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && isLocale(stored) && !localeHomePaths[stored]) return stored
  } catch {
    /* storage can be unavailable */
  }
  return defaultLocale
}

const persistLocale = (locale: Locale) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    /* ignore quota / private mode */
  }
}

const applyDocumentLanguage = (locale: Locale) => {
  document.documentElement.lang = languageMeta[locale].htmlLang
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [storedLocale, setStoredLocale] = useState<Locale>(readStoredLocale)
  const routeLocale = routeLocaleFor(pathname)
  const locale = routeLocale ?? storedLocale

  useLayoutEffect(() => {
    applyDocumentLanguage(locale)
  }, [locale])

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return
      const homePath = localeHomePaths[next]
      if (homePath) {
        // Spanish is only the /es homepage, so choosing it from any page opens that page.
        navigate(homePath)
        return
      }
      setStoredLocale(next)
      persistLocale(next)
      // Leaving /es: every other language shares the main homepage.
      if (routeLocale) navigate("/")
    },
    [locale, navigate, routeLocale],
  )

  const t = useCallback<TranslateFn>(
    (key, vars) => translate(dictionaries[locale], dictionaries.en, key, vars),
    [locale],
  )

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      messages: dictionaries[locale],
      homePath: homePathFor(locale),
      languages: locales,
    }),
    [locale, setLocale, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useTranslation must be used within LanguageProvider")
  }
  return context
}
