@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site for **Christo Sam Mathew** (Flutter & Full-Stack Developer).
Single-page, recruiter-focused, SEO-optimized. Built on Next.js 16 App Router.

## Commands

- `npm run dev` — start dev server on http://localhost:3000 (Turbopack)
- `npm run build` — production build (Turbopack)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`)

## Architecture

**Single-page site.** All content is composed in `app/page.tsx` from section
components in `components/`. Navigation uses in-page anchor links (`#about`,
`#projects`, etc.) — there are no other routes.

**Resume content is centralized in `lib/data.ts`** — profile, skill groups, projects,
experience, education, and nav sections. Every section component reads from here, so
updates to the resume only touch one file. Keep it the single source of truth; do not
inline resume facts in components.

**Theme.** Class-based dark mode via `next-themes` (`ThemeProvider` in
`components/theme-provider.tsx`, wired in `app/layout.tsx`). Tailwind v4 dark variant
is declared in `app/globals.css` as:

    @custom-variant dark (&:where(.dark, .dark *));

Color tokens live as CSS variables on `:root` and `.dark`, exposed to Tailwind via
`@theme inline` — use utilities like `bg-background`, `text-foreground`,
`border-border`, `bg-card`, `text-accent` rather than hardcoded zinc/slate classes.

**Animations.** Scroll reveals go through `components/reveal.tsx`, which wraps
Framer Motion and respects `prefers-reduced-motion`. Prefer `<Reveal>` over ad-hoc
motion components for consistency.

**Client boundaries.** `app/layout.tsx` and most section components are Server
Components. Anything that uses hooks / event handlers / Framer Motion
(`components/nav.tsx`, `components/hero.tsx`, `components/reveal.tsx`,
`components/theme-toggle.tsx`, `components/theme-provider.tsx`) is marked
`"use client"`. Keep the client surface minimal.

**SEO.** Metadata, OpenGraph, Twitter card, and JSON-LD `Person` schema are all in
`app/layout.tsx`. `app/sitemap.ts` and `app/robots.ts` generate the respective files
from `SITE_URL` in `lib/data.ts` — update `SITE_URL` once the real domain is known.

**Icons.** `lucide-react@1.x` (installed) **does not include brand icons**
(Github, Linkedin, etc. — they were removed from the base package). Use
`components/brand-icons.tsx` for GitHub/LinkedIn marks; use lucide for generic icons.

## Conventions

- `@/*` path alias maps to repo root (see `tsconfig.json`)
- Public assets live in `public/` (incl. `resume.pdf` served by the "Download
  resume" CTA in the Hero)
- Tailwind v4, no `tailwind.config.ts` — all theme config is in `app/globals.css`

## Deployment — GitHub Pages

Site deploys via GitHub Actions (`.github/workflows/deploy.yml`) on every push to
`main`. The workflow runs `npm run build`, which produces a static export in `out/`
(because `next.config.ts` sets `output: "export"`), then uploads it via
`actions/upload-pages-artifact@v3` and deploys it with `actions/deploy-pages@v4`.

- **Repo:** `christosam/portfolio`
- **Live URL:** `https://christosam.github.io/portfolio/`
- **basePath:** `/portfolio` in production (see `next.config.ts`); the
  `NEXT_PUBLIC_BASE_PATH` env var is exposed so client code can prefix absolute
  paths (e.g. `profile.resumeHref` in `lib/data.ts`).
- **Raw `<a href="/...">` must use `${BASE_PATH}`** from `lib/data.ts`. Next.js
  auto-prefixes `<Link>` hrefs but does **not** touch raw `<a>` tags.
- `app/sitemap.ts` and `app/robots.ts` both declare `export const dynamic =
  "force-static"` — required when `output: "export"` is set.
- `.nojekyll` is written in the deploy workflow to stop GitHub Pages from running
  files through Jekyll (which would strip `_next/` assets).

## Next.js 16 note

This repo is on Next.js **16** (not 15). See `AGENTS.md` — always read
`node_modules/next/dist/docs/` for version-accurate APIs before writing Next-specific
code. Notable differences from 15: `params`/`searchParams` are Promises;
`PageProps<'/path'>` / `LayoutProps<'/path'>` globals are generated at build/dev.
