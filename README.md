# glyndor.net

> The marketing and projects site for [Glyndor](https://glyndor.net) — secure, self-hosted, open-source infrastructure.

[![ci](https://github.com/Glyndor/glyndor.net/actions/workflows/ci.yml/badge.svg)](https://github.com/Glyndor/glyndor.net/actions/workflows/ci.yml)

A static [Astro](https://astro.build) site. English and Spanish, a full TTY/terminal design in Tailwind CSS v4, self-hosted JetBrains Mono, and zero client-side JavaScript islands — no React, no component framework. No runtime server — it builds to plain HTML, CSS and JS.

## ✨ Highlights

- ⚡ **Static-first, zero islands** — Astro builds to static assets; there is no interactivity that needs a client-side framework.
- 🌍 **Bilingual** — English (default) and Spanish, routed via Astro's native i18n. Every user-facing string goes through the i18n layer.
- 🎨 **Tailwind v4, hand-built** — a raw terminal aesthetic (scanlines, ASCII banner, inline SVG icons), no component library.
- 🔒 **No third-party services** — GitHub-native badges, self-hosted assets, localhost-only preview, zero analytics.

## 🚀 Quick start

Requires [Bun](https://bun.sh).

```sh
bun install
bun run dev      # http://localhost:15694
```

| Command            | Action                                      |
| ------------------ | ------------------------------------------- |
| `bun run dev`      | Start the dev server                        |
| `bun run build`    | Build the static site to `dist/`            |
| `bun run preview`  | Preview the production build locally         |
| `bun run check`    | Type-check Astro and TypeScript             |
| `bun run lint`     | Lint and format-check with Biome            |
| `bun run format`   | Format the codebase with Biome              |

## 🗺️ Routes

```
/                       Home — what Glyndor is, and its projects
/projects               All projects
/projects/podup         podup — docker-compose for rootless Podman
/projects/helmly        helmly — secure self-hosted hosting panel
/projects/helmly-agent  helmly-agent — the agent behind every managed server
/projects/epistle       epistle — headless self-hosted mail server
/projects/epistle-panel epistle-panel — admin UI for epistle
/projects/authcore      authcore — drop-in authentication for Go
/projects/unitpm        unitpm — systemd-native process manager
/projects/klyradb       klyradb — desktop database manager
/projects/specio        specio — website tech-stack detector (Chrome)
/projects/viden         viden — page video finder and downloader (Chrome)
/support                Support Glyndor
```

Spanish lives under the `/es` prefix (`/es`, `/es/projects`, `/es/projects/podup`, …).

## 🏗️ Structure

```
src/
├─ pages/            Thin route files (one per route × locale)
├─ components/
│  ├─ pages/         Page-level content components (home, project, …)
│  ├─ site-header/   Shared chrome
│  └─ site-footer/
├─ layouts/base/     HTML shell, head metadata, View Transitions
├─ lib/
│  ├─ i18n/          Locales, dictionaries (en is the source of truth)
│  └─ utils/         cn() and other helpers
└─ styles/           Tailwind entry + theme
```

Adding a string: add the key to `src/lib/i18n/en` (the source of truth), then mirror it in `src/lib/i18n/es`. The `es` dictionary is typed against `en`, so a missing key is a type error.

## 🐳 Local preview under Podman

```sh
bun run build
podman compose up        # http://127.0.0.1:8080
```

Serves the built `dist/` with Caddy, bound to localhost only.

## 📄 License

[MIT](./LICENSE).
