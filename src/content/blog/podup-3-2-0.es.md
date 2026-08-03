---
urlSlug: podup-3-2-0
locale: es
title: "podup 3.2.0"
description: "logs ahora sale con código distinto de cero cuando su stream se trunca, en vez de descartar la salida en silencio."
date: 2026-07-27
project: podup
---

Salió podup 3.2.0. Una cosa para destacar:

- `logs` podía descartar salida en silencio si su stream se truncaba a mitad de ejecución, y aun así salir con código 0. Ahora sale con código distinto de cero cuando eso pasa.

El resto de este release es mantenimiento de CI y de lock-files.

Changelog completo: [v3.1.0...v3.2.0](https://github.com/Glyndor/podup/compare/v3.1.0...v3.2.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
