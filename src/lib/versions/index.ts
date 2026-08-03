import versions from "@/data/versions.json";

// Displayed release tags, keyed by "<owner>/<repo>". The source of truth is
// src/data/versions.json, kept fresh by the version-bump CI (no network at
// build → reproducible builds, no per-visitor API calls).
const map = versions as Record<string, string>;

// Some tags still carry a "<package>@" prefix from when a repo held more
// than one release lane (e.g. helmly's dashboard/agent split) -- now that
// every component has its own repo, that prefix is stale noise, not signal.
export function getVersion(repo: string): string | null {
	const tag = map[repo] ?? null;
	return tag ? tag.replace(/^[a-z0-9-]+@/i, "") : tag;
}
