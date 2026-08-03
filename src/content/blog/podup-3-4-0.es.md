---
urlSlug: podup-3-4-0
locale: es
title: "podup 3.4.0"
description: "podup build ahora escribe a stderr en vez de stdout, y up/down/pull/build ahora muestran un tablero en vivo en la terminal."
date: 2026-07-30
project: podup
banner: ../../assets/og/podup.png
contributors: ["Jaro-c"]
---

Salió podup 3.4.0. Casi todo lo que trae es salida de línea de comandos — la API de la librería no cambió, y `cargo semver-checks` pasó en cada pull request de este release.

**Cambios incompatibles:**

- `podup build` ahora escribe a stderr, no a stdout. `podup build > build.log` ya no captura nada — redirigí stderr en su lugar (`2> build.log`, o `> build.log 2>&1`). stdout estaba documentado como un pipe limpio, y `build` era el único comando que lo contradecía.
- `podup wait` imprime una línea por contenedor — su nombre y código de salida, en columnas alineadas — en vez de un código de salida suelto por servicio. El nuevo `--format json` es la forma estable para parsear.
- `podup --version` imprime `podup version v3.4.0`, igual que `podup version`, donde antes imprimía `podup 3.4.0`. `podup version --short` sigue imprimiendo el número solo.
- `stats`, `events` y `top` cambiaron el layout de sus tablas. El header de `stats` ahora coincide con sus columnas, `events` ganó header y anchos de columna fijos, y `top` pasó a usar la tabla compartida. Cualquier cosa que parsee esto por offset de byte necesita actualizarse — `--format json` no se ve afectado en ninguno de los tres.

**Lo nuevo:**

`up`, `down`, `pull` y `build` muestran un tablero en vivo en la terminal — todo el conjunto de recursos de entrada, repintado a medida que avanza el trabajo, con las filas terminadas subiendo y quedando fijas. En un pipe, un archivo, CI, con `NO_COLOR`, o con `--ansi never`, los mismos eventos salen como líneas planas que solo se agregan, sin secuencias de escape, y ahora incluyen las transiciones intermedias (`Creating` y después `Created`) que ningún renderer mostraba antes. `stats` repinta en el lugar en vez de hacer scroll.

Los comandos que antes terminaban su trabajo y no decían nada ahora lo reportan: `push` marcaba cero bytes escritos mientras subía una imagen de verdad, seis comandos de ciclo de vida salían con código 0 en silencio sobre un proyecto que nunca se había creado, y `up` creaba redes y volúmenes sin nombrarlos. `down` también dejó de reportar eliminaciones de recursos que nunca existieron — en un proyecto que nunca se había creado, anunciaba destruir tres, incluyendo un volumen de datos.

Changelog completo: [v3.3.0...v3.4.0](https://github.com/Glyndor/podup/compare/v3.3.0...v3.4.0).
