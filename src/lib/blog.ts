import { getCollection } from "astro:content";
import type { Locale } from "@/lib/i18n";

export async function getPostsByLocale(locale: Locale, project?: string) {
	const entries = await getCollection(
		"blog",
		(entry) => entry.data.locale === locale && (!project || entry.data.project === project),
	);
	return entries
		.map((entry) => ({ slug: entry.data.urlSlug, data: entry.data }))
		.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// Distinct project slugs with at least one post in this locale, in the
// order the /blog filter row should list them.
export async function getBlogProjects(locale: Locale): Promise<string[]> {
	const entries = await getCollection("blog", (entry) => entry.data.locale === locale);
	const projects = new Set<string>();
	for (const entry of entries) {
		if (entry.data.project) projects.add(entry.data.project);
	}
	return Array.from(projects).sort();
}

// Every release-note post title ends in its semver ("podup 3.5.0"); pull
// that back out to badge the shared banner image per version.
export function extractVersion(title: string): string | null {
	return title.match(/\d+\.\d+\.\d+$/)?.[0] ?? null;
}
