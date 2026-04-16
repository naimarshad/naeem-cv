# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Isolated Dev Environment

This project runs inside a Podman-managed devcontainer. **Do NOT run node/pnpm commands on the host.**

```
Container name: naeem-cv-dev
Start env:      podman compose -f .devcontainer/compose.dev.yaml up -d
Enter env:      podman exec -it naeem-cv-dev bash
Dev server:     pnpm dev   → http://localhost:3000
Build check:    pnpm build
Lint:           pnpm lint
Package mgr:    pnpm (not npm/yarn)
```

Node modules live in a named Podman volume. Source files are bind-mounted from the host.

## Architecture

Single-page Next.js 15 App Router site with static export. The data flow is strictly top-down and read-only:

```
src/data/content.ts          ← single source of truth for all site text
src/types/index.ts           ← TypeScript interfaces for content shape
src/components/sections/*.tsx ← one component per page section
src/components/ui/Section.tsx ← shared wrapper (padding + max-w-4xl centering)
src/app/page.tsx             ← assembles sections in order
src/app/layout.tsx           ← fonts (Inter + JetBrains Mono), metadata, globals.css
```

**Component pattern:** every section imports `content` from `@/data/content` directly (no props), wraps its root in `<Section id="sectionname">`, and uses only Tailwind classes. No component has internal state.

**Path alias:** `@/` maps to `src/`.

## Key Constraints

- All text lives in `src/data/content.ts` — never hardcode strings in JSX
- Tailwind classes only — no inline styles, no CSS modules
- `output: 'export'` in next.config.ts — no API routes, no server components with data fetching
- Mobile-responsive via Tailwind `sm`/`md`/`lg` prefixes

## Design System

Catppuccin Mocha palette (defined as CSS variables in `globals.css`):

| Token        | Hex       | Usage               |
|--------------|-----------|---------------------|
| `base`       | `#1e1e2e` | page background     |
| `text`       | `#cdd6f4` | body text           |
| `accent`     | `#cba6f7` | mauve, highlights   |
| `green`      | `#a6e3a1` | success/badges      |
| `surface0`   | `#313244` | card backgrounds    |
| `overlay0`   | `#6c7086` | muted/secondary text|

Terminal/infra aesthetic — use `font-mono` for technical terms and skill tags.

## Adding a New Section

1. Add typed content to `src/data/content.ts` and its interface to `src/types/index.ts`
2. Create `src/components/sections/SectionName.tsx` following the existing pattern
3. Import and mount in `src/app/page.tsx` at the correct scroll order
4. Run `pnpm build` inside the container to confirm zero TS errors

