---
urlSlug: podup-1-9-3
locale: en
title: "podup 1.9.3"
description: "autostart now stops the stack on shutdown instead of removing it entirely."
date: 2026-07-16
project: podup
---

podup 1.9.3 is out. One fix, short release:

- autostart used to remove the stack on shutdown. Now it stops it instead. Stop is reversible, remove is not — the stack comes back on next start instead of having to be recreated.

Full changelog: [v1.9.2...v1.9.3](https://github.com/Glyndor/podup/compare/v1.9.2...v1.9.3).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
