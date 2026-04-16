<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Verified Commands (run inside Podman container)

```bash
podman exec -it naeem-cv-dev bash    # enter dev shell
pnpm dev                          # dev server → http://localhost:3000
pnpm build                        # static export → out/
pnpm lint                         # ESLint check
```

## Key Architecture Facts

- Next.js 16.2 + React 19 (latest stable)
- Static export only: `output: "export"` in next.config.ts (no API routes)
- Tailwind CSS v4 (no tailwind.config.js — config is in globals.css via `@theme`)
- TypeScript strict mode enabled
- No src/components, src/data, or src/types yet — these are planned conventions per CLAUDE.md but not yet created

## Common Pitfalls to Avoid

- DO NOT run pnpm/npm on the host — all commands inside the Podman container
- DO NOT add new packages without running `pnpm install` inside the container first
- DO NOT create API routes — static export doesn't support them
- DO NOT use CSS modules or inline styles — Tailwind only (per CLAUDE.md)

## Reference

- Full context: see CLAUDE.md
- Dev container: .devcontainer/compose.dev.yaml