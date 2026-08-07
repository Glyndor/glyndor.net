---
urlSlug: podup-3-4-1
locale: es
title: "podup 3.4.1"
description: "top ya no aborta con un contenedor detenido, y el teardown de secrets es más rápido."
date: 2026-08-01
project: podup
banner: ../../assets/og/blog/podup-3-4-1.es.png
contributors: ["Jaro-c"]
---

Salió podup 3.4.1. Dos cosas para destacar:

- `top` abortaba por completo si un contenedor del stack ya estaba detenido. Ahora lo salta y sigue.
- El teardown de secrets es más rápido: la propiedad ahora se resuelve con una sola llamada en vez de una por secret, y dejamos de intentar borrar secrets que nunca se crearon.

Changelog completo: [v3.4.0...v3.4.1](https://github.com/Glyndor/podup/compare/v3.4.0...v3.4.1).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
