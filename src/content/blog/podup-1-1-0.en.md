---
urlSlug: podup-1-1-0
locale: en
title: "podup 1.1.0"
description: "podup reaches full docker-compose CLI flag parity, adds native libpod support and several new commands, and fixes default networking."
date: 2026-06-19
project: podup
---

podup 1.1.0 is out. This is the release where the docker-compose CLI parity epic wraps up: podup now covers the flag surface of essentially every compose command.

A few things worth calling out:

- `-t`/`--timeout` landed on `up`, `down`, `stop`, and `restart`.
- `exec` gained `-e`/`-u`/`-w`/`--privileged`/`-d`/`--index`.
- `build` gained `--no-cache`/`--pull`/`--build-arg`/`-q`, and `ps`/`images` got their output flags (including `ps -a`).
- `up --scale` plus a standalone `scale` subcommand.
- New commands round out the set: `create`, `ls`, `stats`, `push`, `wait`, `commit`, `export`, `events`, `attach`, `volumes`.
- Native libpod endpoints: a version preflight, atomic restart, and a links diagnostic.
- `config` gained `--no-interpolate` and `--resolve-image-digests`.
- A default network is now synthesized for services with no explicit `networks:` block — a correctness fix, not just a flag.

Full changelog: [v1.0.0...v1.1.0](https://github.com/Glyndor/podup/compare/v1.0.0...v1.1.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
