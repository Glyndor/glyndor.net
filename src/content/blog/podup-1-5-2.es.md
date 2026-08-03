---
urlSlug: podup-1-5-2
locale: es
title: "podup 1.5.2"
description: "podup ahora se valida contra Podman 6.0.0 en CI, y un nuevo job diario vigila si aparece una versión de Podman más reciente."
date: 2026-06-27
project: podup
---

Salió podup 1.5.2. Dos cosas para destacar:

- podup ahora se valida contra Podman 6.0.0 en CI. La matriz de soporte cubre ahora tanto Podman 5 como Podman 6.
- Un nuevo job `podman-version-watch` corre a diario en `main` y avisa cuando aparece una versión de Podman empaquetada más reciente.

El README también se rediseñó como una landing page corta y visual. El resto de esta versión es infraestructura de CI.

Changelog completo: [v1.5.1...v1.5.2](https://github.com/Glyndor/podup/compare/v1.5.1...v1.5.2).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
