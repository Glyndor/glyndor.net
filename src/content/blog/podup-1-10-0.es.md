---
urlSlug: podup-1-10-0
locale: es
title: "podup 1.10.0"
description: "El modo servicio ahora soporta autostart con quadlet, y hay una guía nueva que cubre los dos modos de rootless-autostart."
date: 2026-07-17
project: podup
banner: ../../assets/og/podup.png
contributors: ["Jaro-c"]
---

Salió podup 1.10.0. Una cosa para destacar:

- El modo servicio ahora soporta autostart con quadlet — el equivalente de podup a un servicio systemd para un stack de compose, en rootless-Podman. Tu stack puede volver a levantarse al arrancar o al iniciar sesión, sin daemon como root.
- Docs nuevos: una guía de rootless-autostart que cubre los dos modos, para que elijas el que encaje con tu setup.

Changelog completo: [v1.9.3...v1.10.0](https://github.com/Glyndor/podup/compare/v1.9.3...v1.10.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
