// English is the base language and the source of truth for every key.
// Other locales mirror this shape (see ../es).
export type StatusKey = "inDevelopment" | "released" | "comingSoon";

export const en = {
	site: {
		name: "Glyndor",
		tagline: "Secure, self-hosted infrastructure you actually own.",
		description:
			"Glyndor builds open-source, security-first tools for self-hosting: a hosting panel, a rootless container runner, and a headless mail server.",
	},
	nav: {
		home: "Home",
		projects: "Projects",
		support: "Support",
		github: "GitHub",
	},
	common: {
		viewProject: "View project",
		sourceCode: "Source code",
		visitPlatform: "Visit platform",
		platform: "Platform",
		runsOn: "Runs on Glyndor Panel",
		learnMore: "Learn more",
		backToProjects: "Back to projects",
		status: "Status",
		features: "Features",
		components: "Components",
		componentOf: "Component of",
	},
	home: {
		hero: {
			eyebrow: "Open source · Security first",
			title: "Infrastructure you own,",
			titleAccent: "secure by default.",
			subtitle:
				"Glyndor is a family of open-source tools for self-hosters and companies who want control without giving up security. Hardened, lightweight, and built to ASVS Level 3.",
			primaryCta: "Explore the projects",
			secondaryCta: "View on GitHub",
		},
		terminal: {
			heading: "live status",
			secure: "all systems hardened",
		},
		console: {
			identity: "Open-source, security-first infrastructure — yours to own.",
			hint: "select a project to inspect",
		},
		projects: {
			heading: "The projects",
			subheading: "Each tool stands on its own — use one, or run them together.",
		},
		showcase: {
			heading: "Built on Glyndor",
			subheading: "Tools are only half the story — here's what we build on top of them.",
		},
	},
	projectsIndex: {
		title: "Projects",
		subtitle: "Open-source building blocks for self-hosted infrastructure.",
	},
	statuses: {
		inDevelopment: "In development",
		released: "Released",
		comingSoon: "Coming soon",
	},
	projects: {
		helmly: {
			name: "helmly",
			tagline: "A secure self-hosted hosting panel.",
			summary:
				"helmly manages firewalls, ports, SSH, containers and WireGuard tunnels from one place — a cPanel/Plesk/Coolify alternative you host yourself. Built on lightweight Rust + Next.js, secure by default and built to ASVS Level 3. Runs single-server, or controls a fleet of agents over WireGuard and mTLS.",
			features: [
				"Firewall, ports and SSH management",
				"Containers and WireGuard tunnels",
				"Secure by default, ASVS Level 3",
				"Single-server or fleet of agents",
			],
			status: "inDevelopment" as StatusKey,
			repo: "https://github.com/Glyndor/helmly",
			components: [
				{
					name: "helmly-agent",
					description:
						"Hardened Rust daemon installed on each managed server — runs Ed25519-signed commands and reports telemetry over WireGuard + mTLS. A component of helmly, not standalone.",
					repo: "https://github.com/Glyndor/helmly-agent",
				},
			],
		},
		podup: {
			name: "podup",
			tagline: "docker-compose, translated to rootless Podman.",
			summary:
				"podup reads your docker-compose.yml and runs it on rootless Podman — both a Rust library and a standalone CLI you can adopt as a drop-in docker-compose replacement. Cross-platform, signed releases, and headed for official Debian and Ubuntu packaging.",
			features: [
				"Drop-in docker-compose replacement",
				"Rootless Podman, secure by default",
				"Standalone CLI and Rust library",
				"Signed, attested cross-platform releases",
			],
			status: "released" as StatusKey,
			repo: "https://github.com/Glyndor/podup",
		},
		epistle: {
			name: "epistle",
			tagline: "A headless, self-hosted mail server.",
			summary:
				"SMTP, IMAP and modern email security — DKIM, SPF, DMARC and TLS — exposed through an API and CLI, with no UI to get in the way. Runs standalone or integrated with helmly. Filesystem-only storage, minimal dependencies, and the same security DNA as the rest of Glyndor.",
			features: [
				"SMTP and IMAP4rev2",
				"DKIM, SPF, DMARC and TLS",
				"API-first and CLI-driven",
				"Filesystem storage, no external services",
			],
			status: "released" as StatusKey,
			repo: "https://github.com/Glyndor/epistle",
			components: [
				{
					name: "epistle-panel",
					description:
						"Next.js admin UI on top of the epistle API: domains, mailboxes, email security and queues. Pairs with epistle; the server stays headless.",
					repo: "https://github.com/Glyndor/epistle-panel",
				},
			],
		},
		authcore: {
			name: "authcore",
			tagline: "Drop-in authentication for Go, secure by default.",
			summary:
				"authcore is a standalone Go library for authentication: Argon2id password hashing, EdDSA JWTs with refresh rotation, opaque API keys, OIDC + OAuth2 social login, and email/username validation — secure by default, zero boilerplate to wire up. No server to run; it's a dependency, not a service.",
			features: [
				"Argon2id password hashing",
				"EdDSA JWTs with refresh rotation",
				"OIDC + OAuth2 social login",
				"Opaque API keys, zero boilerplate",
			],
			status: "released" as StatusKey,
			url: "https://pkg.go.dev/github.com/Glyndor/authcore",
			repo: "https://github.com/Glyndor/authcore",
		},
		unitpm: {
			name: "unitpm",
			tagline: "A drop-in PM2 alternative, systemd-native.",
			summary:
				"unitpm manages long-running processes on Linux without a background daemon of its own — it drives systemd directly, so supervised processes survive a unitpm crash or reboot. CLI and library, written in Go, zero-overhead by design.",
			features: [
				"systemd-native, no daemon of its own",
				"Drop-in alternative to PM2 / Supervisor",
				"CLI and library, written in Go",
				"Zero-overhead process supervision",
			],
			status: "inDevelopment" as StatusKey,
			repo: "https://github.com/Glyndor/unitpm",
		},
		klyradb: {
			name: "klyradb",
			tagline: "A desktop DB manager for Linux, like DBngin.",
			summary:
				"klyradb is a native desktop app for spinning up isolated PostgreSQL, MySQL, MariaDB, Redis and MongoDB instances on Linux — start, stop and inspect local databases without hand-rolling Compose files or systemd units. Engines download and run on demand.",
			features: [
				"PostgreSQL, MySQL, MariaDB, Redis, MongoDB",
				"Isolated, disposable local instances",
				"Native desktop app, no Docker required",
				"Engines download on demand",
			],
			status: "released" as StatusKey,
			url: "https://snapcraft.io/klyradb",
			repo: "https://github.com/Glyndor/klyradb",
		},
		specio: {
			name: "specio",
			tagline: "See what a website is built with.",
			summary:
				"specio is a Chrome extension that detects the technologies behind any website — CMS, frameworks, analytics, CDNs, servers, fonts and more — right from the toolbar. Free, multilingual and open source: a Wappalyzer alternative with no account and no tracking.",
			features: [
				"CMS, framework and stack detection",
				"Analytics, CDN and font fingerprinting",
				"Free, multilingual, no account",
				"Manifest V3, open source",
			],
			status: "released" as StatusKey,
			repo: "https://github.com/Glyndor/specio",
		},
		viden: {
			name: "viden",
			tagline: "Find and download the video on any page.",
			summary:
				"viden is a Chrome extension that detects and downloads the video playing on a page — including hidden or obscured streams over progressive MP4, HLS or DASH. Free, unlimited, multilingual, and it never asks for an account.",
			features: [
				"Detects hidden and obscured video streams",
				"Progressive MP4, HLS and DASH",
				"Free and unlimited, no account",
				"Manifest V3, multilingual",
			],
			status: "inDevelopment" as StatusKey,
			repo: "https://github.com/Glyndor/viden",
		},
	},
	helmlyAgent: {
		name: "helmly-agent",
		tagline: "The hardened agent behind every managed server.",
		summary:
			"A hardened Rust daemon installed on each server helmly manages. It executes only Ed25519-signed commands and reports telemetry back over WireGuard + mTLS — a component of helmly, never exposed on its own.",
		features: [
			"Ed25519-signed command execution",
			"WireGuard + mTLS transport",
			"Telemetry and health reporting",
			"Signed, attested self-updates",
		],
		status: "released" as StatusKey,
		repo: "https://github.com/Glyndor/helmly-agent",
		componentOf: { name: "helmly", slug: "helmly" },
	},
	epistlePanel: {
		name: "epistle-panel",
		tagline: "The admin UI for epistle.",
		summary:
			"A Next.js admin interface on top of epistle's API: manage domains, mailboxes, email security (DKIM/SPF/DMARC) and queues. The mail server stays headless — epistle-panel is just another API consumer, bilingual from day one.",
		features: [
			"Domains and mailboxes",
			"Email security: DKIM, SPF, DMARC",
			"Queue and delivery insight",
			"Bilingual (en + es), API-driven",
		],
		status: "inDevelopment" as StatusKey,
		repo: "https://github.com/Glyndor/epistle-panel",
		componentOf: { name: "epistle", slug: "epistle" },
	},
	support: {
		title: "Support Glyndor",
		intro: "Glyndor is open source and self-funded. Donations keep the servers running, the security audits happening, and every project free and open.",
		funds: [
			"Infrastructure for demos and public deployments",
			"Time for development, audits and releases",
			"Keeping every project free and open source",
		],
		patreon: {
			label: "patreon",
			description: "Monthly backing — tiers and perks.",
			url: "https://patreon.com/Glyndor",
		},
		cta: "Back us on Patreon",
		thanks: "Every contribution counts. Thank you.",
	},
	footer: {
		tagline: "Secure, self-hosted, open source.",
		madeWith: "Built in the open on GitHub.",
		sections: {
			projects: "Projects",
			resources: "Resources",
		},
		links: {
			github: "GitHub",
			documentation: "Documentation",
		},
		copyright: "Glyndor. Released under the Apache 2.0 license.",
	},
	language: {
		label: "Language",
	},
};
