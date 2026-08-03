---
urlSlug: podup-1-11-0
locale: en
title: "podup 1.11.0"
description: "Lifecycle commands now exit non-zero on real failures, a quadlet uninstall privilege-escalation path is closed, and teardown is parallelized."
date: 2026-07-18
project: podup
---

podup 1.11.0 is out. Highlights:

- Lifecycle commands (`up`, `down`, etc.) used to exit 0 even when the operation had actually failed. They now report failure correctly.
- `ps` and `logs` returned wrong results after scaling a service, when run with `--status`, or against containers on odd ports. Fixed.
- Security fix: systemd specifiers are now escaped, and quadlet uninstall ownership could previously be forged — that path is now unforgeable.
- The installer's download transport is hardened, the project-name error message is corrected, and the leftover Windows backup file is cleaned up.
- `down` now tears down containers within each dependency level in parallel instead of one at a time.
- Images are prefetched, replicas are fanned out, and duplicate pulls for standalone containers are deduplicated.
- The per-line log buffer is now bounded instead of growing unbounded.

Full changelog: [v1.10.1...v1.11.0](https://github.com/Glyndor/podup/compare/v1.10.1...v1.11.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
