---
urlSlug: podup-1-7-1
locale: en
title: "podup 1.7.1"
description: "port validates its protocol and private-port arguments, exec resolves scaled replicas, and quadlet tmpfs mode renders correctly."
date: 2026-06-29
project: podup
banner: ../../assets/og/blog/podup-1-7-1.en.png
contributors: ["Jaro-c"]
---

podup 1.7.1 is out. A few things worth calling out:

- `port` now validates the protocol and private-port arguments instead of accepting bad input silently.
- `exec` now correctly resolves a running replica when a service is scaled, so `--index`/`--scale` target the right container.
- `up` now implicitly starts a `depends_on` target that's gated behind a profile, instead of leaving it stopped.
- Quadlet tmpfs mode no longer gets re-encoded through the wrong base, so the rendered mode is correct.

Full changelog: [v1.7.0...v1.7.1](https://github.com/Glyndor/podup/compare/v1.7.0...v1.7.1).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
