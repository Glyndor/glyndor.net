---
urlSlug: podup-1-9-0
locale: en
title: "podup 1.9.0"
description: "podup autostart gains service mode, compose now warns on unknown nested keys, and the release signing key was rotated."
date: 2026-07-15
project: podup
banner: ../../assets/og/blog/podup-1-9-0.en.png
contributors: ["Jaro-c", "dependabot[bot]"]
---

podup 1.9.0 is out. Three things worth calling out:

- `podup autostart` now supports service mode, for running it as a managed background service instead of a one-off command.
- Compose parsing now warns on unknown keys inside nested option blocks, instead of silently ignoring them.
- The Ed25519 release signing key was rotated. CI formally verifies that the new key matches what consumers embed, before anything ships.

Full changelog: [v1.8.0...v1.9.0](https://github.com/Glyndor/podup/compare/v1.8.0...v1.9.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
