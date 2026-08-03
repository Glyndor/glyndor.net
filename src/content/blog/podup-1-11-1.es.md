---
urlSlug: podup-1-11-1
locale: es
title: "podup 1.11.1"
description: "Un solo poller de healthcheck ahora cubre a todos los dependientes de un contenedor, el tar del build-context se transmite en vez de bufferearse, y los releases traen un SBOM por target."
date: 2026-07-19
project: podup
---

Salió podup 1.11.1. Tres cosas para destacar:

- El polling de healthcheck ahora se comparte: un contenedor con varios dependientes antes generaba un poller por cada uno. Ahora hay un solo poller para el contenedor, compartido entre todos.
- `up` ya no buferea en memoria el tar del build-context antes de enviarlo. Ahora se transmite.
- Cada artefacto de release ahora incluye un SBOM por target.

Changelog completo: [v1.11.0...v1.11.1](https://github.com/Glyndor/podup/compare/v1.11.0...v1.11.1).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
