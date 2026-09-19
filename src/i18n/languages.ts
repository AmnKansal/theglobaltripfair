export const locales = ["en", "fr", "de", "es", "it", "pt"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const languageMeta: Record<
  Locale,
  { nativeName: string; htmlLang: string }
> = {
  en: { nativeName: "English", htmlLang: "en" },
  fr: { nativeName: "Français", htmlLang: "fr" },
  de: { nativeName: "Deutsch", htmlLang: "de" },
  es: { nativeName: "Español", htmlLang: "es" },
  it: { nativeName: "Italiano", htmlLang: "it" },
  pt: { nativeName: "Português", htmlLang: "pt" },
}

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value)
