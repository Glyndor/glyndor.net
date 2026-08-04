---
urlSlug: podup-1-6-0
locale: en
title: "podup 1.6.0"
description: "Colourised human output, a replica-count cap against untrusted-compose DoS, and --env-file last-file-wins."
date: 2026-06-28
project: podup
banner: ../../assets/og/blog/podup-1-6-0.en.png
contributors: ["Jaro-c"]
---

podup 1.6.0 is out. Highlights:

- Human-readable output can now be colourised: `--ansi` forces it on, `NO_COLOR` forces it off, and by default it's TTY-aware.
- Replica count is now capped, bounding a denial-of-service an untrusted compose file could otherwise cause.
- `--env-file` now correctly replaces `.env` instead of merging with it, and when passed multiple times the last file wins.
- `up --wait` now fails immediately if a service exits before becoming ready, instead of waiting out the full timeout.
- The CLI now warns when a build-arg name looks like it might be a secret.

Full changelog: [v1.5.2...v1.6.0](https://github.com/Glyndor/podup/compare/v1.5.2...v1.6.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
