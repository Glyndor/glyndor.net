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

// Strip the locale prefix from a pathname, returning the locale-agnostic path.
export function stripLocale(pathname: string): string {
	const [, first, ...rest] = pathname.split("/");
	if (first && isLocale(first)) {
		return `/${rest.join("/")}`.replace(/\/$/, "") || "/";
	}
	return pathname.replace(/\/$/, "") || "/";
}

// Build the URL for a locale-agnostic path under a target locale.
export function localizePath(path: string, locale: Locale): string {
	const clean = path.startsWith("/") ? path : `/${path}`;
	if (locale === defaultLocale) {
		return clean;
	}
	return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}
