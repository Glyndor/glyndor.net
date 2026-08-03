// Real, verified install commands per product — never a placeholder or a
// guessed channel. A product with no working public install path (early
// dev, pending rename, no store listing yet) simply has no entry here.
export type InstallOS = "linux" | "macos" | "windows" | "go";

export interface InstallMethod {
	label: string;
	os: InstallOS;
	// Human-readable target, since the package-manager name alone doesn't
	// tell a reader which OS/distro it's for (e.g. "apt" -> Ubuntu/Debian).
	platform: string;
	command: string;
}

export const installMethods: Record<string, InstallMethod[]> = {
	podup: [
		{
			label: "apt",
			os: "linux",
			platform: "Ubuntu / Debian",
			command:
				"curl -fsSLO https://apt.glyndor.net/glyndor-archive-keyring.deb &&\nsudo dpkg -i glyndor-archive-keyring.deb &&\nrm glyndor-archive-keyring.deb &&\nsudo apt update &&\nsudo apt install podup",
		},
		{
			label: "brew",
			os: "macos",
			platform: "macOS",
			command: "brew install glyndor/tap/podup",
		},
		{
			label: "scoop",
			os: "windows",
			platform: "Windows",
			command:
				"scoop bucket add glyndor https://github.com/Glyndor/scoop-bucket\nscoop install podup",
		},
	],
	helmly: [
		{
			label: "install script",
			os: "linux",
			platform: "Linux",
			command:
				"curl -fsSL https://raw.githubusercontent.com/Glyndor/helmly/main/install.sh | sudo bash",
		},
	],
	epistle: [
		{
			label: "install script",
			os: "linux",
			platform: "Linux",
			command: "curl -fsSL https://glyndor.net/install/epistle | sh",
		},
	],
	authcore: [
		{
			label: "go get",
			os: "go",
			platform: "Any OS with Go",
			command: "go get github.com/Glyndor/authcore",
		},
	],
	klyradb: [
		{
			label: "snap",
			os: "linux",
			platform: "Linux (snapd)",
			command: "sudo snap install klyradb",
		},
	],
};
