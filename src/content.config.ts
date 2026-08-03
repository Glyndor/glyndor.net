// `z` re-exported from astro:content is soft-deprecated (astro check hints
// it) in favor of importing zod directly, but zod isn't a declared
// dependency of this project -- only a transitive one of astro itself.
// Keep using astro:content's export rather than importing an undeclared
// package that a future astro upgrade could silently drop.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Post files are named "<slug>.<locale>.md" so an English/Spanish pair
// shares a URL slug but is a distinct entry -- no post is required to
// have both locales at once. `urlSlug`/`locale` are explicit frontmatter
// fields, read directly instead of parsed from the filename/id: Astro's
// default glob-loader id generation strips dots ("foo.en.md" -> id
// "fooen", not splittable), AND treats a field literally named `slug`
// as the entry id -- which would collide the en/es pair into one entry
// since they share the same URL slug. Hence `urlSlug`, not `slug`.
const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: new URL("./content/blog", import.meta.url) }),
	schema: ({ image }) =>
		z.object({
			urlSlug: z.string(),
			locale: z.enum(["en", "es"]),
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			// A product slug this post is about (podup, helmly, ...), or
			// omitted for general news. Drives the /blog filter and links
			// the post back to its project page.
			project: z.string().optional(),
			// Falls back to the general org banner when omitted.
			banner: image().optional(),
		}),
});

export const collections = { blog };
