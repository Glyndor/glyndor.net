---
urlSlug: podup-1-8-0
locale: en
title: "podup 1.8.0"
description: "Scaled replica names are now always index-suffixed, matching docker/podman-compose naming."
date: 2026-06-29
project: podup
---

podup 1.8.0 is out. One real fix:

- Scaled replica names are now always index-suffixed. Previously the first replica of a scaled service could come back unsuffixed, inconsistent with the rest — naming now matches docker/podman-compose parity.

The rest of this release is CI infra: a nightly + every-PR regression gate for the Podman lane, with transient retry, carried from develop into main.

Full changelog: [v1.7.1...v1.8.0](https://github.com/Glyndor/podup/compare/v1.7.1...v1.8.0).
