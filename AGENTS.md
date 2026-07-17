# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project overview

**Shop With Me** is the web frontend for a shared shopping-list service (Russian-language
landing page: "Простой и удобный сервис для совместных покупок"). It is a **statically
prerendered (SSG) React site** built with [Vike](https://vike.dev) and served by nginx as
plain static files. There is **no backend/API server in this repo** — the nginx container
serves only `app/dist/client`.

The app was scaffolded with `npm create vike@latest --- --react`, and several scaffold demo
pages (todo, star-wars, test) still exist alongside the real landing page.

## Tech stack

- **Vike 0.4.260** + **vike-react 0.6.25** — meta-framework (routing, SSR/SSG). SSR is on by
  default; `prerender: true` in `app/pages/+config.ts` makes the build output static HTML.
- **React 19** with TypeScript (strict mode), ESM (`"type": "module"`).
- **Vite 8** with `@vitejs/plugin-react` and **Tailwind CSS v4** (`@tailwindcss/vite` plugin,
  imported once via `@import "tailwindcss"` in `app/pages/Layout.css`).
- **Node 22** — both the local toolchain and the Docker build image (`node:22-alpine`).
- **nginx** (Alpine image) for serving the static build in production.

## Repository layout

```
├── app/                      # The entire frontend application (own package.json)
│   ├── pages/                # Vike filesystem routing; "+files" are the Vike interface
│   │   ├── +config.ts        # Global config: vike-react, title, prerender: true
│   │   ├── +Layout.tsx       # Root layout (sidebar nav; landing page "/" gets no sidebar)
│   │   ├── +Head.tsx         # <head> tags (favicon)
│   │   ├── Layout.css        # Global CSS; the single Tailwind entry point
│   │   ├── index/            # Landing page "/" (Russian copy); clientRouting disabled
│   │   ├── todo/             # Scaffold demo: todo list (+Page, +data, TodoList)
│   │   ├── star-wars/        # Scaffold demo: data fetching; index + @id/ param route
│   │   ├── test/             # Tailwind sandbox page
│   │   └── _error/+Page.tsx  # 404 / error page
│   ├── components/Link.tsx   # Shared nav link with active-state highlighting
│   ├── assets/               # Static assets (logo.svg)
│   ├── dist/                 # Build output; dist/client is what nginx serves
│   ├── vite.config.ts        # Plugins: vike(), react(), tailwindcss()
│   └── tsconfig.json         # strict TS, noEmit, bundler moduleResolution
├── nginx/nginx.conf          # Static file server on :80, denies dotfiles
├── docker-compose.yml        # `build_front` (node build) + `nginx` (serve) services
├── deploy.sh                 # Server-side deploy script (run over SSH by CI)
└── .github/workflows/deploy.yml  # Push-to-main deploy via SSH
```

Note: the **root-level `dist/` and `node_modules/` are stray leftovers** — there is no root
`package.json`. All application work happens inside `app/`.

## Build and development commands

All commands run from `app/`:

```sh
cd app
npm install
npm run dev        # vike dev — dev server with HMR (default port 3000)
npm run build      # vike build — prerenders static site into app/dist/
npm run preview    # build + serve the production output locally
npx tsc --noEmit   # typecheck (see "Known quirks" for 1 pre-existing error)
```

Production build via Docker (the canonical CI/deploy path, run from repo root):

```sh
docker compose up build_front   # npm install && npm run build inside node:22-alpine
docker compose up -d nginx      # serve app/dist/client
```

Gotcha: the Docker build runs as root and leaves **root-owned files in `app/dist/`**. A
subsequent local `npm run build` then fails with `EACCES: permission denied` while cleaning
`dist/`. Fix: `sudo rm -rf app/dist` (or always build via Docker).

## Code conventions

- **Vike "+files" are the interface**: `+Page.tsx` (page component), `+Layout.tsx`,
  `+Head.tsx`, `+config.ts` (per-page settings), `+data.ts` (server-side data fetching).
  Routing is filesystem-based; `@id` denotes a route parameter
  (`pages/star-wars/@id/` → `/star-wars/:id`).
- **Data fetching pattern**: `+data.ts` exports `async function data(...)` and
  `export type Data = Awaited<ReturnType<typeof data>>`; components read it with
  `useData<Data>()` from `vike-react/useData`. Per-page `<title>` is set via
  `useConfig()` inside `+data.ts`. Data returned from `data()` is serialized to the client,
  so it is deliberately minimized (see the `minimize()` helpers in `pages/star-wars/`).
- **Prerendering is global** (`prerender: true`); pages with dynamic data opt out with
  `prerender: false` (example: `pages/star-wars/@id/+config.js`).
- **Local TS imports use `.js` extensions** (ESM style), e.g. `import { TodoList } from "./TodoList.js"`.
- **Styling**: Tailwind v4 utility classes directly in JSX; dark theme
  (`bg-gray-950`/`text-white`). Shared CSS lives only in `pages/Layout.css`.
- TypeScript is strict; JSX is `react-jsx`. Match the existing scaffold style (double
  quotes, semicolons, function components).
- **Languages**: code and comments are in English; user-facing UI copy on the landing page
  is in Russian. Keep it that way.
- No linter or formatter is configured — there is nothing to run beyond `tsc`.

## Testing

There is **no test framework, no test script, and no tests** in this project. Verification
currently means: `npx tsc --noEmit` for types and `npm run build` for a successful
prerender. If you add tests, you are introducing the first setup — keep it minimal.

## Deployment

- Push to `main` (or manual dispatch) triggers `.github/workflows/deploy.yml`: it SSHes to
  the production server (`shop-with-me.ru`, user `lasertower`) using the
  `SSH_PRIVATE_KEY` GitHub secret and runs `bash deploy.sh` in `~/shop-with-me`.
- `deploy.sh` does: `git fetch && git reset --hard origin/main`, then
  `docker compose up build_front` (rebuild) and `docker compose up -d nginx` (serve).
- The compose file requires an **external Docker network named `my-shared-net`**
  (shared with other projects on that server); it must exist before `docker compose up`.
- Never commit build output: `dist/` is gitignored.

## Security considerations

- No secrets belong in this repo; `.env*` files are gitignored. The only credential is the
  deploy SSH key, stored as a GitHub Actions secret.
- nginx serves only static files and denies access to dotfiles (`location ~ /\.`).
- The star-wars demo fetches a public API (`brillout.github.io`) at build/request time —
  fine for a demo, but don't treat it as production infrastructure.

## Known quirks (pre-existing, verify before "fixing")

- `app/pages/index/+config.ts` sets `clientHooks: false` — this makes the landing page
  **HTML-only**: Vike skips the client runtime, hydration, and pageContext JSON scripts, so
  the prerendered `index.html` contains no `<script>` tags at all. `clientRouting: false`
  there is secondary (it only affects navigation mode, not whether JS is shipped). Don't
  remove `clientHooks: false` unless the landing page gains client-side interactivity.
- `nginx/nginx.conf` has a typo in `server_name`: `shop-wiht-me.ru` (should be
  `shop-with-me.ru`).
- `deploy.sh:Zone.Identifier` files (repo root and `.github/workflows/`) are Windows
  download artifacts, safe to ignore/delete.
- The todo/star-wars/test pages are unmodified scaffold demos, not product features.
