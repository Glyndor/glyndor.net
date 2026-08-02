import { en } from "./en";
import { es } from "./es";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Names shown in the language switcher. Spanish content targets Colombia but
// is labelled simply "Español".
export const localeNames: Record<Locale, string> = {
	en: "English",
	es: "Español",
};

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
	return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}

export function getLocaleFromUrl(url: URL): Locale {
	const [, first] = url.pathname.split("/");
	return first && isLocale(first) ? first : defaultLocale;
}

// Top-level route segments that carry a locale-specific slug, keyed by the
// canonical (English) segment. Product slugs (podup, helmly, ...) are brand
// names and are never translated — only these generic section names are.
const routeSlugs: Record<string, Partial<Record<Locale, string>>> = {
	projects: { es: "proyectos" },
	support: { es: "apoyar" },
};

function translateSegment(segment: string, locale: Locale): string {
	return routeSlugs[segment]?.[locale] ?? segment;
}

function canonicalSegment(segment: string, locale: Locale): string {
	for (const [canonical, byLocale] of Object.entries(routeSlugs)) {
		if (byLocale[locale] === segment) return canonical;
	}
	return segment;
}

// Strip the locale prefix from a pathname, returning the canonical
// (English-slugged) path regardless of which locale's slugs it used.
export function stripLocale(pathname: string): string {
	const [, first, second, ...rest] = pathname.split("/");
	if (first && isLocale(first)) {
		const segments = second ? [canonicalSegment(second, first), ...rest] : [];
		return `/${segments.join("/")}`.replace(/\/$/, "") || "/";
	}
	return pathname.replace(/\/$/, "") || "/";
}

// Build the URL for a canonical (English-slugged) path under a target locale.
export function localizePath(path: string, locale: Locale): string {
	const clean = path.startsWith("/") ? path : `/${path}`;
	const [, first, ...rest] = clean.split("/");
	const segments = first ? [translateSegment(first, locale), ...rest] : [];
	const translated = `/${segments.join("/")}`.replace(/\/$/, "") || "/";
	if (locale === defaultLocale) {
		return translated;
	}
	return translated === "/" ? `/${locale}` : `/${locale}${translated}`;
}
