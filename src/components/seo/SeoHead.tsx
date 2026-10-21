import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"
import {
  DEFAULT_OG_IMAGE_ABS,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  business,
  findPublicPath,
  homeAlternates,
  ogLocales,
  searchVerification,
  type SeoRouteKey,
} from "../../config/seo"
import { useTranslation } from "../../i18n"
import { languageMeta } from "../../i18n/languages"

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let node = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!node) {
    node = document.createElement("meta")
    document.head.appendChild(node)
  }
  for (const [key, value] of Object.entries(attributes)) {
    node.setAttribute(key, value)
  }
}

const upsertLink = (rel: string, href: string) => {
  let node = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!node) {
    node = document.createElement("link")
    node.setAttribute("rel", rel)
    document.head.appendChild(node)
  }
  node.setAttribute("href", href)
}

/** Replaces every hreflang link, so pages without a translation carry none. */
const syncAlternateLinks = (links: ReadonlyArray<{ hreflang: string; href: string }>) => {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => node.remove())
  for (const { hreflang, href } of links) {
    const node = document.createElement("link")
    node.setAttribute("rel", "alternate")
    node.setAttribute("hreflang", hreflang)
    node.setAttribute("href", href)
    document.head.appendChild(node)
  }
}

const pageTitleKey = (key: SeoRouteKey) => `seo.${key}.title`
const pageDescriptionKey = (key: SeoRouteKey) => `seo.${key}.description`

const fallbackTitle = (pathname: string, t: (key: string) => string) => {
  const slug = pathname.replace(/^\//, "") || "home"
  const titleKey = `pages.${slug}Title`
  const comingKey = `comingSoon.${slug}Title`
  const fromPages = t(titleKey)
  if (fromPages !== titleKey) return `${fromPages} | ${SITE_NAME}`
  const fromComing = t(comingKey)
  if (fromComing !== comingKey) return `${fromComing} | ${SITE_NAME}`
  return `${SITE_NAME} | Flights, Hotels, Cars, Cruises & Trains`
}

const fallbackDescription = (pathname: string, t: (key: string) => string) => {
  const slug = pathname.replace(/^\//, "") || "home"
  const copyKey = `pages.${slug}Copy`
  const comingKey = `comingSoon.${slug}Copy`
  const fromPages = t(copyKey)
  if (fromPages !== copyKey) return fromPages
  const fromComing = t(comingKey)
  if (fromComing !== comingKey) return fromComing
  return t("seo.home.description")
}

export function SeoHead() {
  const { pathname } = useLocation()
  const { t, locale } = useTranslation()
  const route = findPublicPath(pathname)
  const isKnown = Boolean(route)
  const indexable = route?.indexable ?? false
  const seoKey = route?.seoKey
  const canonical = isKnown ? absoluteUrl(pathname) : SITE_URL
  const title = route?.title
    ? route.title
    : seoKey
    ? t(pageTitleKey(seoKey))
    : isKnown
      ? fallbackTitle(pathname, t)
      : t("seo.notFound.title")
  const description = route?.description
    ? route.description
    : seoKey
    ? t(pageDescriptionKey(seoKey))
    : isKnown
      ? fallbackDescription(pathname, t)
      : t("seo.notFound.description")
  const ogLocale = ogLocales[locale] ?? "en_US"
  const ogImage = route?.image ? absoluteUrl(route.image) : DEFAULT_OG_IMAGE_ABS
  const translatedHome = homeAlternates.some((entry) => entry.path === pathname)

  useLayoutEffect(() => {
    document.title = title
    document.documentElement.lang = languageMeta[locale].htmlLang

    upsertMeta('meta[name="description"]', { name: "description", content: description })
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: indexable ? "index, follow" : "noindex, follow",
    })
    upsertLink("canonical", canonical)
    syncAlternateLinks(
      translatedHome
        ? homeAlternates.map((entry) => ({ hreflang: entry.hreflang, href: absoluteUrl(entry.path) }))
        : [],
    )

    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title })
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description })
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" })
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical })
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: ogImage })
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME })
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: ogLocale })

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" })
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title })
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description })
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage })

    if (searchVerification.google) {
      upsertMeta('meta[name="google-site-verification"]', {
        name: "google-site-verification",
        content: searchVerification.google,
      })
    }
    if (searchVerification.bing) {
      upsertMeta('meta[name="msvalidate.01"]', {
        name: "msvalidate.01",
        content: searchVerification.bing,
      })
    }

    const graph = [
      {
        "@type": "TravelAgency",
        "@id": `${SITE_URL}#organization`,
        name: business.name,
        url: business.url,
        telephone: business.trainsTelephone
          ? [business.telephone, business.trainsTelephone]
          : business.telephone,
        email: business.email,
        image: DEFAULT_OG_IMAGE_ABS,
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.streetAddress,
          addressLocality: business.address.addressLocality,
          addressRegion: business.address.addressRegion,
          postalCode: business.address.postalCode,
          addressCountry: business.address.addressCountry,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        name: SITE_NAME,
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}#organization` },
        inLanguage: languageMeta[locale].htmlLang,
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        name: title,
        description,
        url: canonical,
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: { "@id": `${SITE_URL}#organization` },
        inLanguage: languageMeta[locale].htmlLang,
      },
    ]

    let script = document.getElementById("tgtf-jsonld") as HTMLScriptElement | null
    if (!script) {
      script = document.createElement("script")
      script.id = "tgtf-jsonld"
      script.type = "application/ld+json"
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": graph,
    })
  }, [canonical, description, indexable, locale, ogImage, ogLocale, title, translatedHome])

  return null
}
