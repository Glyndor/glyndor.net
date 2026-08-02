import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { defaultLocale, locales, localizePath, stripLocale } from "./src/lib/i18n";

const site = "https://glyndor.net";

// Match the trailing slash every built page actually has (dist/<path>/index.html).
function withTrailingSlash(path: string): string {
	return path === "/" ? path : `${path}/`;
}

// https://astro.build/config
export default defineConfig({
	site,
	server: {
		port: 15694,
	},
	i18n: {
		defaultLocale: "en",
		locales: ["en", "es"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			// The en/es routes use locale-specific slugs (proyectos, apoyar — see
			// src/lib/i18n), so the sitemap integration's own prefix-based i18n
			// pairing can't match alternates; pair them by hand with the same
			// canonical-path logic the pages themselves use.
			serialize(item) {
				const url = new URL(item.url);
				const canonicalPath = stripLocale(url.pathname);
				const links: { lang: string; url: string }[] = locales.map((locale) => ({
					lang: locale,
					url: new URL(withTrailingSlash(localizePath(canonicalPath, locale)), site).href,
				}));
				links.push({
					lang: "x-default",
					url: new URL(
						withTrailingSlash(localizePath(canonicalPath, defaultLocale)),
						site,
					).href,
				});
				return { ...item, links };
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
