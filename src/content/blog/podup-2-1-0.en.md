---
urlSlug: podup-2-1-0
locale: en
title: "podup 2.1.0"
description: "run gets a real terminal on Unix, sub-second healthcheck intervals are honored, and socket errors now say which socket and how to enable it."
date: 2026-07-21
project: podup
---

podup 2.1.0 is out. Three things worth calling out:

- `run` now gets a real terminal on Unix. It didn't before.
- Healthcheck intervals under a second are now honored instead of being silently slowed down.
- Errors about a missing socket now say which socket, why it matters, and how to enable it.

Full changelog: [v2.0.0...v2.1.0](https://github.com/Glyndor/podup/compare/v2.0.0...v2.1.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
