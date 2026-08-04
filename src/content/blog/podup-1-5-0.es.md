---
urlSlug: podup-1-5-0
locale: es
title: "podup 1.5.0"
description: "Las firmas de release ahora se verifican con verify_strict, los fallos de rm propagan en vez de dar exit 0, y self-update se auto-testea con rollback."
date: 2026-06-26
project: podup
banner: ../../assets/og/blog/podup-1-5-0.es.png
contributors: ["Jaro-c"]
---

Salió podup 1.5.0. Llegaron muchos arreglos pequeños; esto es lo que destaca:

- Las firmas de release ahora se verifican con `verify_strict` en vez del modo por defecto, más laxo.
- Los fallos de `rm` se enmascaraban como exit 0. Ahora propagan.
- La expansión de variables anidadas funciona en los valores por defecto de interpolación.
- Las claves sueltas de `env_file` ahora pasan desde el host.
- La generación de Quadlet emite una unidad `.build` para los servicios con configuración de build.
- Self-update ahora se auto-testea con el binario nuevo antes de confirmarlo, con rollback si falla, y fuerza https.

También barrí los secrets de proyecto huérfanos en `down`, e hice trabajo de rendimiento: prefetch de contenedores y polling en paralelo para `down`, `wait` y `watch`.

Changelog completo: [v1.4.0...v1.5.0](https://github.com/Glyndor/podup/compare/v1.4.0...v1.5.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
