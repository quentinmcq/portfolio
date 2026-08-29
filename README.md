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
bun install
bun run dev       # dev server on localhost:5173
bun run build     # production build + prerender (dist/)
bun run preview   # serve dist/ locally
bun run check     # format check + lint + typecheck (vp check)
bun run fmt       # same, with auto-fix
bun run lint      # lint only, with auto-fix
bun run deploy    # wrangler deploy
bunx vp hooks enable   # once per clone: pre-commit hook running `vp staged`
```

## License

MIT — see [LICENSE](./LICENSE).
