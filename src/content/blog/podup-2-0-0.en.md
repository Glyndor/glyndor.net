---
urlSlug: podup-2-0-0
locale: en
title: "podup 2.0.0"
description: "podup 2.0.0 is a major release: exec/run get a real terminal, autostart stop is now bounded, and an interrupted up exits 130."
date: 2026-07-21
project: podup
banner: ../../assets/og/blog/podup-2-0-0.en.png
contributors: ["Jaro-c"]
---

podup 2.0.0 is out. This is a major version bump with four breaking changes:

- **Breaking:** `exec` and `run` now allocate a real terminal on Unix. This changes stdio behavior for both commands.
- **Breaking:** autostart service-mode stop is now bounded above the longest grace period among the services being stopped, instead of being able to run longer than that.
- **Breaking:** an attached `up` now exits 130 when interrupted. Previously it exited with a different code.
- **Breaking:** docker's bare `--sig-proxy` flag (without `=value`) is now accepted.

Also in this release:

- Volumes are deduplicated by target, with the `!override` and `!reset` tags handled correctly.
- An unhealthy container can now trigger `x-podman-on-failure`.
- Services now start as soon as their own dependencies are ready, instead of waiting for their whole dependency level.

Full changelog: [v1.13.0...v2.0.0](https://github.com/Glyndor/podup/compare/v1.13.0...v2.0.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
