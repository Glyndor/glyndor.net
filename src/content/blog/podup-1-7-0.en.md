---
urlSlug: podup-1-7-0
locale: en
title: "podup 1.7.0"
description: "A 220-finding correctness sweep across the whole CLI, plus parallel lifecycle ops, progress output, and better table rendering."
date: 2026-06-29
project: podup
---

podup 1.7.0 is out. This release merges a broad correctness sweep — 220 verified findings across the CLI surface (replicas, restart policy, profiles, signals, watch, volumes, networks, update, container create, build, output formatting, env files, compose parsing, lifecycle up/down, run/exec/cp, error messaging, CLI flags, and more), each fixed and checked area by area.

A few concrete changes beyond the sweep:

- `stats` gained `--format`, `--all`, and `--no-trunc` flags, and now truncates long container names.
- Independent lifecycle operations within the same dependency level now run in parallel instead of sequentially.
- Lifecycle commands (up/down and friends) now report success and progress as they work, instead of going silent until they finish.
- `ls`, `ps`, and `images` tables now size and truncate columns to their content instead of fixed widths.

Full changelog: [v1.6.0...v1.7.0](https://github.com/Glyndor/podup/compare/v1.6.0...v1.7.0).
