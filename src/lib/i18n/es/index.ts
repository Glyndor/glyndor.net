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
			identities: [
				"Infraestructura de código abierto y centrada en seguridad — tuya.",
				"Autoalojada. Reforzada por defecto.",
				"Construida a nivel ASVS 3, no solo prometida.",
			],
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
		tree: {
			helmlyAgent: "componente · agente firmado por WireGuard + mTLS",
			epistlePanel: "componente · UI de administración sobre la API de epistle",
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
		helmly: {
			name: "helmly",
			tagline: "Un panel de hosting autoalojado y seguro.",
			summary:
				"helmly administra el firewall, los puertos, SSH, contenedores y túneles WireGuard desde un solo lugar — una alternativa autoalojada a cPanel/Plesk/Coolify. Hecho con Rust + Next.js, seguro desde el principio y construido según ASVS nivel 3. Funciona en un solo servidor, o controla una flota de agentes por WireGuard y mTLS.",
			features: [
				"Gestión de firewall, puertos y SSH",
				"Contenedores y túneles WireGuard",
				"Seguro desde el principio, ASVS nivel 3",
				"Un solo servidor o flota de agentes",
			],
			status: "inDevelopment",
			repo: "https://github.com/Glyndor/helmly",
			components: [
				{
					name: "helmly-agent",
					description:
						"Daemon en Rust endurecido instalado en cada servidor gestionado — ejecuta comandos firmados con Ed25519 y reporta telemetría por WireGuard + mTLS. Es componente de helmly, no funciona solo.",
					repo: "https://github.com/Glyndor/helmly-agent",
					status: "released",
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
			repo: "https://github.com/Glyndor/podup",
		},
		epistle: {
			name: "epistle",
			tagline: "Un servidor de correo autoalojado y headless.",
			summary:
				"SMTP, IMAP y seguridad de correo moderna —DKIM, SPF, DMARC y TLS— expuestos por API y CLI, sin una interfaz que estorbe. Funciona solo o integrado con helmly. Almacenamiento solo en disco, dependencias mínimas y el mismo ADN de seguridad del resto de Glyndor.",
			features: [
				"SMTP e IMAP4rev2",
				"DKIM, SPF, DMARC y TLS",
				"Primero la API, manejado por CLI",
				"Almacenamiento en disco, sin servicios externos",
			],
			status: "released",
			repo: "https://github.com/Glyndor/epistle",
			components: [
				{
					name: "epistle-panel",
					description:
						"UI de administración en Next.js sobre la API de epistle: dominios, buzones, seguridad de correo y colas. Acompaña a epistle; el servidor sigue headless.",
					repo: "https://github.com/Glyndor/epistle-panel",
					status: "inDevelopment",
				},
			],
		},
		authcore: {
			name: "authcore",
			tagline: "Autenticación lista para usar en Go, segura por defecto.",
			summary:
				"authcore es una librería en Go, independiente, para autenticación: hash de contraseñas con Argon2id, JWT EdDSA con rotación de refresh, API keys opacas, login social OIDC + OAuth2, y validación de email/usuario — segura por defecto, sin código de arranque. No es un servicio que corres, es una dependencia.",
			features: [
				"Hash de contraseñas con Argon2id",
				"JWT EdDSA con rotación de refresh",
				"Login social OIDC + OAuth2",
				"API keys opacas, sin código de arranque",
			],
			status: "released",
			url: "https://pkg.go.dev/github.com/Glyndor/authcore",
			repo: "https://github.com/Glyndor/authcore",
		},
		unitpm: {
			name: "unitpm",
			tagline: "Una alternativa a PM2, nativa de systemd.",
			summary:
				"unitpm administra procesos de larga duración en Linux sin un daemon propio en segundo plano — controla systemd directamente, así que los procesos supervisados sobreviven a un cierre de unitpm o a un reinicio. CLI y librería, escrito en Go, sin sobrecarga por diseño.",
			features: [
				"Nativo de systemd, sin daemon propio",
				"Alternativa directa a PM2 / Supervisor",
				"CLI y librería, escrito en Go",
				"Supervisión de procesos sin sobrecarga",
			],
			status: "inDevelopment",
			repo: "https://github.com/Glyndor/unitpm",
		},
		klyradb: {
			name: "klyradb",
			tagline: "Un gestor de bases de datos de escritorio, como DBngin.",
			summary:
				"klyradb es una app de escritorio nativa para levantar instancias aisladas de PostgreSQL, MySQL, MariaDB, Redis y MongoDB en Linux — inicia, detén e inspecciona bases de datos locales sin armar archivos Compose ni unidades de systemd a mano. Los motores se descargan y corren bajo demanda.",
			features: [
				"PostgreSQL, MySQL, MariaDB, Redis, MongoDB",
				"Instancias locales, aisladas y desechables",
				"App de escritorio nativa, sin Docker",
				"Motores que se descargan bajo demanda",
			],
			status: "released",
			url: "https://snapcraft.io/klyradb",
			repo: "https://github.com/Glyndor/klyradb",
		},
		specio: {
			name: "specio",
			tagline: "Descubre con qué está hecho un sitio web.",
			summary:
				"specio es una extensión de Chrome que detecta las tecnologías detrás de cualquier sitio web — CMS, frameworks, analítica, CDNs, servidores, fuentes y más — directo desde la barra de herramientas. Gratis, multilingüe y de código abierto: una alternativa a Wappalyzer sin cuenta y sin rastreo.",
			features: [
				"Detección de CMS, framework y stack",
				"Huella de analítica, CDN y fuentes",
				"Gratis, multilingüe, sin cuenta",
				"Manifest V3, código abierto",
			],
			status: "released",
			repo: "https://github.com/Glyndor/specio",
		},
		viden: {
			name: "viden",
			tagline: "Encuentra y descarga el video de cualquier página.",
			summary:
				"viden es una extensión de Chrome que detecta y descarga el video que se reproduce en una página — incluyendo streams ocultos u ofuscados por MP4 progresivo, HLS o DASH. Gratis, sin límites, multilingüe, y nunca pide una cuenta.",
			features: [
				"Detecta streams de video ocultos u ofuscados",
				"MP4 progresivo, HLS y DASH",
				"Gratis y sin límites, sin cuenta",
				"Manifest V3, multilingüe",
			],
			status: "inDevelopment",
			repo: "https://github.com/Glyndor/viden",
		},
	},
	helmlyAgent: {
		name: "helmly-agent",
		tagline: "El agente endurecido detrás de cada servidor gestionado.",
		summary:
			"Un daemon en Rust endurecido instalado en cada servidor que administra helmly. Solo ejecuta comandos firmados con Ed25519 y reporta telemetría de vuelta por WireGuard + mTLS — es componente de helmly, nunca se expone solo.",
		features: [
			"Ejecución de comandos firmados con Ed25519",
			"Transporte por WireGuard + mTLS",
			"Telemetría y reporte de salud",
			"Auto-actualizaciones firmadas y atestadas",
		],
		status: "released",
		repo: "https://github.com/Glyndor/helmly-agent",
		componentOf: { name: "helmly", slug: "helmly" },
	},
	epistlePanel: {
		name: "epistle-panel",
		tagline: "La UI de administración de epistle.",
		summary:
			"Una interfaz de administración en Next.js sobre la API de epistle: gestiona dominios, buzones, seguridad de correo (DKIM/SPF/DMARC) y colas. El servidor sigue headless — epistle-panel es solo otro consumidor de la API, bilingüe desde el primer día.",
		features: [
			"Dominios y buzones",
			"Seguridad de correo: DKIM, SPF, DMARC",
			"Visibilidad de colas y entrega",
			"Bilingüe (en + es), manejado por API",
		],
		status: "inDevelopment",
		repo: "https://github.com/Glyndor/epistle-panel",
		componentOf: { name: "epistle", slug: "epistle" },
	},
	support: {
		title: "Apoyar a Glyndor",
		intro: "Glyndor es código abierto y se financia solo. Las donaciones mantienen los servidores andando, las auditorías de seguridad al día, y cada proyecto libre y abierto.",
		funds: [
			"Infraestructura para demos y despliegues públicos",
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
		copyright: "Glyndor. Publicado bajo la licencia MIT.",
	},
	language: {
		label: "Idioma",
	},
};
