# Portfolio

Personal site at [quentin-macq.dev](https://quentin-macq.dev/) — hosted on **Cloudflare Workers** (static assets + a small API worker), deployed through Workers Builds.

## Stack

- **Vue** + **TypeScript** — single-page portfolio, prerendered at build time
- **vite-plus** (`vp`) — build, dev server, lint, format, typecheck in one tool
- **Bun** runtime + package manager
- **Vue-i18n** — fr/en
- **Sass embedded**
- No UI framework — custom components throughout

## Cloudflare

- `worker/index.ts` — serves the static build, `/api/contact` (Turnstile-verified email relay via Email Workers) and `/api/presence` (live visitor count)
- `worker/presence.ts` — `PresenceCounter` Durable Object using the WebSocket hibernation API
- `wrangler.jsonc` — routes, bindings (`SEND_EMAIL`, `PRESENCE`), static assets

Secrets/vars expected in production: `TURNSTILE_SECRET`, `CONTACT_TO_EMAIL`, `VITE_TURNSTILE_SITE_KEY` (build-time). Without the latter, the widget falls back to Cloudflare's always-passing test key (dev only — the server still verifies with the real secret).

## Scripts

```sh
bun install       # install dependencies
bun run dev       # dev server (localhost:5173)
bun run build     # production build + prerender
bun run preview   # serve the built bundle locally
bun run check     # format check + lint + typecheck
bun run lint      # lint with auto-fix
bun run deploy    # wrangler deploy (Cloudflare Workers)
```

## License

MIT — see [LICENSE](./LICENSE).
