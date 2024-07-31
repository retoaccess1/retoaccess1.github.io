export const downloads = [
	{
		id: 1,
		link: "https://github.com/retoaccess1/haveno-reto/releases/latest/download/HavenoInstaller-windows-latest.zip",
		title: "Download for Windows",
	},
	{
		id: 2,
		link: "https://github.com/retoaccess1/haveno-reto/releases/latest/download/haveno_amd64-deb.zip",
		title: "Download for Linux (.deb)",
	},
	{
		id: 3,
		link: "https://github.com/retoaccess1/haveno-reto/releases/latest/download/haveno_x86_64-rpm.zip",
		title: "Download for Linux (.rpm)",
	},
	{
		id: 4,
		link: "https://github.com/retoaccess1/haveno-reto/releases/latest/download/HavenoInstaller-macos-13.zip",
		title: "Download for Mac",
	},
	{
		download: "reto-public",
		id: 5,
		link: "/reto_public.asc",
		title: "Download Public key",
	},
];

interface GitHubRelease {
	tag_name: string;
}
export async function getLatestVersion() {
	const response = await fetch(
		"https://api.github.com/repos/retoaccess1/haveno-reto/releases/latest",
	);
	const data: GitHubRelease = (await response.json()) as GitHubRelease;
	return data.tag_name;
}
