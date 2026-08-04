---
urlSlug: podup-3-5-0
locale: en
title: "podup 3.5.0"
description: "ps, images, and events output gained new columns, shifting table layout; --format json stays a compatible superset."
date: 2026-08-03
project: podup
banner: ../../assets/og/blog/podup-3-5-0.en.png
contributors: ["Jaro-c"]
---

podup 3.5.0 is out. The `ps`, `images`, and `events` tables changed shape — read this before anything of yours parses them by column position.

## Incompatible

- `ps` gained **CREATED** between IMAGE and STATUS, and STATUS now reads `Up 2h 5m (healthy)` instead of the bare word `running`.
- `images` gained **SIZE** and **CREATED**.
- `events` gained **TIME**. 3.4.x printed no timestamp at all.

`--format json` is a superset in each case. Existing keys keep their names and their meaning; the new ones carry raw wire values — an RFC 3339 string, a Unix integer, a byte count — rather than rendered text. If you parse the JSON, nothing of yours breaks, and that's the interface to move to.

This is a MINOR rather than a MAJOR because the library API didn't change. The same call was made for 3.4.0.

## Added

- `ps` now shows how long a container has been up, with its health in parentheses when it has a healthcheck. The state alone answered "is it on"; the span answers "did it just restart", and the new CREATED column next to it makes that visible — created nine minutes ago, started four seconds ago.
- `images` now shows what each image costs on disk, rendered the way `podman images` and `docker compose images` render it. I measured against both rather than assuming: three significant digits, decimal units.
- `events` now shows when each event happened. The feed carried the timestamp all along and printed nothing, so nothing could be correlated against it.

## Changed

- One formatter now handles every size and duration, total over its input type. `stats` used to stop at TiB, so a petabyte rendered `1024.0TiB` — the arithmetic was right and the unit was wrong. Its own output is otherwise unchanged.
- Durations now read as up to three components that follow the magnitude: `5s`, `1h 5m 3s`, `1y 1mo 5d`. A year is 365 days and a month is 30, so they don't divide evenly, and the output says so rather than hiding it.

## Fixed

- `podup generate` and `podup autostart` print their own usage when a subcommand is missing, instead of the root usage.
- A value one byte short of a unit boundary no longer prints the unit it already left: 1048575 bytes reads `1.0MiB`, not `1024.0KiB`.

## Known limitation

`events` prints its TIME column in UTC and doesn't say so, while `podman events` prints local time with an offset. If you're correlating podup events against `podman events` or `journalctl`, mind the difference. Tracked in #1309; the fix lands in a later release.

Full changelog: [v3.4.1...v3.5.0](https://github.com/Glyndor/podup/compare/v3.4.1...v3.5.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
