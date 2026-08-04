---
urlSlug: podup-1-3-0
locale: es
title: "podup 1.3.0"
description: "Podman 5 ya es el piso de API exigido, más paridad CLI con docker-compose, labels de propiedad en quadlet, y un fix de seguridad que limita la lectura de secrets de build."
date: 2026-06-24
project: podup
banner: ../../assets/og/blog/podup-1-3-0.es.png
contributors: ["Jaro-c"]
---

Salió podup 1.3.0. Lo más destacado:

- Fix de seguridad: la lectura de un archivo de secret de build ahora tiene un tope de `MAX_FILE_BYTES`, cerrando una vía de lectura sin límite.
- Podman 5 ya es el piso de API exigido, y specgen sumó los campos health-on-failure y startup para estar a la par.
- La CLI ganó paridad con docker-compose para las flags `run`, `logs`, `restart` y `events`.
- quadlet ahora estampa labels de propiedad en las units generadas y usa las claves nativas `Memory` y `AppArmor` en vez de traducirlas.
- Corregido: un wait bloqueante sobre un contenedor ya no se corta por el timeout de lectura de 120s — los waits largos ahora lo sobreviven.
- Rendimiento: los payloads se transmiten zero-copy, y stdout se bloquea una vez por stream en vez de una vez por chunk.

Changelog completo: [v1.2.0...v1.3.0](https://github.com/Glyndor/podup/compare/v1.2.0...v1.3.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
