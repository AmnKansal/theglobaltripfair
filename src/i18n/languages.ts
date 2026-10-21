export const locales = ["en", "es", "fr", "de", "it", "pt"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const languageMeta: Record<
  Locale,
  { nativeName: string; htmlLang: string }
> = {
  en: { nativeName: "English", htmlLang: "en" },
  es: { nativeName: "Español", htmlLang: "es" },
  fr: { nativeName: "Français", htmlLang: "fr" },
  de: { nativeName: "Deutsch", htmlLang: "de" },
  it: { nativeName: "Italiano", htmlLang: "it" },
  pt: { nativeName: "Português", htmlLang: "pt" },
}

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value)

/**
 * Languages whose homepage has its own URL. The URL picks them, never a stored preference:
 * Spanish exists only as the /es homepage, and the rest of the site stays in the stored language.
 */
export const localeHomePaths: Partial<Record<Locale, string>> = {
  es: "/es",
}

export const homePathFor = (locale: Locale) => localeHomePaths[locale] ?? "/"

/** The language a URL fixes, e.g. "es" on /es. */
export const routeLocaleFor = (pathname: string): Locale | undefined => {
  const path = pathname.replace(/\/+$/, "") || "/"
  return locales.find((code) => localeHomePaths[code] === path)
}
