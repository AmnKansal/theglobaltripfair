/**
 * Regenerates public/sitemap.xml from the same indexable paths
 * listed in src/config/seo.ts. Run: node scripts/write-sitemap.mjs
 */
import { writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const origin = "https://theglobaltripfair.com"
const today = new Date().toISOString().slice(0, 10)

/** Keep in sync with src/data/flightPages (destinations.ts and flightTypes.ts). */
const destinationFlightSlugs = [
  "new-york-city",
  "los-angeles",
  "las-vegas",
  "san-francisco",
  "miami",
  "orlando",
  "london",
  "paris",
  "rome",
  "dubai",
  "istanbul",
  "tokyo",
]
const flightTypeSlugs = [
  "domestic",
  "international",
  "first-class",
  "business-class",
  "one-way",
  "round-trip",
  "last-minute",
  "student",
  "family-holiday",
  "multi-city",
  "cheap-flights",
  "holiday-deals",
]
const flightPages = [
  ...destinationFlightSlugs.map((slug) => ({ path: `/flights/cheap-flights-to-${slug}`, changefreq: "weekly", priority: "0.8" })),
  ...flightTypeSlugs.map((slug) => ({ path: `/flights/${slug}`, changefreq: "weekly", priority: "0.8" })),
]

/** The homepage in each language with its own URL. Keep in sync with homeAlternates in src/config/seo.ts. */
const homeAlternates = [
  { hreflang: "en", path: "/" },
  { hreflang: "es", path: "/es" },
  { hreflang: "x-default", path: "/" },
]
const homePaths = new Set(homeAlternates.map((entry) => entry.path))

const indexable = [
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/es", changefreq: "daily", priority: "1.0" },
  { path: "/flights", changefreq: "weekly", priority: "0.9" },
  ...flightPages,
  { path: "/hotels", changefreq: "weekly", priority: "0.9" },
  { path: "/car-rentals", changefreq: "weekly", priority: "0.9" },
  { path: "/holidays", changefreq: "weekly", priority: "0.9" },
  { path: "/transfers", changefreq: "weekly", priority: "0.8" },
  { path: "/cruises", changefreq: "weekly", priority: "0.9" },
  { path: "/trains", changefreq: "weekly", priority: "0.9" },
  { path: "/destinations", changefreq: "weekly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/about", changefreq: "monthly", priority: "0.6" },
  { path: "/privacy", changefreq: "monthly", priority: "0.4" },
  { path: "/terms", changefreq: "monthly", priority: "0.4" },
  { path: "/cancellation", changefreq: "monthly", priority: "0.4" },
  { path: "/cookies", changefreq: "monthly", priority: "0.3" },
  { path: "/disclaimer", changefreq: "monthly", priority: "0.3" },
  { path: "/advertising", changefreq: "monthly", priority: "0.3" },
]

const loc = (path) => (path === "/" ? `${origin}/` : `${origin}${path}`)

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...indexable.flatMap((entry) => [
    "  <url>",
    `    <loc>${loc(entry.path)}</loc>`,
    ...(homePaths.has(entry.path)
      ? homeAlternates.map(
          (alternate) =>
            `    <xhtml:link rel="alternate" hreflang="${alternate.hreflang}" href="${loc(alternate.path)}" />`,
        )
      : []),
    `    <lastmod>${today}</lastmod>`,
    `    <changefreq>${entry.changefreq}</changefreq>`,
    `    <priority>${entry.priority}</priority>`,
    "  </url>",
  ]),
  "</urlset>",
  "",
].join("\n")

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
writeFileSync(join(root, "public", "sitemap.xml"), xml)
console.log(`Wrote sitemap with ${indexable.length} URLs`)
