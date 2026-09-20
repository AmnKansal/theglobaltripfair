# TheGlobalTripFair.com

Official website for [TheGlobalTripFair.com](https://theglobaltripfair.com) — a travel platform for flights, hotels, holiday packages, airport transfers, and destinations.

The live site is a static single-page application. Location autocomplete uses public place APIs. The booking engine is not connected yet; a completed search opens a maintenance page and directs travellers to the travel team.

## Stack

- React 19
- TypeScript
- Vite 8
- React Router 7
- Lucide React
- CSS modules and design tokens
- Custom i18n (English, French, German, Spanish, Italian, Portuguese)

Package manager: **npm** (`package-lock.json`).

## Requirements

- Node.js 20 or later
- npm 10 or later

## Setup

```bash
npm install
npm run dev
```

The development server defaults to [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Typecheck and production build (`dist/`) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint with oxlint |
| `npm run sitemap` | Regenerate `public/sitemap.xml` from the public route list |

There is no automated test suite. Production checks are lint and `npm run build`.

## Project layout

```
public/                 Static assets, favicons, robots.txt, sitemap, images
scripts/                Sitemap generator
src/components/         UI (layout, search, offers, stories, contact)
src/config/             Site origin, SEO, and business details
src/data/               Contact, destinations, offers, search types
src/hooks/              Shared client hooks
src/i18n/               Dictionaries and language provider
src/pages/              Route screens
src/routes/             Router
src/services/           Location autocomplete and search submit
src/styles/             Tokens and global CSS
src/utils/              Validation and helpers
```

Contact details live in `src/data/contact.ts`. SEO, canonical origin, and webmaster-token placeholders live in `src/config/seo.ts`. Leave those tokens empty until official Search Console / Bing values are issued.

Language preference is stored in `localStorage` under `tgtf.language`. The last validated search is stored in `sessionStorage` under `tgtf.lastSearch` so a future booking API can reuse it.

## Search

Travellers can search flights, hotels, holiday packages, and transfers. Place suggestions come from Travelpayouts Autocomplete, with Open-Meteo geocoding as a fallback. `src/services/search.ts` validates the request and currently returns a maintenance status. Replace that function when a booking backend is available. Do not invent inventory, fares, or confirmations in the frontend.

## Deployment

The production build is a static site.

```bash
npm run build
```

Upload the contents of `dist/` to any static host (Nginx, Cloudflare Pages, Netlify, Vercel, S3 + CDN). Configure the host so unknown paths serve `index.html` (SPA fallback). The production origin is `https://theglobaltripfair.com`.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for host notes.

## License

Proprietary. See [LICENSE](./LICENSE). The TheGlobalTripFair.com name and marks are reserved.

Localized photographs in `public/images/` were obtained under the [Unsplash License](https://unsplash.com/license). Source records are in `public/images/sources.json`.

## Contact

- Phone: 888-404-0651
- Email: support@theglobaltripfair.com
- Address: 980 Creek Way Lane, Greenwood, Indiana 46143, United States
