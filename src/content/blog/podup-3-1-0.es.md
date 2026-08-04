---
urlSlug: podup-3-1-0
locale: es
title: "podup 3.1.0"
description: "En hosts SELinux, run ahora relabela los bind mounts y los secrets file: se vuelven secrets nativos; config también resuelve env_file en environment."
date: 2026-07-26
project: podup
banner: ../../assets/og/blog/podup-3-1-0.es.png
contributors: ["Jaro-c"]
---

Salió podup 3.1.0. Tres cosas para destacar:

- `run` ahora relabela los bind mounts para que sean accesibles bajo SELinux, en vez de fallar en silencio por permisos.
- Un secret `file:` ahora se lee como un secret nativo en vez de montarse directamente, así que también funciona en hosts SELinux.
- `config` ahora pliega `env_file` dentro de `environment` en vez de dejarlo sin resolver.

El resto de este release es endurecimiento de CI y de tests.

Changelog completo: [v3.0.2...v3.1.0](https://github.com/Glyndor/podup/compare/v3.0.2...v3.1.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
