---
urlSlug: podup-3-3-0
locale: es
title: "podup 3.3.0"
description: "up ya no descarga una imagen que el host ya tiene, y attach/run/events detectan un stream muerto por fuera de banda igual que logs y stats."
date: 2026-07-29
project: podup
banner: ../../assets/og/podup.png
contributors: ["Jaro-c"]
---

Salió podup 3.3.0. Estas son las correcciones que vale la pena destacar:

- `up` ya no vuelve a bajar una imagen que el host ya tiene: ese pull ocurría una vez por servicio aunque no hubiera cambiado nada.
- `attach` y `run` ahora detectan un stream muerto por fuera de banda, igual que ya hacían `logs` y `stats`, en vez de confiar en lo que reporta el propio stream.
- `events` recibe la misma corrección para un cierre inesperado del feed — el último de cinco comandos en dejar de confiar en la señal del propio stream.

Changelog completo: [v3.2.1...v3.3.0](https://github.com/Glyndor/podup/compare/v3.2.1...v3.3.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
