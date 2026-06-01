# AGENTS.md — Baitullah Journey

## Source of truth

- `prd.env` — Product Requirements Document. Read first for all product/scope decisions.

## Status

Vite + React SPA fully initialized with all 11 sections built as components in `src/components/`. Stale "greenfield" guidance — ignore.

## Commands

```sh
npm run dev      # vite dev server
npm run build    # vite build -> dist/
npm run preview  # vite preview (preview production build)
npm run lint     # eslint .
```

No test framework or typecheck command is configured.

## Architecture

- **Entry:** `index.html` → `src/main.jsx` → `src/App.jsx` (renders all 11 sections + Navbar + Footer)
- **Data:** All text content, packages, testimonials, FAQs centralized in `src/data.js` — edit data there, not in components
- **Components:** `src/components/` — one file per section, named per PRD (`Hero`, `WhyUs`, `PaketUmroh`, etc.)
- **Routing:** Single-page, anchor-link navigation (`#hero`, `#paket-umroh`, etc.)

## Tailwind custom theme (`tailwind.config.js`)

- **Colors:** `primary` (green `#1B6B45` with 50–900 scale), `secondary` (gold `#C9963A`), `neutral-dark`/`neutral-light`
- **Fonts:** `display` (Playfair Display), `body` (Lato), `arabic` (Amiri)
- **Animations:** `float`, `fade-in-up`, `shimmer` — use Tailwind classes directly
- Custom CSS classes in `src/index.css`: `.glass`, `.pattern-dots`, `.section-divider`, `.islamic-border`, `.text-shadow`

## Branding

| Token | Value |
|-------|-------|
| Primary | `#1B6B45` |
| Secondary | `#C9963A` |
| Neutral dark | `#2C1810` |
| Neutral light | `#F8F3EC` |
| Tone | Warm, trustworthy, spiritual — respectful of Islamic values |
| Targets | WCAG 2.1 AA, mobile-first, Lighthouse ≥ 90 |

## Dependencies added

- `lucide-react` — icons (already imported in `data.js`)
- `framer-motion` — animations
- Google Fonts loaded via `<link>` in `index.html` (Playfair Display, Lato, Amiri)
