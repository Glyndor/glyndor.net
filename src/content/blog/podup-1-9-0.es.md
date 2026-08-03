---
urlSlug: podup-1-9-0
locale: es
title: "podup 1.9.0"
description: "podup autostart gana modo servicio, compose ahora avisa de claves desconocidas anidadas, y se rotó la clave de firma del release."
date: 2026-07-15
project: podup
---

Salió podup 1.9.0. Tres cosas para destacar:

- `podup autostart` ahora soporta modo servicio, para correrlo como servicio gestionado en segundo plano en vez de como comando puntual.
- El parsing de compose ahora avisa de claves desconocidas dentro de bloques de opciones anidados, en vez de ignorarlas en silencio.
- Se rotó la clave de firma Ed25519 del release. CI verifica formalmente que la nueva clave coincide con la que los consumidores embeben, antes de publicar nada.

Changelog completo: [v1.8.0...v1.9.0](https://github.com/Glyndor/podup/compare/v1.8.0...v1.9.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
