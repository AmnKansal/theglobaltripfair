import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { homeSeo } from './src/i18n/homeSeo.ts'

const SITE_ORIGIN = 'https://theglobaltripfair.com'

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Writes dist/es/index.html: the app shell with the Spanish homepage's language, title,
 * description, canonical and hreflang links already in the HTML, so crawlers and link
 * previews read /es as Spanish before the app runs. vercel.json serves it for /es.
 */
function spanishHomeShell(): Plugin {
  let outDir = 'dist'

  return {
    name: 'spanish-home-shell',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const title = escapeHtml(homeSeo.es.title)
      const description = escapeHtml(homeSeo.es.description)
      const url = `${SITE_ORIGIN}/es`
      const alternates = [
        `<link rel="alternate" hreflang="en" href="${SITE_ORIGIN}/" />`,
        `<link rel="alternate" hreflang="es" href="${url}" />`,
        `<link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}/" />`,
      ].join('\n    ')
      const swaps: Array<[RegExp, string]> = [
        [/<html lang="en">/, '<html lang="es">'],
        [/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`],
        [/<title>[^<]*<\/title>/, `<title>${title}</title>`],
        [/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />\n    ${alternates}`],
        [/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`],
        [/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, `<meta property="og:description" content="${description}" />`],
        [/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`],
        [/<meta property="og:locale" content="[^"]*" \/>/, '<meta property="og:locale" content="es_LA" />'],
        [/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`],
        [/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${description}" />`],
      ]

      let html = readFileSync(join(outDir, 'index.html'), 'utf8')
      for (const [pattern, replacement] of swaps) {
        // Fail the build rather than ship an /es page that is still partly English.
        if (!pattern.test(html)) throw new Error(`spanish-home-shell: index.html no longer matches ${pattern}`)
        html = html.replace(pattern, () => replacement)
      }
      mkdirSync(join(outDir, 'es'), { recursive: true })
      writeFileSync(join(outDir, 'es', 'index.html'), html)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spanishHomeShell()],
})
