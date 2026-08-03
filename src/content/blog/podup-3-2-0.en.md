---
urlSlug: podup-3-2-0
locale: en
title: "podup 3.2.0"
description: "logs now exits non-zero when its stream truncates live output, instead of silently dropping it."
date: 2026-07-27
project: podup
banner: ../../assets/og/podup.png
contributors: ["Jaro-c"]
---

podup 3.2.0 is out. One thing worth calling out:

- `logs` used to be able to silently drop output if its stream truncated mid-run, and still exit 0. Now it exits non-zero when that happens.

The rest of this release is CI and lock-file maintenance.

Full changelog: [v3.1.0...v3.2.0](https://github.com/Glyndor/podup/compare/v3.1.0...v3.2.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
