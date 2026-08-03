---
urlSlug: podup-1-4-0
locale: es
title: "podup 1.4.0"
description: "STATUS de ps ahora refleja el estado real del contenedor, stats dejó de unir containers con comas, y lifecycle tiene exit codes idempotentes."
date: 2026-06-25
project: podup
---

Salió podup 1.4.0. Algunos fixes para destacar:

- `ps` ahora renderiza STATUS a partir del State real del contenedor en vez de un valor obsoleto, y por defecto asigna correctamente la IP del puerto en el host.
- `stats` unía el parámetro `containers` con comas en un solo valor; ahora repite el parámetro por cada contenedor, igualando la forma real de la API.
- Las réplicas en vivo ahora se resuelven correctamente para los comandos de lifecycle y query después de escalar, así que un scale-up o scale-down anterior ya no deja a esos comandos mirando conteos de réplicas obsoletos.
- Las líneas de log ahora llevan el nombre del contenedor como prefijo.
- `ContainerName` en Quadlet ahora usa por defecto `project-service` en vez de quedar sin definir.
- Los comandos de lifecycle ahora devuelven exit codes consistentes e idempotentes.

Changelog completo: [v1.3.0...v1.4.0](https://github.com/Glyndor/podup/compare/v1.3.0...v1.4.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).
