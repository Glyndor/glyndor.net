---
urlSlug: podup-1-2-0
locale: en
title: "podup 1.2.0"
description: "Compose depends_on fixes for scaled services and extends, quadlet security_opt mapping, and signed release installers with SBOM/NOTICES."
date: 2026-06-23
project: podup
banner: ../../assets/og/blog/podup-1-2-0.en.png
contributors: ["Jaro-c", "dependabot[bot]"]
---

podup 1.2.0 is out. The highlights:

- Scaled `depends_on` now waits on the first replica instead of racing ahead before any instance is up.
- `depends_on` now unions correctly across `extends`, and top-level `models` merge instead of being dropped, so compose inheritance behaves as written.
- `network_mode: bridge`, `aux_addresses`, and `restart_policy` are now surfaced when they can't be applied, instead of being silently ignored.
- quadlet now maps `security_opt` mask/unmask fields and warns when a field can't be translated, instead of dropping it without a trace.
- Release installers are now signed, and SBOM/NOTICES are covered by SHA256SUMS along with the binaries.
- A round of libpod wire-format fixes: correct keys for `extra_hosts`, `ulimits`, and volume `driver_opts`, plus decomposed `security_opt`, structured `device_cgroup_rule`, and routed CDI devices.

Full changelog: [v1.1.1...v1.2.0](https://github.com/Glyndor/podup/compare/v1.1.1...v1.2.0).

Install or upgrade: see the [podup project page](/projects/podup) for install methods.
