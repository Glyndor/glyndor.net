---
urlSlug: podup-3-1-0
locale: en
title: "podup 3.1.0"
description: "On SELinux hosts, run now relabels bind mounts and file: secrets become native secrets; config also resolves env_file into environment."
date: 2026-07-26
project: podup
banner: ../../assets/og/podup.png
contributors: ["Jaro-c"]
---

podup 3.1.0 is out. Three things worth calling out:

- `run` now relabels bind mounts so they're actually accessible under SELinux, instead of silently failing on permission.
- A `file:` secret is now read into a native secret instead of bind-mounted directly, so it works on SELinux hosts too.
- `config` now folds `env_file` into `environment` instead of leaving it unresolved.

The rest of this release is CI and test hardening.

Full changelog: [v3.0.2...v3.1.0](https://github.com/Glyndor/podup/compare/v3.0.2...v3.1.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
