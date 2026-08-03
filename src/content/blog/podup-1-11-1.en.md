---
urlSlug: podup-1-11-1
locale: en
title: "podup 1.11.1"
description: "One healthcheck poller now covers all of a container's dependents, the build-context tar is streamed instead of buffered, and releases ship a per-target SBOM."
date: 2026-07-19
project: podup
---

podup 1.11.1 is out. Three things worth calling out:

- Healthcheck polling is now shared: a container with multiple dependents used to get one poller per dependent. Now there's one poller for the container, shared across all of them.
- `up` no longer buffers the build-context tar in memory before sending it. It's streamed instead.
- Each release artifact now ships with a per-target SBOM.

Full changelog: [v1.11.0...v1.11.1](https://github.com/Glyndor/podup/compare/v1.11.0...v1.11.1).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
