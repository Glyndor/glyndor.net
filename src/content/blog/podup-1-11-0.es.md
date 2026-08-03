---
urlSlug: podup-1-11-0
locale: es
title: "podup 1.11.0"
description: "Los comandos de ciclo de vida ahora fallan con código de salida correcto, se cierra una vía de escalada de privilegios en quadlet uninstall, y el teardown se paraleliza."
date: 2026-07-18
project: podup
banner: ../../assets/og/podup.png
contributors: ["Jaro-c"]
---

Salió podup 1.11.0. Lo más destacado:

- Los comandos de ciclo de vida (`up`, `down`, etc.) salían con código 0 aunque la operación hubiera fallado de verdad. Ahora reportan el fallo correctamente.
- `ps` y `logs` devolvían resultados incorrectos después de escalar un servicio, al usar `--status`, o contra contenedores en puertos poco comunes. Corregido.
- Corrección de seguridad: los especificadores de systemd ahora se escapan, y la propiedad en `quadlet uninstall` se podía falsificar — esa vía ya no es forjable.
- Se endureció el transporte de descarga del instalador, se corrigió el mensaje de error del nombre de proyecto, y se limpió el archivo de respaldo que quedaba en Windows.
- `down` ahora derriba los contenedores de cada nivel de dependencia en paralelo, en vez de uno a uno.
- Las imágenes se prefetchean, las réplicas se reparten en paralelo, y se eliminan los pulls duplicados en contenedores standalone.
- El buffer de log por línea ahora tiene un límite, en vez de crecer sin control.

Changelog completo: [v1.10.1...v1.11.0](https://github.com/Glyndor/podup/compare/v1.10.1...v1.11.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
