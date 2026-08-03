---
urlSlug: podup-2-0-0
locale: es
title: "podup 2.0.0"
description: "podup 2.0.0 es una versión mayor: exec/run ahora tienen una terminal real, el stop de autostart está acotado, y un up interrumpido sale con código 130."
date: 2026-07-21
project: podup
---

Salió podup 2.0.0. Es un bump de versión mayor con cuatro cambios incompatibles:

- **Incompatible:** `exec` y `run` ahora asignan una terminal real en Unix. Esto cambia el comportamiento de stdio de ambos comandos.
- **Incompatible:** el stop en modo servicio de autostart ahora está acotado por encima del grace period más largo entre los servicios que se están deteniendo, en vez de poder durar más que eso.
- **Incompatible:** un `up` adjunto ahora sale con código 130 al ser interrumpido. Antes salía con un código distinto.
- **Incompatible:** ahora se acepta el flag `--sig-proxy` de docker sin valor (sin `=valor`).

También en esta versión:

- Los volumes ahora se deduplican por target, manejando correctamente las tags `!override` y `!reset`.
- Un contenedor unhealthy ahora puede disparar `x-podman-on-failure`.
- Los servicios ahora arrancan en cuanto sus propias dependencias están listas, en vez de esperar a todo su nivel de dependencias.

Changelog completo: [v1.13.0...v2.0.0](https://github.com/Glyndor/podup/compare/v1.13.0...v2.0.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
