---
urlSlug: podup-1-4-0
locale: en
title: "podup 1.4.0"
description: "ps STATUS now reflects real container state, stats stopped comma-joining containers, and lifecycle commands get idempotent exit codes."
date: 2026-06-25
project: podup
---

podup 1.4.0 is out. A handful of fixes worth calling out:

- `ps` now renders STATUS from the container's real State instead of a stale value, and defaults the host port IP correctly.
- `stats` used to comma-join the `containers` param into a single value; it now repeats the param per container, matching the API shape.
- Live replicas now resolve correctly for lifecycle and query commands after scaling, so a previous scale-up or scale-down no longer leaves those commands looking at stale replica counts.
- Log lines are now prefixed with the container name.
- Quadlet's `ContainerName` now defaults to `project-service` instead of leaving it unset.
- Lifecycle commands now return consistent, idempotent exit codes.

Full changelog: [v1.3.0...v1.4.0](https://github.com/Glyndor/podup/compare/v1.3.0...v1.4.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
