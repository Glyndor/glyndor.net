---
urlSlug: podup-3-2-1
locale: es
title: "podup 3.2.1"
description: "Release de mantenimiento: endurecimiento de CI, documentación de benchmarks, cobertura de tests de streaming y un bump de dependencia."
date: 2026-07-28
project: podup
---

Salió podup 3.2.1. Este release es interno, no afecta al uso:

- El lane de CI de Podman ahora registra qué imagen arrancó cada leg, y detecta un body de respuesta perdido, no solo una cabecera perdida.
- Streaming ganó más cobertura de tests: las formas de stream terminado-vs-cortado quedaron fijadas, incluyendo cómo se clasifica un EOF de body.
- Se publicó el benchmark de 3.2.0, con un error de reporte del harness corregido.
- Bump de `clap_complete` de 4.6.7 a 4.6.8.

Sin cambios de comportamiento para las instalaciones existentes.

Changelog completo: [v3.2.0...v3.2.1](https://github.com/Glyndor/podup/compare/v3.2.0...v3.2.1).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
