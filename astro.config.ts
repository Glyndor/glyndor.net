import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://glyndor.net",
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
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
