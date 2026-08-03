---
urlSlug: podup-1-9-2
locale: en
title: "podup 1.9.2"
description: "Fixes the short tmpfs form in compose files, which was silently dropping its options."
date: 2026-07-15
project: podup
banner: ../../assets/og/podup.png
contributors: ["Jaro-c"]
---

podup 1.9.2 is out. One fix worth calling out:

- The short `tmpfs: /path` form in compose files wasn't applying its options. It does now.

Full changelog: [v1.9.1...v1.9.2](https://github.com/Glyndor/podup/compare/v1.9.1...v1.9.2).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
