---
urlSlug: podup-1-3-0
locale: en
title: "podup 1.3.0"
description: "Podman 5 is now the enforced API floor, plus docker-compose CLI parity, quadlet ownership labels, and a capped-read fix for build secrets."
date: 2026-06-24
project: podup
banner: ../../assets/og/blog/podup-1-3-0.en.png
contributors: ["Jaro-c"]
---

podup 1.3.0 is out. The highlights:

- Security fix: reading a build secret file is now capped at `MAX_FILE_BYTES`, closing an unbounded-read path.
- Podman 5 is now the enforced API floor, and specgen picked up health-on-failure and startup fields to match it.
- CLI gained docker-compose parity for the `run`, `logs`, `restart`, and `events` flags.
- quadlet now stamps ownership labels on generated units and uses the native `Memory` and `AppArmor` keys instead of translating them.
- Fixed: a blocking container wait no longer gets cut off by the 120s read timeout — long-running waits now outlive it.
- Perf: payloads stream zero-copy, and stdout is locked once per stream instead of once per chunk.

Full changelog: [v1.2.0...v1.3.0](https://github.com/Glyndor/podup/compare/v1.2.0...v1.3.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
