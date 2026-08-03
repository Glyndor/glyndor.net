---
urlSlug: podup-3-0-0
locale: es
title: "podup 3.0.0"
description: "Cambio incompatible: los enums de opciones de compose ahora son no-exhaustivos. También nuevo: exec y run interactivos en Windows."
date: 2026-07-23
project: podup
banner: ../../assets/og/podup.png
contributors: ["Jaro-c"]
---

Salió podup 3.0.0. Es un bump de versión mayor con un cambio incompatible:

- **Incompatible:** se agregaron opciones long-form de hardening de mounts, y como parte de eso los bloques de opciones de compose ahora son no-exhaustivos. Si tu código hace match exhaustivo sobre esos enums, dejará de compilar — agrega un brazo wildcard.
- `exec` y `run` interactivos ahora funcionan en Windows. Antes era una función exclusiva de Linux/macOS.

Changelog completo: [v2.1.0...v3.0.0](https://github.com/Glyndor/podup/compare/v2.1.0...v3.0.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
