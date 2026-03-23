# DentaPro Agent Guide

This repository uses lightweight local agent docs to reduce repeated exploration, hallucinated assumptions, and unnecessary token use.

## First Read

1. Read [.agents/project-memory.md](C:\Users\HP\Desktop\lovable\dentaire\.agents\project-memory.md).
2. Read only the route or component relevant to the task.
3. Avoid scanning `node_modules`, `.next`, or unrelated pages.

## Project Rules

- Stack: Next.js App Router, TypeScript, Tailwind CSS
- Shared content lives in `lib/data.ts`
- Shared UI chrome lives in `components/public/public-chrome.tsx`
- Shared public page structure lives in `components/public/public-subpage.tsx`
- App-level state lives in `components/providers/app-provider.tsx`
- Dashboard UI lives in `components/dashboard/dashboard-view.tsx`
- There is no real backend yet
- Forms and login are UI-only unless the user explicitly asks to wire data

## Routing Map

- `/` -> homepage
- `/services` -> services subpage
- `/equipe` -> team subpage
- `/rdv` -> appointment subpage
- `/login` -> login subpage
- `/dashboard` -> dashboard demo

## Design Constraints

- Preserve the premium editorial style
- Do not flatten the UI into generic SaaS patterns
- Respect French/Arabic bilingual support and RTL behavior
- Reuse existing patterns before creating new layout systems

## Change Routing

- Content-only edits: start with `lib/data.ts`
- Theme/state behavior: start with `components/providers/app-provider.tsx`
- Public nav/layout issues: start with `components/public/public-chrome.tsx`
- Public page section issues: start with `components/public/public-home.tsx` or `components/public/public-subpage.tsx`
- Dashboard issues: start with `components/dashboard/dashboard-view.tsx`

## Verification

- Run `npm run build` after non-trivial changes
- If terminal output shows mojibake, verify with `rg` before assuming source corruption
- Do not claim backend functionality that is not implemented

## Role Files

- `.agents/roles/ui-agent.md`
- `.agents/roles/dashboard-agent.md`
- `.agents/roles/content-agent.md`
- `.agents/roles/qa-agent.md`
