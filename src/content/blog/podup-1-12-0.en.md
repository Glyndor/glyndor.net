---
urlSlug: podup-1-12-0
locale: en
title: "podup 1.12.0"
description: "Fixes quadlet permissions and a cp chmod bug, makes five commands fail correctly instead of lying, and validates Podman 6.0.1 as the baseline engine."
date: 2026-07-20
project: podup
banner: ../../assets/og/blog/podup-1-12-0.en.png
contributors: ["Jaro-c"]
---

podup 1.12.0 is out. A few things worth calling out:

- Quadlet ownership and unit permissions were wrong in some cases; fixed.
- `cp` had a chmod bug that could leave the destination in a bad state; fixed.
- Five commands used to report success even when the underlying operation had actually failed. They now fail correctly.
- Podman 6.0.1 is now the validated baseline engine version.

Full changelog: [v1.11.1...v1.12.0](https://github.com/Glyndor/podup/compare/v1.11.1...v1.12.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
