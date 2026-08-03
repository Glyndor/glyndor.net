---
urlSlug: podup-3-0-0
locale: en
title: "podup 3.0.0"
description: "Breaking change: compose option enums are now non-exhaustive. Also new: interactive exec and run on Windows."
date: 2026-07-23
project: podup
banner: ../../assets/og/podup.png
contributors: ["Jaro-c"]
---

podup 3.0.0 is out. This is a major version bump with a breaking change:

- **Breaking:** long-form mount hardening options were added, and as part of that the compose option blocks are now non-exhaustive. If your code matches on those enums exhaustively, it will no longer compile — add a wildcard arm.
- Interactive `exec` and `run` now work on Windows. Previously that was a Linux/macOS-only feature.

Full changelog: [v2.1.0...v3.0.0](https://github.com/Glyndor/podup/compare/v2.1.0...v3.0.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
