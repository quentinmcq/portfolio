# Portfolio

Personal site at [quentin-macq.dev](https://quentin-macq.dev/) — hosted on **Cloudflare Workers**, deployed through Workers Builds.

## Stack

- **Vue** + **TypeScript** — single-page portfolio, prerendered at build time
- **vite-plus** (`vp`) — build, dev server, lint, format, typecheck in one tool
- **Bun** runtime + package manager
- **Vue-i18n** — fr/en, one prerendered document per language (`/` and `/en/`, linked by `hreflang`), plus one page per project (`/projets/<slug>/`, `/en/projects/<slug>/`)
- **`/llms.txt`** — Markdown digest of the site, written at build time from the English messages
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
- `worker/presence.ts` — `PresenceCounter` Durable Object using the WebSocket hibernation API: same-origin handshakes only, 100 sockets at most, count broadcasts coalesced over one second
- `wrangler.jsonc` — routes, bindings (`PRESENCE`), static assets

No secrets required: contact goes through a plain `mailto:` link.

## Fonts

`public/fonts/bricolage-grotesque-v9-fr-en.woff2` is the Google Fonts latin file cut with
[fonttools](https://github.com/fonttools/fonttools) to the axes the site uses (wght 200–700,
wdth 80–100, opsz untouched since browsers follow the font size) and to French and English glyphs:

```sh
uvx --from fonttools fonttools varLib.instancer latin.woff2 wght=200:700 wdth=80:100 -o cut.ttf
uvx --with brotli --from fonttools pyftsubset cut.ttf --flavor=woff2 --layout-features='*' \
  --notdef-outline --name-IDs='*' --unicodes='U+0020-007E,U+00A0,U+2002,U+2009,U+200B,U+2122' \
  --text='àâäçéèêëîïôöùûüÿæœÀÂÄÇÉÈÊËÎÏÔÖÙÛÜŸÆŒ«»“”‘’—–…·•°€→←↑↓≈×' \
  --output-file=bricolage-grotesque-v9-fr-en.woff2
```

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
bun run cases     # cut lighter srcset variants of the case screenshots (src/assets/cases)
bun run stats     # live site audience per day, from Cloudflare analytics (--days 7, needs wrangler login)
bun run deploy    # wrangler deploy
bunx vp hooks enable   # once per clone: pre-commit hook running `vp staged`
```

## License

MIT — see [LICENSE](./LICENSE).
