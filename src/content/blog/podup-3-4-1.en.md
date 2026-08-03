---
urlSlug: podup-3-4-1
locale: en
title: "podup 3.4.1"
description: "top no longer aborts on a stopped container, and secrets teardown got faster."
date: 2026-08-01
project: podup
banner: ../../assets/og/podup.png
contributors: ["Jaro-c"]
---

podup 3.4.1 is out. Two things worth calling out:

- `top` used to abort entirely if one container in the stack had already stopped. Now it skips that container and keeps going.
- Secrets teardown got faster: ownership is now resolved from a single list call instead of one call per secret, and we stopped trying to delete secrets that were never created in the first place.

Full changelog: [v3.4.0...v3.4.1](https://github.com/Glyndor/podup/compare/v3.4.0...v3.4.1).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
