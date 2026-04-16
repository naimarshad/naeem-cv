# naeem-cv

Personal portfolio and CV site for Naeem Arshad, a Senior DevOps / Platform Engineer based in Norderstedt, Germany.

Built as a single-page static site with a terminal/infrastructure aesthetic. Deployed on a self-hosted k0s cluster behind Cloudflare Tunnel at [cv.linuxtechinfo.com](https://cv.linuxtechinfo.com).

**Stack:** Next.js 15 (App Router, static export) · TypeScript · Tailwind CSS v4 · Framer Motion · Catppuccin Mocha theme

---

## Development

The dev environment runs inside a Podman-managed container. All `pnpm` commands must be run inside the container.

```bash
# Start the devcontainer
podman compose -f .devcontainer/compose.dev.yaml up -d

# Enter the container
podman exec -it naeem-cv-dev bash

# Inside the container
pnpm dev        # dev server → http://localhost:3000
pnpm build      # production build (static export to out/)
pnpm lint       # ESLint
```

Node modules live in a named Podman volume. Source files are bind-mounted from the host, so you can edit in any host editor (e.g. Zed) with live reload.

## Editing Content

All site text lives in a single file — no JSX edits needed:

```
src/data/content.ts
```

Edit the exported `content` object to update any section: hero, about, skills, experience, projects, or contact.

## Production Build

Multi-stage Containerfile: `node:22-alpine` builds the static export, `nginx:alpine` serves it.

```bash
# Build the image
podman build -t naeem-cv:latest -f Containerfile .

# Test locally
podman run --rm -p 8080:80 naeem-cv:latest
# → http://localhost:8080

# Tag by git SHA for deployment
podman build -t naeem-cv:$(git rev-parse --short HEAD) -f Containerfile .
```

