---
urlSlug: podup-3-2-1
locale: en
title: "podup 3.2.1"
description: "Maintenance release: CI lane hardening, benchmark docs, streaming test coverage, and a dependency bump."
date: 2026-07-28
project: podup
banner: ../../assets/og/blog/podup-3-2-1.en.png
contributors: ["Jaro-c", "dependabot[bot]"]
---

podup 3.2.1 is out. This one's internal, not user-facing:

- The Podman CI lane now records which image each leg booted, and catches a dropped response body, not just a dropped head.
- Streaming got more test coverage: the finished-vs-severed stream shapes are pinned down, including how a body EOF gets classified.
- The 3.2.0 benchmark writeup is published, with a harness misreport fixed.
- `clap_complete` bumped from 4.6.7 to 4.6.8.

No behavior changes for installs.

Full changelog: [v3.2.0...v3.2.1](https://github.com/Glyndor/podup/compare/v3.2.0...v3.2.1).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
