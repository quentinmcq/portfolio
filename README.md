# Portfolio

Hosted on Cloudflare Pages.

## Stack

- **Vue**
- **TypeScript** + **Vite**
- **Bun** runtime + package manager
- **Vue-i18n**
- **Sass embedded**
- **Oxlint** for linting + **simple-git-hooks** for pre-commit
- No UI framework — custom components throughout

## Scripts

```sh
bun install       # install dependencies
bun run dev       # dev server (localhost:5173)
bun run build     # production build
bun run preview   # serve the built bundle locally
bun run typecheck # tsc --noEmit
bun run lint      # oxlint with auto-fix
bun run deploy    # wrangler deploy (Cloudflare Workers)
```

## License

MIT — see [LICENSE](./LICENSE).
