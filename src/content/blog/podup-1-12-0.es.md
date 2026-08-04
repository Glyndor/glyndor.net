---
urlSlug: podup-1-12-0
locale: es
title: "podup 1.12.0"
description: "Corrige permisos de quadlet y un bug de chmod en cp, hace que cinco comandos fallen correctamente en vez de mentir, y valida Podman 6.0.1 como motor base."
date: 2026-07-20
project: podup
banner: ../../assets/og/blog/podup-1-12-0.es.png
contributors: ["Jaro-c"]
---

Salió podup 1.12.0. Algunas cosas para destacar:

- La propiedad de quadlet y los permisos de unit estaban mal en algunos casos; corregido.
- `cp` tenía un bug de chmod que podía dejar el destino en mal estado; corregido.
- Cinco comandos reportaban éxito incluso cuando la operación subyacente había fallado en realidad. Ahora fallan correctamente.
- Podman 6.0.1 es ahora la versión de motor base validada.

Changelog completo: [v1.11.1...v1.12.0](https://github.com/Glyndor/podup/compare/v1.11.1...v1.12.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
