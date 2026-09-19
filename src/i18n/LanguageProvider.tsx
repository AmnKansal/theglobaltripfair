import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState, type ReactNode } from "react"
import { dictionaries } from "./dictionaries"
import { defaultLocale, isLocale, languageMeta, locales, type Locale } from "./languages"
import { translate } from "./translate"

const STORAGE_KEY = "tgtf.language"

export type TranslateFn = (key: string, vars?: Record<string, string | number>) => string

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslateFn
  languages: typeof locales
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const readStoredLocale = (): Locale => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && isLocale(stored)) return stored
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
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  useLayoutEffect(() => {
    applyDocumentLanguage(locale)
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    persistLocale(next)
  }, [])

  const t = useCallback<TranslateFn>(
    (key, vars) => translate(dictionaries[locale], dictionaries.en, key, vars),
    [locale],
  )

  const value = useMemo(
    () => ({ locale, setLocale, t, languages: locales }),
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
