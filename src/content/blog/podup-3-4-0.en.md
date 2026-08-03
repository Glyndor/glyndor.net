---
urlSlug: podup-3-4-0
locale: en
title: "podup 3.4.0"
description: "podup build now writes to stderr instead of stdout, and up/down/pull/build gained a live-updating terminal board."
date: 2026-07-30
project: podup
---

podup 3.4.0 is out. Almost everything in it is command-line output — the library API is unchanged, and `cargo semver-checks` passed on every pull request in this release.

**Incompatible changes:**

- `podup build` now writes to stderr, not stdout. `podup build > build.log` captures nothing anymore — redirect stderr instead (`2> build.log`, or `> build.log 2>&1`). stdout was documented as a clean pipe, and `build` was the one command contradicting it.
- `podup wait` prints one line per container — its name and exit code, in aligned columns — instead of a bare exit code per service. The new `--format json` is the stable machine-readable form.
- `podup --version` prints `podup version v3.4.0`, matching `podup version`, where it used to print `podup 3.4.0`. `podup version --short` still prints the bare number.
- `stats`, `events` and `top` changed their table layouts. `stats`' header now matches its columns, `events` gained a header and fixed column widths, and `top` moved onto the shared table. Anything parsing these by byte offset needs updating — `--format json` is unaffected in all three.

**What's new:**

`up`, `down`, `pull` and `build` show a live board on a terminal — the whole resource set up front, repainted as work proceeds, finished rows scrolling up and staying. In a pipe, a file, CI, under `NO_COLOR`, or with `--ansi never`, the same events come out as plain append-only lines with no escape sequences, now carrying the intermediate transitions (`Creating` then `Created`) that no renderer emitted before. `stats` repaints in place instead of scrolling.

Commands that used to finish their work and say nothing now report it: `push` wrote zero bytes while genuinely uploading an image, six lifecycle commands exited 0 in silence on a project that was never created, and `up` created networks and volumes without naming them. `down` also stopped reporting removals of resources that never existed — on a project that had never been created it announced destroying three, including a data volume.

Full changelog: [v3.3.0...v3.4.0](https://github.com/Glyndor/podup/compare/v3.3.0...v3.4.0).
