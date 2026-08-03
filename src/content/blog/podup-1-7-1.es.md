---
urlSlug: podup-1-7-1
locale: es
title: "podup 1.7.1"
description: "port valida sus argumentos de protocolo y puerto privado, exec resuelve réplicas escaladas, y el modo tmpfs de quadlet se renderiza bien."
date: 2026-06-29
project: podup
---

Salió podup 1.7.1. Algunas cosas para destacar:

- `port` ahora valida los argumentos de protocolo y puerto privado en vez de aceptar entradas inválidas en silencio.
- `exec` ahora resuelve correctamente una réplica en ejecución cuando un servicio está escalado, así que `--index`/`--scale` apuntan al contenedor correcto.
- `up` ahora arranca implícitamente un objetivo de `depends_on` que está detrás de un profile, en vez de dejarlo detenido.
- El modo tmpfs de quadlet ya no se re-codifica con la base incorrecta, así que el modo renderizado es el correcto.

Changelog completo: [v1.7.0...v1.7.1](https://github.com/Glyndor/podup/compare/v1.7.0...v1.7.1).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
