# Deployment

TheGlobalTripFair.com is a Vite single-page application. There is no application server and no environment file required for the current production build.

## Build

```bash
npm ci
npm run build
```

Output: `dist/`.

`npm ci` requires `package-lock.json` and a clean `node_modules` tree. Use it in CI and on production builders.

## Hosting

Serve `dist/` over HTTPS at `https://theglobaltripfair.com`.

Required host behavior:

1. Serve `/` from `index.html`.
2. Serve hashed assets from `/assets/` with long cache headers.
3. Fall unknown routes back to `index.html` so React Router can render pages such as `/flights` and `/search`.
4. Keep `robots.txt`, `sitemap.xml`, `site.webmanifest`, and files under `/images/` at the site root (they are copied from `public/`).

Example Nginx location:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

On Netlify, add `public/_redirects` only if you move the redirect file into `public/` before building:

```
/*    /index.html   200
```

On Vercel (the current host), the root `vercel.json` rewrites every route to `/index.html`. Keep it: without it, Vercel returns HTTP 404 for direct visits to `/trains`, `/flights` and the other pages, and Google Ads disapproves ads that land on them.

The Spanish homepage `/es` has its own shell. The build writes `dist/es/index.html` with Spanish `lang`, title, description, canonical and hreflang tags (see `vite.config.ts`), and the first rewrite in `vercel.json` serves it for `/es`. On other hosts, serve `es/index.html` for `/es` too.

## After deploy

- Confirm `https://theglobaltripfair.com/` loads and the search form works.
- Confirm `/flights`, `/contact`, `/privacy`, and an unknown URL (404) render.
- Confirm `/search` after a valid search shows the maintenance page with 888-404-0651 and support@theglobaltripfair.com.
- Submit the sitemap `https://theglobaltripfair.com/sitemap.xml` in Search Console when the domain is verified.
- Add Google and Bing verification tokens in `src/config/seo.ts` only after those tokens are issued.

## Secrets

This repository should not contain API keys or webmaster tokens. Location autocomplete uses public endpoints that do not require a project secret. If a booking API is added later, keep credentials in the host environment, not in the client bundle.
