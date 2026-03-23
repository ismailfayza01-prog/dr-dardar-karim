# Dr Dardar Karim Project Memory

Use this file before exploring the repo again. It captures stable facts so future work starts from the live clinic site, not the older DentaPro concept.

## Project Identity

- Name: `dr-dardar-karim`
- Type: small Next.js App Router marketing site with leftover mock dashboard pages
- Package manager: npm
- Language: TypeScript
- Styling: Tailwind CSS
- UI libraries: `clsx`, `lucide-react`
- Domain: localized dental clinic website for Cabinet dentaire Dr Dardar Karim in Tanger
- Live production alias: `https://dr-dardar-karim.vercel.app/`
- Latest known production deployment on record: `https://dr-dardar-karim-q4mv7shd2-ismailfayza01-progs-projects.vercel.app`

## Current Structure

- `app/layout.tsx`: root layout, global fonts, wraps app with `AppProvider`
- `app/page.tsx`: root entry that redirects to `/fr`
- `app/[locale]/page.tsx`: localized landing page route for `/fr`, `/en`, `/ar`
- `app/services/page.tsx`: services page
- `app/equipe/page.tsx`: team page
- `app/rdv/page.tsx`: appointment page
- `app/login/page.tsx`: mock login page, `noindex`
- `app/dashboard/page.tsx`: mock dashboard page, `noindex`
- `app/robots.ts`: generated `robots.txt`
- `app/sitemap.ts`: generated `sitemap.xml`
- `components/public/public-home.tsx`: shared locale-driven landing page UI
- `components/public/public-subpage.tsx`: shared renderer for public subpages
- `components/public/public-chrome.tsx`: shared public shell
- `components/dashboard/dashboard-view.tsx`: mock dashboard UI
- `components/providers/app-provider.tsx`: client state for language, theme preset, theme mode, motion pack
- `lib/home-content.ts`: structured FR/EN/AR landing page copy and content blocks
- `lib/data.ts`: shared public/demo content and localized labels for subpages/dashboard
- `lib/seo.ts`: reusable SEO metadata helpers and site constants

## State And Behavior

- Primary public locales: French (`fr`), English (`en`), Arabic (`ar`)
- Root `/` redirects to `/fr`
- `AppProvider` detects locale from pathname and supports the cycle `fr -> en -> ar`
- Direction switches automatically: `ar` is `rtl`, `fr` and `en` are `ltr`
- `LocalizedText` supports `fr`, `ar`, and optional `en`
- Theme presets: `ocean`, `forest`, `midnight`
- Theme modes: `light`, `dark`
- Motion packs: `cinematic`, `fluid`, `precision`, `luxe`, `minimal`
- UI state persists in `localStorage` under `dentapro-ui-state`
- There is no real backend wired in yet
- Forms, login, and dashboard remain presentation/mock behavior
- `/dashboard` is publicly reachable but intentionally blocked from indexing

## Landing Page Facts

- The homepage is now the localized landing page system, not the older giant hardcoded French-only file
- `components/public/public-home.tsx` renders the shared experience for all 3 locale routes
- Main sections include hero, trust badges, services, smile section, reasons, clinic section, patient journey, practical info, FAQ, contact form, and footer
- The page includes an explicit factual summary block for extractability and AI-search visibility
- Google Maps CTAs already use the exact Cabinet dentaire Dr Dardar Karim place URL
- Branding assets already present:
  - `public/dr-dardar-karim-logo.webp`
  - `public/dr-dardar-karim-doctor.png`

## SEO And AI Search State

- Public landing pages exist at:
  - `/fr`
  - `/en`
  - `/ar`
- Localized landing pages include:
  - unique title and description
  - canonical URL
  - `hreflang` alternates for `fr-MA`, `en`, `ar-MA`, and `x-default`
  - Open Graph metadata
  - Twitter metadata
  - localized JSON-LD for `Dentist`, `WebSite`, `WebPage`, and `FAQPage`
- `robots.txt` allows public pages and disallows `/login` and `/dashboard`
- `robots.txt` explicitly allows major AI/search bots including `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `anthropic-ai`, `Google-Extended`, and `Bingbot`
- `sitemap.xml` includes `/fr`, `/en`, `/ar`, `/services`, `/equipe`, and `/rdv`
- `/login` and `/dashboard` are marked `noindex,nofollow`

## Known Limitation

- `app/layout.tsx` still renders a global server-side `<html lang="fr-MA" dir="ltr">`
- Locale pages correct `lang` and `dir` client-side and through localized metadata/schema
- If locale-perfect SSR `lang` becomes important, revisit layout structure

## Verified Facts

- `npm run build` succeeded on 2026-03-23 after the multilingual landing page and SEO work
- Build output generated `/fr`, `/en`, `/ar`, `robots.txt`, and `sitemap.xml`
- The current deployed site is the Dr Dardar Karim copy, not the original generic DentaPro site
- This nested folder is the active repo copy for Dr Dardar Karim work

## Important Working Notes

- Do not waste tokens scanning `node_modules` or `.next`
- Start with the files that match the request instead of reopening the entire app
- For landing page copy or section edits, begin with:
  - `lib/home-content.ts`
  - `components/public/public-home.tsx`
  - `app/[locale]/page.tsx`
- For public subpages and shared labels, inspect:
  - `components/public/public-subpage.tsx`
  - `components/public/public-chrome.tsx`
  - `lib/data.ts`
- For SEO work, start with:
  - `lib/seo.ts`
  - `app/robots.ts`
  - `app/sitemap.ts`
  - route-level metadata in `app/`
- Keep FR/EN/AR aligned when editing shared public copy
- Do not invent APIs, auth, booking backends, or doctor data that are not in the repo

## Fast Start Checklist

1. Read this file.
2. Read `AGENTS.md`.
3. Open only the route, content file, or shared component relevant to the task.
4. Check whether the change belongs in shared copy, shared SEO helpers, or a route component.
5. Run `npm run build` after non-trivial code changes.
