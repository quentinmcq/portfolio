# Portfolio

Personal site at [quentin-macq.dev](https://quentin-macq.dev/) — hosted on **Cloudflare Workers** (static assets + a small API worker), deployed through Workers Builds.

## Stack

- **Vue** + **TypeScript** — single-page portfolio, prerendered at build time
- **vite-plus** (`vp`) — build, dev server, lint, format, typecheck in one tool
- **Bun** runtime + package manager
- **Vue-i18n** — fr/en, one prerendered document per language (`/` and `/en/`, linked by `hreflang`)
- **Sass embedded**
- No UI framework — custom components throughout

## Quality

- `vp check` — format, lint and typecheck in one pass
- **Vitest** — locale parity (fr/en keys and shapes), case studies coverage, syntax highlighter
- **Playwright** — prerendered documents, language switch, theme, mobile menu, anchor navigation
- **axe-core** — WCAG 2.2 AA on four scenarios (fr, en, light theme, mobile menu open), zero violation
- **GitHub Actions** — the whole set runs on every pull request, including Renovate's

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
bun run test      # unit tests (vitest)
bun run test:e2e  # browser + accessibility tests (playwright, needs a build first)
bun run og        # regenerate public/og.png and og-en.png from scripts/og.svg
bun run deploy    # wrangler deploy
bunx vp hooks enable   # once per clone: pre-commit hook running `vp staged`
```

## License

MIT — see [LICENSE](./LICENSE).
