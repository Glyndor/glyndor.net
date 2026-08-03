---
urlSlug: podup-1-8-0
locale: es
title: "podup 1.8.0"
description: "Los nombres de réplicas escaladas ahora siempre llevan sufijo de índice, igual que docker/podman-compose."
date: 2026-06-29
project: podup
---

Salió podup 1.8.0. Un fix real:

- Los nombres de réplicas escaladas ahora siempre llevan sufijo de índice. Antes la primera réplica de un servicio escalado podía volver sin sufijo, inconsistente con el resto — ahora el nombrado tiene paridad con docker/podman-compose.

El resto de este release es infra de CI: un gate de regresión nightly + en cada PR para el lane de Podman, con reintento en fallos transitorios, llevado de develop a main.

Changelog completo: [v1.7.1...v1.8.0](https://github.com/Glyndor/podup/compare/v1.7.1...v1.8.0).
