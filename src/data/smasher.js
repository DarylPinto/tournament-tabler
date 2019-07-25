import axios from "axios";
import cheerio from "cheerio";

const SEARCH_URL =
	"https://www.ssbwiki.com/api.php?format=json&action=query&list=search&srsearch=smasher:";
const PAGE_URL =
	"https://www.ssbwiki.com/api.php?format=json&action=parse&pageid=";

// Retrieve and organize smasher data by scraping SmashWiki page
export default async function(name) {
	// Query the API with `name`
	let search_res = await axios.get(`${SEARCH_URL}${name}`);
	if (search_res.data.query.searchinfo.totalhits === 0) return null;
	let page_id = search_res.data.query.search[0].pageid;

	// If there's a page name that matches the query, get the data from the wiki
	let page_res = await axios.get(`${PAGE_URL}${page_id}`);
	let $ = cheerio.load(page_res.data.parse.text["*"]);

	// Scrape the wiki page HTML for relevant data
	const mains = game => {
		const el = $(`.infobox th:contains('${game}'):contains('main')`);
		if (el.length === 0) return [];
		return el
			.next()
			.text()
			.trim()
			.split(",")
			.map(m => m.trim());
	};

	const tag = page_res.data.parse.title.split(":")[1];

	const fullName = $(".infobox th:contains('Real')")
		.next()
		.text()
		.replace("\n", "");

	const sponsorName = $(".infobox th:contains('Sponsor(s)')")
		.next()
		.text()
		.trim()
		.split(",")[0]
		.replace(/\s+/, "+");

	const sponsor = sponsorName
		? `https://duckduckgo.com/?q=!ducky+${sponsorName}+eSports+website`
		: null;

	const twitter = $("li a.external:contains('Twitter')").attr("href");
	const twitch = $("li a.external:contains('Twitch')").attr("href");
	const wiki = `https://www.ssbwiki.com/Smasher:${tag}`;

	// Return structured data with relevant info
	return {
		tag: tag,
		name: fullName,
		mains: {
			ultimate: mains("Ultimate"),
			smash4: mains("SSB4"),
			pm: mains("Project M"),
			brawl: mains("Brawl"),
			melee: mains("Melee"),
			ssb64: mains("SSB64")
		},
		links: {
			twitter: twitter ? twitter : null,
			twitch: twitch ? twitch : null,
			wiki,
			sponsor
		}
	};
}
