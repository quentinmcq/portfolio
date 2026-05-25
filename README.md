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

## Environment

The contact form posts to `/api/contact`, handled by `worker/index.ts` (Cloudflare Worker with Static Assets). It forwards the message to [Resend](https://resend.com/) using its sandbox sender `onboarding@resend.dev`. Set these on Cloudflare (Worker project → Settings → Variables and Secrets) — server-side only, no `VITE_` prefix:

```
RESEND_API_KEY=
CONTACT_TO_EMAIL=
```

`CONTACT_TO_EMAIL` must match the email used to register the Resend account (sandbox sender restriction — fine for a single-recipient contact form). To send from a custom domain later, verify it on Resend and update `FROM_EMAIL` in `worker/index.ts`.

For local dev, run `bun run dev` for the UI (vite), or `bun run build && bunx wrangler dev` to test the worker + assets together. Put the same env vars in a gitignored `.dev.vars` file for `wrangler dev`.

## License

MIT — see [LICENSE](./LICENSE).
