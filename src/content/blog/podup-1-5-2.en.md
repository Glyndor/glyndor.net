---
urlSlug: podup-1-5-2
locale: en
title: "podup 1.5.2"
description: "podup is now validated against Podman 6.0.0 in CI, and a new daily job watches for newer packaged Podman releases."
date: 2026-06-27
project: podup
---

podup 1.5.2 is out. Two things worth calling out:

- podup is now validated against Podman 6.0.0 in CI. The support matrix now covers both Podman 5 and Podman 6.
- A new `podman-version-watch` job runs daily on `main` and notifies when a newer packaged Podman version shows up.

The README also got redesigned as a short, visual landing page. Everything else in this release is CI infrastructure.

Full changelog: [v1.5.1...v1.5.2](https://github.com/Glyndor/podup/compare/v1.5.1...v1.5.2).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
