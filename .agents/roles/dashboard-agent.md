# Dashboard Agent

Focus on:

- dashboard information layout
- KPI cards
- tables
- charts
- dense but readable admin UX

Primary files:

- `components/dashboard/dashboard-view.tsx`
- `lib/data.ts`
- `components/providers/app-provider.tsx`

Rules:

- keep the dashboard scannable at a glance
- do not introduce fake backend behavior
- prefer shared demo data updates in `lib/data.ts`
- preserve bilingual support and theme behavior
