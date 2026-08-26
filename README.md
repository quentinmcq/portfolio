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

- `worker/index.ts` — serves the static build and `/api/presence` (live visitor count)
- `worker/presence.ts` — `PresenceCounter` Durable Object using the WebSocket hibernation API
- `wrangler.jsonc` — routes, bindings (`PRESENCE`), static assets

No secrets required: contact goes through a plain `mailto:` link.

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
