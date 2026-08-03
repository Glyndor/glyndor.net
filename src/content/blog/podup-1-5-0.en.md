---
urlSlug: podup-1-5-0
locale: en
title: "podup 1.5.0"
description: "Release signatures are now verified with verify_strict, rm failures propagate instead of exit 0, and self-update self-tests the new binary with rollback."
date: 2026-06-26
project: podup
banner: ../../assets/og/podup.png
contributors: ["Jaro-c"]
---

podup 1.5.0 is out. A lot of small fixes landed; here's what stands out:

- Release signatures are now verified with `verify_strict` instead of the looser default.
- `rm` failures used to get masked as exit 0. Now they propagate.
- Nested variable expansion works in interpolation defaults.
- `env_file` bare keys now pass through from the host.
- Quadlet generation emits a `.build` unit for services with a build config.
- Self-update self-tests the new binary before committing to it, with rollback if that fails, and now forces https.

I also swept up orphaned project secrets on `down`, and did some perf work: container prefetch and parallel polling for `down`, `wait`, and `watch`.

Full changelog: [v1.4.0...v1.5.0](https://github.com/Glyndor/podup/compare/v1.4.0...v1.5.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
