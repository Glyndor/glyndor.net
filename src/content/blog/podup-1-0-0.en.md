---
urlSlug: podup-1-0-0
locale: en
title: "podup 1.0.0"
description: "The first stable release: the public library API is frozen for 1.0, with TOCTOU/XDG, ulimit, and Quadlet secret-sanitization fixes, and signed releases."
date: 2026-06-16
project: podup
banner: ../../assets/og/blog/podup-1-0-0.en.png
contributors: ["Jaro-c"]
---

podup 1.0.0 is out — the first stable release. A few things worth calling out:

- The public library API is now stabilized for 1.0: the surface is frozen.
- Security fixes: a staging TOCTOU + XDG check, ulimit validation, and Quadlet secret sanitization.
- Quadlet now emits memory and apparmor settings via PodmanArgs, with a warning when semantics get dropped in the process.
- The engine rejects remote socket schemes and surfaces parsed errors on streaming endpoints instead of swallowing them.
- Releases are now signed: NOTICES.html is signed via the venv, releases are gated to main, and the floor is Podman >=5.0.

Full changelog: [v0.24.1...v1.0.0](https://github.com/Glyndor/podup/compare/v0.24.1...v1.0.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
