# Agent Workflow

Use this workflow before making changes.

## Startup

1. Read `.agents/project-memory.md`
2. Read `AGENTS.md`
3. Open only the files relevant to the requested task
4. Decide whether the task is:
   - multilingual landing page
   - public subpage
   - SEO / AI-search
   - dashboard/mock area
   - content/data only
   - verification only

## File Targeting

- Root redirect: `app/page.tsx`
- Localized landing pages: `app/[locale]/page.tsx`
- Landing page content: `lib/home-content.ts`
- Landing page UI: `components/public/public-home.tsx`
- Shared public pages: `components/public/public-subpage.tsx`
- Shared chrome: `components/public/public-chrome.tsx`
- Shared public/demo content: `lib/data.ts`
- SEO helpers: `lib/seo.ts`
- SEO routes: `app/robots.ts`, `app/sitemap.ts`
- Dashboard: `components/dashboard/dashboard-view.tsx`
- Global state and theme: `components/providers/app-provider.tsx`

## Editing Discipline

- Prefer modifying existing shared components over duplicating layouts
- Keep French, English, and Arabic aligned when editing shared landing page content
- Keep RTL support intact
- Preserve canonical, `hreflang`, schema, and locale metadata consistency across `/fr`, `/en`, and `/ar`
- Do not invent APIs, auth, database schemas, or integrations that are not present
- If wiring real functionality, state clearly what is still mocked

## Verification Levels

- Small copy/doc change: read-back check
- SEO/config change: read generated metadata/routes and run `npm run build` if code changed
- UI/state change: `npm run build`
- Risky refactor: build plus targeted review of impacted shared files

## Handoff Format

When finishing work, report:

1. What changed
2. What was verified
3. What remains mocked, assumed, or still limited
