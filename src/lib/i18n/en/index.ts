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
		panel: {
			name: "Glyndor panel",
			tagline: "A secure self-hosted hosting panel.",
			summary:
				"Manage firewalls, ports, SSH, containers and WireGuard tunnels from one place. Built on lightweight native binaries with deep security: secure by default and built to ASVS Level 3. Runs single-server, or controls a fleet of agents over WireGuard and mTLS.",
			features: [
				"Firewall, ports and SSH management",
				"Containers and WireGuard tunnels",
				"Secure by default, ASVS Level 3",
				"Single-server or fleet of agents",
			],
			status: "inDevelopment" as StatusKey,
			repo: "https://github.com/Glyndor/panel",
			components: [
				{
					name: "panel-agent",
					description:
						"Hardened Rust daemon installed on each managed server — runs Ed25519-signed commands and reports telemetry over WireGuard + mTLS. A component of panel, not standalone.",
					repo: "https://github.com/Glyndor/panel-agent",
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
			version: "v0.17.1",
			repo: "https://github.com/Glyndor/podup",
		},
		mail: {
			name: "Glyndor mail",
			tagline: "A headless, self-hosted mail server.",
			summary:
				"SMTP, IMAP and modern email security — DKIM, SPF, DMARC and TLS — exposed through an API and CLI, with no UI to get in the way. Filesystem-only storage, minimal dependencies, and the same security DNA as the rest of Glyndor.",
			features: [
				"SMTP and IMAP4rev2",
				"DKIM, SPF, DMARC and TLS",
				"API-first and CLI-driven",
				"Filesystem storage, no external services",
			],
			status: "inDevelopment" as StatusKey,
			repo: "https://github.com/Glyndor/mail",
			components: [
				{
					name: "mail-panel",
					description:
						"Next.js admin UI on top of the mail API: domains, mailboxes, email security and queues. Pairs with mail; the server stays headless.",
					repo: "https://github.com/Glyndor/mail-panel",
				},
			],
		},
	},
	transparencia: {
		name: "Transparencia",
		tagline: "Follow the trail of Colombia's public money.",
		summary:
			"A traceability platform for public spending: an interactive money map, a live feed of government contracts, automatic risk alerts, and a clean open-data API — turning scattered official sources into something any citizen, journalist or watchdog can actually read. Built on Glyndor's own stack and running on Glyndor Panel.",
		features: [
			"Interactive money map by region",
			"Live government contract feed (SECOP)",
			"Automatic risk scoring and alerts",
			"Public, normalized open-data API",
		],
		scope: "Starts with Colombia · scalable to more countries",
		status: "comingSoon" as StatusKey,
		url: "https://transparencia.glyndor.net",
		repo: "https://github.com/Glyndor/transparencia",
	},
	panelAgent: {
		name: "panel-agent",
		tagline: "The hardened agent behind every managed server.",
		summary:
			"A hardened Rust daemon installed on each server the panel manages. It executes only Ed25519-signed commands and reports telemetry back over WireGuard + mTLS — a component of Glyndor panel, never exposed on its own.",
		features: [
			"Ed25519-signed command execution",
			"WireGuard + mTLS transport",
			"Telemetry and health reporting",
			"Signed, attested self-updates",
		],
		status: "released" as StatusKey,
		repo: "https://github.com/Glyndor/panel-agent",
		componentOf: { name: "Glyndor panel", slug: "panel" },
	},
	mailPanel: {
		name: "mail-panel",
		tagline: "The admin UI for Glyndor mail.",
		summary:
			"A Next.js admin interface on top of the mail server's API: manage domains, mailboxes, email security (DKIM/SPF/DMARC) and queues. The mail server stays headless — mail-panel is just another API consumer, bilingual from day one.",
		features: [
			"Domains and mailboxes",
			"Email security: DKIM, SPF, DMARC",
			"Queue and delivery insight",
			"Bilingual (en + es), API-driven",
		],
		status: "inDevelopment" as StatusKey,
		repo: "https://github.com/Glyndor/mail-panel",
		componentOf: { name: "Glyndor mail", slug: "mail" },
	},
	support: {
		title: "Support Glyndor",
		intro: "Glyndor is open source and self-funded. Donations keep the servers running, the security audits happening, and every project free and open.",
		funds: [
			"Infrastructure for demos and the transparencia platform",
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
		copyright: "Glyndor. Released under the MIT license.",
	},
	language: {
		label: "Language",
	},
};
