---
urlSlug: podup-3-0-2
locale: es
title: "podup 3.0.2"
description: "stats ahora sale con código distinto de cero si una muestra en vivo queda truncada, y cp/watch sincronizan bien hacia un contenedor en Podman 6."
date: 2026-07-25
project: podup
banner: ../../assets/og/blog/podup-3-0-2.es.png
contributors: ["Jaro-c"]
---

Salió podup 3.0.2. Dos arreglos para destacar:

- `stats` ahora sale con código distinto de cero cuando una muestra en vivo queda truncada, en vez de reportar éxito con datos incompletos.
- `cp` y `watch` al sincronizar archivos hacia un contenedor ahora funcionan correctamente en Podman 6.

Changelog completo: [v3.0.1...v3.0.2](https://github.com/Glyndor/podup/compare/v3.0.1...v3.0.2).
