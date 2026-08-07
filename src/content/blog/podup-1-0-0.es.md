---
urlSlug: podup-1-0-0
locale: es
title: "podup 1.0.0"
description: "Primera versión estable: API pública de la librería congelada para 1.0, fixes de TOCTOU/XDG, ulimit y sanitización de secrets en Quadlet, y releases firmados."
date: 2026-06-16
project: podup
banner: ../../assets/og/blog/podup-1-0-0.es.png
contributors: ["Jaro-c"]
---

Salió podup 1.0.0 — la primera versión estable. Algunas cosas para destacar:

- La API pública de la librería queda estabilizada para 1.0: la superficie se congela.
- Fixes de seguridad: un chequeo de TOCTOU + XDG en staging, validación de ulimit, y sanitización de secrets en Quadlet.
- Quadlet ahora emite memory y apparmor vía PodmanArgs, con una advertencia cuando se pierde semántica en el proceso.
- El engine rechaza esquemas de socket remoto y expone los errores parseados en los endpoints de streaming en vez de tragárselos.
- Los releases ahora están firmados: NOTICES.html se firma vía el venv, los releases quedan limitados a main, y el piso es Podman >=5.0.

Changelog completo: [v0.24.1...v1.0.0](https://github.com/Glyndor/podup/compare/v0.24.1...v1.0.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
