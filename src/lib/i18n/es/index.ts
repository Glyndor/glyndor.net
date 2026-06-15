import type { Dictionary } from "..";

// Español (Colombia). Mirrors the shape of the English source of truth.
export const es: Dictionary = {
	site: {
		name: "Glyndor",
		tagline: "Infraestructura segura y autoalojada que de verdad es tuya.",
		description:
			"Glyndor crea herramientas de código abierto y enfocadas en seguridad para autoalojamiento: un panel de hosting, un ejecutor de contenedores sin root y un servidor de correo headless.",
	},
	nav: {
		home: "Inicio",
		projects: "Proyectos",
		support: "Apoyar",
		github: "GitHub",
	},
	common: {
		viewProject: "Ver proyecto",
		sourceCode: "Código fuente",
		visitPlatform: "Visitar plataforma",
		platform: "Plataforma",
		runsOn: "Corre en Glyndor Panel",
		learnMore: "Saber más",
		backToProjects: "Volver a proyectos",
		status: "Estado",
		features: "Características",
		components: "Componentes",
		componentOf: "Componente de",
	},
	home: {
		hero: {
			eyebrow: "Código abierto · Seguridad primero",
			title: "Infraestructura tuya,",
			titleAccent: "segura desde el principio.",
			subtitle:
				"Glyndor es una familia de herramientas de código abierto para quienes se autoalojan y para empresas que quieren el control sin renunciar a la seguridad. Endurecidas, livianas y construidas según ASVS nivel 3.",
			primaryCta: "Explorar los proyectos",
			secondaryCta: "Ver en GitHub",
		},
		terminal: {
			heading: "estado en vivo",
			secure: "todo endurecido",
		},
		console: {
			identity: "Infraestructura de código abierto y centrada en seguridad — tuya.",
			hint: "selecciona un proyecto para inspeccionar",
		},
		projects: {
			heading: "Los proyectos",
			subheading:
				"Cada herramienta funciona por sí sola: usa una, o ponlas a trabajar juntas.",
		},
		showcase: {
			heading: "Hecho sobre Glyndor",
			subheading:
				"Las herramientas son la mitad de la historia — esto es lo que construimos encima.",
		},
	},
	projectsIndex: {
		title: "Proyectos",
		subtitle: "Piezas de código abierto para armar tu infraestructura autoalojada.",
	},
	statuses: {
		inDevelopment: "En desarrollo",
		released: "Publicado",
		comingSoon: "Próximamente",
	},
	projects: {
		panel: {
			name: "Glyndor panel",
			tagline: "Un panel de hosting autoalojado y seguro.",
			summary:
				"Administra el firewall, los puertos, SSH, contenedores y túneles WireGuard desde un solo lugar. Hecho con binarios nativos livianos y con seguridad a fondo: seguro desde el principio y construido según ASVS nivel 3. Funciona en un solo servidor, o controla una flota de agentes por WireGuard y mTLS.",
			features: [
				"Gestión de firewall, puertos y SSH",
				"Contenedores y túneles WireGuard",
				"Seguro desde el principio, ASVS nivel 3",
				"Un solo servidor o flota de agentes",
			],
			status: "inDevelopment",
			repo: "https://github.com/Glyndor/panel",
			components: [
				{
					name: "panel-agent",
					description:
						"Daemon en Rust endurecido instalado en cada servidor gestionado — ejecuta comandos firmados con Ed25519 y reporta telemetría por WireGuard + mTLS. Es componente de panel, no funciona solo.",
					repo: "https://github.com/Glyndor/panel-agent",
				},
			],
		},
		podup: {
			name: "podup",
			tagline: "docker-compose, traducido a Podman sin root.",
			summary:
				"podup lee tu docker-compose.yml y lo ejecuta en Podman sin root: es una librería en Rust y también una CLI independiente que puedes adoptar como reemplazo directo de docker-compose. Multiplataforma, con publicaciones firmadas y en camino al empaquetado oficial de Debian y Ubuntu.",
			features: [
				"Reemplazo directo de docker-compose",
				"Podman sin root, seguro desde el principio",
				"CLI independiente y librería en Rust",
				"Publicaciones firmadas y atestadas, multiplataforma",
			],
			status: "released",
			version: "v0.17.1",
			repo: "https://github.com/Glyndor/podup",
		},
		mail: {
			name: "Glyndor mail",
			tagline: "Un servidor de correo autoalojado y headless.",
			summary:
				"SMTP, IMAP y seguridad de correo moderna —DKIM, SPF, DMARC y TLS— expuestos por API y CLI, sin una interfaz que estorbe. Almacenamiento solo en disco, dependencias mínimas y el mismo ADN de seguridad del resto de Glyndor.",
			features: [
				"SMTP e IMAP4rev2",
				"DKIM, SPF, DMARC y TLS",
				"Primero la API, manejado por CLI",
				"Almacenamiento en disco, sin servicios externos",
			],
			status: "inDevelopment",
			repo: "https://github.com/Glyndor/mail",
			components: [
				{
					name: "mail-panel",
					description:
						"UI de administración en Next.js sobre la API de mail: dominios, buzones, seguridad de correo y colas. Acompaña a mail; el servidor sigue headless.",
					repo: "https://github.com/Glyndor/mail-panel",
				},
			],
		},
	},
	transparencia: {
		name: "Transparencia",
		tagline: "Sigue el rastro del dinero público de Colombia.",
		summary:
			"Una plataforma de trazabilidad del gasto público: mapa interactivo del dinero, feed en vivo de contratos del Estado, alertas automáticas de riesgo y una API de datos abiertos limpios — convirtiendo fuentes oficiales dispersas en algo que cualquier ciudadano, periodista o veedor pueda leer de verdad. Hecha sobre el stack de Glyndor y corriendo en Glyndor Panel.",
		features: [
			"Mapa interactivo del dinero por región",
			"Feed en vivo de contratos del Estado (SECOP)",
			"Score y alertas de riesgo automáticas",
			"API pública de datos abiertos normalizados",
		],
		scope: "Empieza con Colombia · escalable a más países",
		status: "comingSoon",
		url: "https://transparencia.glyndor.net",
		repo: "https://github.com/Glyndor/transparencia",
	},
	panelAgent: {
		name: "panel-agent",
		tagline: "El agente endurecido detrás de cada servidor gestionado.",
		summary:
			"Un daemon en Rust endurecido instalado en cada servidor que administra el panel. Solo ejecuta comandos firmados con Ed25519 y reporta telemetría de vuelta por WireGuard + mTLS — es componente de Glyndor panel, nunca se expone solo.",
		features: [
			"Ejecución de comandos firmados con Ed25519",
			"Transporte por WireGuard + mTLS",
			"Telemetría y reporte de salud",
			"Auto-actualizaciones firmadas y atestadas",
		],
		status: "released",
		repo: "https://github.com/Glyndor/panel-agent",
		componentOf: { name: "Glyndor panel", slug: "panel" },
	},
	mailPanel: {
		name: "mail-panel",
		tagline: "La UI de administración de Glyndor mail.",
		summary:
			"Una interfaz de administración en Next.js sobre la API del servidor de correo: gestiona dominios, buzones, seguridad de correo (DKIM/SPF/DMARC) y colas. El servidor sigue headless — mail-panel es solo otro consumidor de la API, bilingüe desde el primer día.",
		features: [
			"Dominios y buzones",
			"Seguridad de correo: DKIM, SPF, DMARC",
			"Visibilidad de colas y entrega",
			"Bilingüe (en + es), manejado por API",
		],
		status: "inDevelopment",
		repo: "https://github.com/Glyndor/mail-panel",
		componentOf: { name: "Glyndor mail", slug: "mail" },
	},
	support: {
		title: "Apoyar a Glyndor",
		intro: "Glyndor es código abierto y se financia solo. Las donaciones mantienen los servidores andando, las auditorías de seguridad al día, y cada proyecto libre y abierto.",
		funds: [
			"Infraestructura para demos y la plataforma transparencia",
			"Tiempo para desarrollo, auditorías y publicaciones",
			"Mantener cada proyecto libre y de código abierto",
		],
		patreon: {
			label: "patreon",
			description: "Apoyo mensual — niveles y beneficios.",
			url: "https://patreon.com/Glyndor",
		},
		cta: "Apóyanos en Patreon",
		thanks: "Cada aporte cuenta. Gracias.",
	},
	footer: {
		tagline: "Seguro, autoalojado, código abierto.",
		madeWith: "Construido a la vista de todos en GitHub.",
		sections: {
			projects: "Proyectos",
			resources: "Recursos",
		},
		links: {
			github: "GitHub",
			documentation: "Documentación",
		},
		copyright: "Glyndor. Publicado bajo la licencia Apache 2.0.",
	},
	language: {
		label: "Idioma",
	},
};
