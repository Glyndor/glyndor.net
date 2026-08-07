---
urlSlug: podup-3-3-0
locale: en
title: "podup 3.3.0"
description: "up now skips images the host already has, and attach/run/events detect a dead stream out of band like logs and stats."
date: 2026-07-29
project: podup
banner: ../../assets/og/blog/podup-3-3-0.en.png
contributors: ["Jaro-c"]
---

podup 3.3.0 is out. A few fixes worth calling out:

- `up` no longer pulls an image the host already has — that pull was happening once per service even when nothing had changed.
- `attach` and `run` now detect a dead stream out of band, the same way `logs` and `stats` already do, instead of trusting what the stream itself reports.
- `events` gets the same fix for an unexpected feed end — the last of five commands to move off trusting the stream's own signal.

Full changelog: [v3.2.1...v3.3.0](https://github.com/Glyndor/podup/compare/v3.2.1...v3.3.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
