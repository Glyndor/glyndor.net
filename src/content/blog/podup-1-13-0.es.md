---
urlSlug: podup-1-13-0
locale: es
title: "podup 1.13.0"
description: "Quadlet ahora descubre y fusiona los archivos de override de compose, más fixes para el flag no-TTY, .containerignore, pulls fallidos silenciosos y logs colgado al cerrar el pipe."
date: 2026-07-20
project: podup
banner: ../../assets/og/podup.png
contributors: ["Jaro-c"]
---

Salió podup 1.13.0. Algunas cosas para destacar:

- Quadlet ahora descubre y fusiona el archivo de override de compose automáticamente, y fusiona `networks`, `sysctls`, `dns` y `env_file` en vez de reemplazarlos.
- `run` y `exec` aceptan ambas grafías del flag no-TTY.
- `.containerignore` ahora se lee por separado, en vez de unirse con `.dockerignore`.
- Un pull que libpod rechazaba antes salía con código 0 en silencio; ahora se reporta como fallo.
- `logs` se quedaba colgado cuando el lector cerraba el pipe; ahora termina correctamente.

Changelog completo: [v1.12.0...v1.13.0](https://github.com/Glyndor/podup/compare/v1.12.0...v1.13.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
