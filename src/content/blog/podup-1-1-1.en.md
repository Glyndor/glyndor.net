---
urlSlug: podup-1-1-1
locale: en
title: "podup 1.1.1"
description: "Healthchecks are now driven on-demand, so up --wait works correctly without systemd present."
date: 2026-06-20
project: podup
---

podup 1.1.1 is out. One fix worth calling out:

- Healthchecks are now driven on-demand instead of depending on systemd being present. `up --wait` now works correctly even on hosts without systemd.

Full changelog: [v1.1.0...v1.1.1](https://github.com/Glyndor/podup/compare/v1.1.0...v1.1.1).
