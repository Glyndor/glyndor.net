---
urlSlug: podup-1-1-1
locale: es
title: "podup 1.1.1"
description: "Los healthchecks ahora se disparan bajo demanda, así que up --wait funciona correctamente sin systemd presente."
date: 2026-06-20
project: podup
banner: ../../assets/og/blog/podup-1-1-1.es.png
contributors: ["Jaro-c"]
---

Salió podup 1.1.1. Un fix para destacar:

- Los healthchecks ahora se disparan bajo demanda en vez de depender de que systemd esté presente. `up --wait` ahora funciona correctamente incluso en hosts sin systemd.

Changelog completo: [v1.1.0...v1.1.1](https://github.com/Glyndor/podup/compare/v1.1.0...v1.1.1).
