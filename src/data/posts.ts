const MAX_POSTS = 10;
const allPosts = [
	{
		date: "2024-04-28",
		id: 1,
		link: "https://blog.nihilism.network/servers/monero2024/index.html",
		title: "How to acquire and use Monero",
	},
	{
		date: "2024-05-14",
		id: 2,
		link: "https://blog.nihilism.network/servers/haveno-client-f2f/index.html",
		title: "Haveno Decentralised Exchange direct Fiat -> XMR transaction",
	},
	{
		date: "2024-05-19",
		id: 3,
		link: "https://blog.nihilism.network/servers/haveno-arbitrator/index.html",
		title: "Haveno DEX Dispute resolution (Fiat -> XMR)",
	},
	{
		date: " 2024-05-20",
		id: 4,
		link: "https://blog.nihilism.network/servers/haveno-sepa/index.html",
		title: "Haveno DEX Bank Transfer (ex: SEPA) -> XMR transaction",
	},
	{
		date: "2024-05-19",
		id: 5,
		link: "https://blog.nihilism.network/servers/haveno-cashbymail/index.html",
		title: "Haveno DEX Cash By Mail -> XMR transaction",
	},
];

interface Posts {
	date: string;
	id: number;
	link: string;
	title: string;
}

function sortPostsByDate(posts: Posts[]) {
	const sortedPosts = posts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
	return sortedPosts.slice(0, MAX_POSTS);
}

export const posts = sortPostsByDate(allPosts);
