---
urlSlug: podup-1-1-0
locale: es
title: "podup 1.1.0"
description: "podup alcanza paridad total de flags CLI con docker-compose, suma soporte nativo de libpod y varios comandos nuevos, y corrige el networking por defecto."
date: 2026-06-19
project: podup
---

Salió podup 1.1.0. Este es el release donde cierra la épica de paridad CLI con docker-compose: podup ahora cubre la superficie de flags de prácticamente todos los comandos de compose.

Algunas cosas para destacar:

- `-t`/`--timeout` llegó a `up`, `down`, `stop` y `restart`.
- `exec` sumó `-e`/`-u`/`-w`/`--privileged`/`-d`/`--index`.
- `build` sumó `--no-cache`/`--pull`/`--build-arg`/`-q`, y `ps`/`images` recibieron sus flags de output (incluido `ps -a`).
- `up --scale` más un subcomando `scale` independiente.
- Comandos nuevos que completan el conjunto: `create`, `ls`, `stats`, `push`, `wait`, `commit`, `export`, `events`, `attach`, `volumes`.
- Endpoints nativos de libpod: preflight de versión, restart atómico y un diagnóstico de links.
- `config` sumó `--no-interpolate` y `--resolve-image-digests`.
- Ahora se sintetiza una red por defecto para los servicios sin bloque `networks:` explícito — una corrección de comportamiento, no solo un flag.

Changelog completo: [v1.0.0...v1.1.0](https://github.com/Glyndor/podup/compare/v1.0.0...v1.1.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
