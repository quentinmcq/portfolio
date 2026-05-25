# Quentin Macq — Portfolio

Portfolio for Quentin Macq, full-stack developer. Hosted on Cloudflare Pages.

## Stack

- **Vue 3** (Composition API, `defineModel`, vapor-interop)
- **TypeScript** + **Vite**
- **Bun** runtime + package manager
- **vue-i18n** (FR / EN)
- **Sass embedded** for styles, CSS variables for tokens
- **oxlint** for linting, **simple-git-hooks** for pre-commit
- No UI framework — custom components throughout

## Scripts

```sh
bun install       # install dependencies
bun run dev       # dev server (localhost:5173)
bun run build     # production build
bun run preview   # serve the built bundle locally
bun run typecheck # tsc --noEmit
bun run lint      # oxlint with auto-fix
```

## Project structure

```
src/
├─ components/    reusable UI (FeaturedCard, FormField, Navbar…)
├─ composables/   breakpoints, theme, reveal-on-scroll, form rules…
├─ data/          i18n-aware data (skills, experiences, projects…)
├─ locales/       fr.ts + en.ts
├─ sections/      landing sections (Skill, Experience, Project…)
├─ styles/        design tokens, breakpoints, global styles
└─ types/         shared interfaces
```

## Email

The contact form posts to `/api/contact`, handled by `worker/index.ts` (Cloudflare Worker with Static Assets). It sends the message via Cloudflare's `send_email` binding — no external email service.

Pre-requisites on Cloudflare:
- **Email Routing** enabled on `quentin-macq.dev` (auto-adds MX + SPF records)
- Destination `quentin.macq@outlook.fr` **verified** in Email Routing → Destination Addresses

The `send_email` binding in `wrangler.jsonc` pins the destination, so no runtime env var is needed.

For local dev, run `bun run dev` for the UI (vite), or `bun run build && bunx wrangler dev` to test the worker + assets together.

## License

MIT — see [LICENSE](./LICENSE).
