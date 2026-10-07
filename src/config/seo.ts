import { contactAddressQuery, contactInfo, hasTrainsPhone, toE164 } from "../data/contact"

export const SITE_NAME = "TheGlobalTripFair.com"
export const SITE_ORIGIN = "https://theglobaltripfair.com"
export const SITE_URL = `${SITE_ORIGIN}/`
export const DEFAULT_OG_IMAGE = "/images/social/og-default.webp"
export const DEFAULT_OG_IMAGE_ABS = `${SITE_ORIGIN}${DEFAULT_OG_IMAGE}`
export const THEME_COLOR = "#E31B23"

/** Set these only when official webmaster tokens are issued. Empty values are omitted from HTML. */
export const searchVerification = {
  google: "",
  bing: "",
} as const

export const business = {
  name: SITE_NAME,
  phoneDisplay: contactInfo.phoneDisplay,
  telephone: toE164(contactInfo.phoneDisplay),
  trainsTelephone: hasTrainsPhone ? toE164(contactInfo.trainsPhoneDisplay) : "",
  email: contactInfo.email,
  url: SITE_URL,
  address: {
    streetAddress: contactInfo.address.street,
    addressLocality: contactInfo.address.city,
    addressRegion: contactInfo.address.state,
    postalCode: contactInfo.address.zip,
    addressCountry: contactInfo.address.countryCode,
    formatted: `${contactAddressQuery}, ${contactInfo.address.country}`,
  },
} as const

export type SeoRouteKey =
  | "home"
  | "flights"
  | "hotels"
  | "holidays"
  | "transfers"
  | "cars"
  | "cruises"
  | "trains"
  | "destinations"
  | "contact"
  | "about"
  | "privacy"
  | "terms"
  | "cancellation"
  | "cookies"
  | "disclaimer"
  | "advertising"
  | "notFound"
  | "maintenance"

export type PublicPath = {
  path: string
  seoKey?: SeoRouteKey
  changefreq: "daily" | "weekly" | "monthly"
  priority: string
  indexable: boolean
}

/** Canonical public routes. Keep sitemap.xml in sync when this list changes. */
export const publicPaths: PublicPath[] = [
  { path: "/", seoKey: "home", changefreq: "daily", priority: "1.0", indexable: true },
  { path: "/flights", seoKey: "flights", changefreq: "weekly", priority: "0.9", indexable: true },
  { path: "/hotels", seoKey: "hotels", changefreq: "weekly", priority: "0.9", indexable: true },
  { path: "/cars", seoKey: "cars", changefreq: "weekly", priority: "0.9", indexable: true },
  { path: "/holidays", seoKey: "holidays", changefreq: "weekly", priority: "0.9", indexable: true },
  { path: "/transfers", seoKey: "transfers", changefreq: "weekly", priority: "0.8", indexable: true },
  { path: "/cruises", seoKey: "cruises", changefreq: "weekly", priority: "0.9", indexable: true },
  { path: "/trains", seoKey: "trains", changefreq: "weekly", priority: "0.9", indexable: true },
  { path: "/destinations", seoKey: "destinations", changefreq: "weekly", priority: "0.8", indexable: true },
  { path: "/contact", seoKey: "contact", changefreq: "monthly", priority: "0.8", indexable: true },
  { path: "/about", seoKey: "about", changefreq: "monthly", priority: "0.6", indexable: true },
  { path: "/privacy", seoKey: "privacy", changefreq: "monthly", priority: "0.4", indexable: true },
  { path: "/terms", seoKey: "terms", changefreq: "monthly", priority: "0.4", indexable: true },
  { path: "/cancellation", seoKey: "cancellation", changefreq: "monthly", priority: "0.4", indexable: true },
  { path: "/cookies", seoKey: "cookies", changefreq: "monthly", priority: "0.3", indexable: true },
  { path: "/disclaimer", seoKey: "disclaimer", changefreq: "monthly", priority: "0.3", indexable: true },
  { path: "/advertising", seoKey: "advertising", changefreq: "monthly", priority: "0.3", indexable: true },
  { path: "/search", seoKey: "maintenance", changefreq: "monthly", priority: "0.1", indexable: false },
  { path: "/offers", changefreq: "weekly", priority: "0.5", indexable: false },
  { path: "/careers", changefreq: "monthly", priority: "0.3", indexable: false },
  { path: "/blog", changefreq: "weekly", priority: "0.3", indexable: false },
  { path: "/help", changefreq: "monthly", priority: "0.3", indexable: false },
  { path: "/booking", changefreq: "monthly", priority: "0.3", indexable: false },
  { path: "/inspiration", changefreq: "monthly", priority: "0.3", indexable: false },
  { path: "/guides", changefreq: "monthly", priority: "0.3", indexable: false },
  { path: "/tips", changefreq: "monthly", priority: "0.3", indexable: false },
  { path: "/cabs", changefreq: "monthly", priority: "0.1", indexable: false },
  { path: "/activities", changefreq: "monthly", priority: "0.2", indexable: false },
  { path: "/insurance", changefreq: "monthly", priority: "0.2", indexable: false },
]

export const sitemapPaths = publicPaths.filter((route) => route.indexable)

export const absoluteUrl = (path = "/") => {
  if (path === "/") return SITE_URL
  return `${SITE_ORIGIN}${path}`
}

export const findPublicPath = (pathname: string) =>
  publicPaths.find((route) => route.path === pathname)

export const ogLocales: Record<string, string> = {
  en: "en_US",
  fr: "fr_FR",
  de: "de_DE",
  es: "es_ES",
  it: "it_IT",
  pt: "pt_PT",
}
