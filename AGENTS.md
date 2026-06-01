# AGENTS.md — Baitullah Journey

## Source of truth

- `prd.env` — Product Requirements Document (the only file in the repo). Read it first for all product and scope decisions.

## Planned stack (from PRD)

| Layer | Choice |
|-------|--------|
| Framework | React (functional components + hooks) |
| Styling | Tailwind CSS / CSS Modules |
| Icons | Lucide React / React Icons |
| Animation | Framer Motion / CSS Transitions |
| Deployment | Vercel or Netlify (static SPA) |
| Fonts | Google Fonts (Playfair Display, Lato/Source Sans Pro, Amiri) |

## Status

Greenfield — no code, no config, no dependencies have been created yet. The project has not been initialized (`npm init` / `create-react-app` / `vite` etc. not run).

## Architecture (planned)

Single Page Application with 11 named sections (Hero, Why Us, Paket Umroh, Paket Haji, Persiapan, Destinasi, Testimoni, Galeri, Blog, Kontak, Footer). See `prd.env:43-104` for detailed section specs.

## Branding

- Primary: `#1B6B45` (green), Secondary: `#C9963A` (gold)
- Tone: warm, trustworthy, spiritual — respectful of Islamic values
- WCAG 2.1 AA, mobile-first, Lighthouse ≥ 90
