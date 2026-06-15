import versions from "@/data/versions.json";

// Displayed release tags, keyed by "<owner>/<repo>". The source of truth is
// src/data/versions.json, kept fresh by the version-bump CI (no network at
// build → reproducible builds, no per-visitor API calls).
const map = versions as Record<string, string>;

export function getVersion(repo: string): string | null {
	return map[repo] ?? null;
}
