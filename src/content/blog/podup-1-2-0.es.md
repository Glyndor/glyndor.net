---
urlSlug: podup-1-2-0
locale: es
title: "podup 1.2.0"
description: "Fixes de depends_on en Compose para servicios escalados y extends, mapeo de security_opt en quadlet, e instaladores de release firmados con SBOM/NOTICES."
date: 2026-06-23
project: podup
---

Salió podup 1.2.0. Lo más destacado:

- `depends_on` en servicios escalados ahora espera a la primera réplica, en vez de avanzar antes de que haya alguna instancia arriba.
- `depends_on` ahora se une correctamente a través de `extends`, y los `models` de nivel superior se fusionan en vez de perderse, así que la herencia en compose se comporta como está escrita.
- `network_mode: bridge`, `aux_addresses` y `restart_policy` ahora se reportan cuando no se pueden aplicar, en vez de ignorarse en silencio.
- quadlet ahora mapea los campos mask/unmask de `security_opt` y avisa cuando un campo no se puede traducir, en vez de descartarlo sin dejar rastro.
- Los instaladores de release ahora están firmados, y SBOM/NOTICES quedan cubiertos por SHA256SUMS junto con los binarios.
- Una ronda de fixes de formato wire de libpod: claves correctas para `extra_hosts`, `ulimits` y `driver_opts` de volúmenes, además de `security_opt` descompuesto, `device_cgroup_rule` estructurado, y dispositivos CDI enrutados correctamente.

Changelog completo: [v1.1.1...v1.2.0](https://github.com/Glyndor/podup/compare/v1.1.1...v1.2.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
