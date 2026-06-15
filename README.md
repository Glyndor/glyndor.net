# glyndor.net

> The marketing and projects site for [Glyndor](https://glyndor.net) — secure, self-hosted, open-source infrastructure.

[![ci](https://github.com/Glyndor/glyndor.net/actions/workflows/ci.yml/badge.svg)](https://github.com/Glyndor/glyndor.net/actions/workflows/ci.yml)

A static [Astro](https://astro.build) site. English and Spanish, React islands for interactivity, Tailwind CSS v4 with shadcn/ui, and View Transitions for navigation. No runtime server — it builds to plain HTML, CSS and JS.

## ✨ Highlights

- ⚡ **Static-first** — Astro builds to static assets; React only ships where it is needed.
- 🌍 **Bilingual** — English (default) and Spanish, routed via Astro's native i18n. Every user-facing string goes through the i18n layer.
- 🎨 **Tailwind v4 + shadcn/ui** — utility CSS and components you own, in-repo.
- 🔒 **No third-party services** — GitHub-native badges, self-hosted assets, localhost-only preview.

## 🚀 Quick start

Requires [Bun](https://bun.sh).

```sh
bun install
bun run dev      # http://localhost:4321
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
/                    Home — what Glyndor is, and its projects
/projects            All projects
/projects/panel      Glyndor panel — secure self-hosted hosting panel
/projects/podup      podup — docker-compose for rootless Podman
/projects/mail       Glyndor mail — headless self-hosted mail server
```

Spanish lives under the `/es` prefix (`/es`, `/es/projects`, `/es/projects/panel`, …).

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

## 📦 Adding shadcn/ui components

```sh
bunx --bun shadcn@latest add button
```

Components land in `src/components/ui/` and are yours to edit.

## 📄 License

[Apache 2.0](./LICENSE).
