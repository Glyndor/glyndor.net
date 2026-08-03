---
urlSlug: podup-3-0-2
locale: en
title: "podup 3.0.2"
description: "stats now exits non-zero on a truncated live sample, and cp/watch sync into a container work correctly on Podman 6."
date: 2026-07-25
project: podup
banner: ../../assets/og/podup.png
contributors: ["Jaro-c"]
---

podup 3.0.2 is out. Two fixes worth calling out:

- `stats` now exits non-zero when a live sample is truncated, instead of reporting success on incomplete data.
- `cp` and `watch` syncing files into a container now work correctly on Podman 6.

Full changelog: [v3.0.1...v3.0.2](https://github.com/Glyndor/podup/compare/v3.0.1...v3.0.2).
