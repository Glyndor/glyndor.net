---
urlSlug: podup-1-7-0
locale: es
title: "podup 1.7.0"
description: "Un barrido de correcciones de 220 hallazgos en todo el CLI, más operaciones de lifecycle en paralelo, salida de progreso y mejor renderizado de tablas."
date: 2026-06-29
project: podup
banner: ../../assets/og/podup.png
contributors: ["Jaro-c", "dependabot[bot]"]
---

Salió podup 1.7.0. Esta versión integra un barrido de correcciones amplio — 220 hallazgos verificados en toda la superficie del CLI (réplicas, restart policy, profiles, señales, watch, volúmenes, redes, update, creación de contenedores, build, formato de salida, archivos env, parseo de compose, lifecycle up/down, run/exec/cp, mensajes de error, flags del CLI, y más), cada área corregida y verificada por separado.

Algunos cambios concretos más allá del barrido:

- `stats` sumó las flags `--format`, `--all` y `--no-trunc`, y ahora trunca nombres de contenedor largos.
- Las operaciones de lifecycle independientes dentro del mismo nivel de dependencia ahora corren en paralelo en vez de secuencialmente.
- Los comandos de lifecycle (up/down y similares) ahora reportan éxito y progreso mientras trabajan, en vez de quedarse en silencio hasta terminar.
- Las tablas de `ls`, `ps` e `images` ahora ajustan y truncan columnas según su contenido en vez de usar anchos fijos.

Changelog completo: [v1.6.0...v1.7.0](https://github.com/Glyndor/podup/compare/v1.6.0...v1.7.0).
