/**
 * Regenerates public/sitemap.xml from the same indexable paths
 * listed in src/config/seo.ts. Run: node scripts/write-sitemap.mjs
 */
import { writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const origin = "https://theglobaltripfair.com"
const today = new Date().toISOString().slice(0, 10)

const indexable = [
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/flights", changefreq: "weekly", priority: "0.9" },
  { path: "/hotels", changefreq: "weekly", priority: "0.9" },
  { path: "/cars", changefreq: "weekly", priority: "0.9" },
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
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...indexable.flatMap((entry) => [
    "  <url>",
    `    <loc>${loc(entry.path)}</loc>`,
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
