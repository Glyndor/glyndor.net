---
urlSlug: podup-1-13-0
locale: en
title: "podup 1.13.0"
description: "Quadlet now discovers and merges compose override files, plus fixes for the no-TTY flag, .containerignore, silent pull failures, and logs hanging on pipe close."
date: 2026-07-20
project: podup
banner: ../../assets/og/podup.png
contributors: ["Jaro-c"]
---

podup 1.13.0 is out. A few things worth calling out:

- Quadlet now discovers and merges the compose override file automatically, and merges `networks`, `sysctls`, `dns`, and `env_file` instead of replacing them.
- `run` and `exec` accept both spellings of the no-TTY flag.
- `.containerignore` is read on its own now, instead of being unioned with `.dockerignore`.
- A pull that libpod refused used to exit 0 silently; it's reported as a failure now.
- `logs` used to hang when the reader closed the pipe; it exits properly now.

Full changelog: [v1.12.0...v1.13.0](https://github.com/Glyndor/podup/compare/v1.12.0...v1.13.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
