---
urlSlug: podup-1-6-0
locale: es
title: "podup 1.6.0"
description: "Salida en color, límite de réplicas contra DoS por compose no confiable, y --env-file con last-file-wins."
date: 2026-06-28
project: podup
banner: ../../assets/og/blog/podup-1-6-0.es.png
contributors: ["Jaro-c"]
---

Salió podup 1.6.0. Lo más destacado:

- La salida legible para humanos ahora puede colorearse: `--ansi` la fuerza, `NO_COLOR` la desactiva, y por defecto detecta si hay TTY.
- El número de réplicas ahora tiene un límite, acotando una denegación de servicio que un archivo compose no confiable podía provocar.
- `--env-file` ahora reemplaza `.env` correctamente en vez de mezclarse con él, y si se pasa varias veces gana el último archivo.
- `up --wait` ahora falla de inmediato si un servicio termina antes de quedar listo, en vez de esperar todo el timeout.
- El CLI ahora avisa cuando el nombre de un build-arg parece un secret.

Changelog completo: [v1.5.2...v1.6.0](https://github.com/Glyndor/podup/compare/v1.5.2...v1.6.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
