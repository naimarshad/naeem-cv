# naeem-cv — Personal Portfolio & CV Site

## Isolated Dev Environment
This project runs inside a Podman-managed devcontainer. Do NOT run node/pnpm
commands on the host. All commands must be run inside the container shell.

Container name: `naeem-cv-dev`
Start env:      `podman compose -f compose.dev.yaml up -d`
Enter env:      `podman exec -it naeem-cv-dev bash`
Dev server:     `pnpm dev` (inside container) → http://localhost:3000
Build check:    `pnpm build` (inside container)
Package mgr:    pnpm (not npm, not yarn)

Node modules are in a named Podman volume (isolated from host).
Source files are bind-mounted from host → editable in Zed on the host.

## Project Purpose
Single-page personal portfolio for Naeem, a Platform/Infrastructure Engineer
based in Norderstedt, Germany. Goal: marketing-oriented CV site showcasing
infrastructure and open-source engineering expertise.
Target audience: engineering leads, CTOs, recruiters in the DACH region.

## Owner Profile
- Name: Naeem (handle: majorgandalf)
- Role: Platform / Infrastructure Engineer
- Location: Norderstedt, Germany
- Core expertise: Kubernetes (k0s, KIND, k3s), Terraform, Helm, GitOps,
  Linux (CachyOS/Debian), self-hosted AI tooling, CNCF landscape
- Tools daily: kubectl, helm, terraform, podman, ArgoCD, Cloudflare Tunnel,
  Traefik, NFS/QNAP, OpenRouter LLMs
- Adjacent: Hyprland desktop, homelabbing, RetroArch emulation

## Tech Stack
- Framework: Next.js 15 (App Router, static export)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS v4
- Package manager: pnpm
- Animations: Framer Motion (`pnpm add framer-motion`)
- Icons: Lucide React (`pnpm add lucide-react`)
- Fonts: Inter + JetBrains Mono via next/font/google

## Design Direction
- Dark theme, Catppuccin Mocha palette:
    base #1e1e2e | text #cdd6f4 | accent/mauve #cba6f7 | green #a6e3a1
    surface0 #313244 | overlay0 #6c7086
- Terminal/infra aesthetic — monospace for technical terms, subtle borders
- Single scrollable page with smooth anchor-link navigation
- Sections order: Hero → About → Skills → Experience → Projects → Contact

## Site Content

### Hero
- Name: Naeem
- Title: Platform Engineer · Infrastructure as Code · CNCF
- Tagline: "I build the platforms teams ship on."
- CTA: "View Projects" (anchor #projects) | "Contact Me" (anchor #contact)

### Skills (grouped by domain)
- Orchestration: Kubernetes (k0s, KIND, k3s), Helm, ArgoCD, Kustomize
- IaC: Terraform, Ansible, Pulumi (learning)
- Runtimes: Docker, Podman, containerd
- Networking: Traefik, NGINX Ingress, Cloudflare Tunnel, MetalLB, WireGuard
- Storage: NFS, MinIO/RustFS (S3-compatible), OpenEBS
- OS/Linux: Debian, Ubuntu, CachyOS (Arch), NixOS (prior)
- AI/LLM: OpenRouter, self-hosted AI gateways, MCP servers

### Projects (stubs — Naeem will fill)
- selfhost01: k0s homelab cluster with Traefik + Cloudflare Tunnel
- OpenClaw: self-hosted AI gateway via Helm + Docker Compose
- KIND + Podman WSL2 dev environment guide

### Contact
- GitHub: (fill in)
- LinkedIn: (fill in)
- Email: (fill in)

## File Conventions
- All user-editable content → `src/data/content.ts` (single source of truth)
- Section components → `src/components/sections/*.tsx`
- Shared UI → `src/components/ui/*.tsx`
- Types → `src/types/index.ts`

## Key Constraints
- All text lives in `src/data/content.ts` — never hardcode strings in JSX
- Tailwind classes only — no inline styles, no CSS modules
- Static export only: `output: 'export'` in next.config.ts (no API routes)
- Mobile-responsive (Tailwind sm/md/lg prefixes)
- Minimize component logic — Naeem has no programming background

## Deployment Target
pnpm build → `out/` static dir → nginx:alpine container →
k0s on selfhost01 (192.168.1.4) → Cloudflare Tunnel → cv.linuxtechinfo.com

Dockerfile for production (create when build is stable):
  FROM nginx:alpine
  COPY out/ /usr/share/nginx/html/

## Claude Code Session Commands
Always run inside the container (`podman exec -it naeem-cv-dev bash`):
  pnpm dev        → dev server
  pnpm build      → production build (verify zero TS errors)
  pnpm lint       → ESLint check

When asked to add a section:
1. Add content to src/data/content.ts first
2. Create src/components/sections/SectionName.tsx
3. Import and add to src/app/page.tsx
4. Run pnpm build to confirm no errors
