const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const port = 3001;

//Useful stack trace for unhandledRejection errors
// eslint-disable-next-line no-console
process.on("unhandledRejection", r => console.error(r));

const WIKI_SEARCH_URL =
	"https://www.ssbwiki.com/api.php?format=json&action=query&list=search&srsearch=smasher:";
const WIKI_PAGE_ID_URL =
	"https://www.ssbwiki.com/api.php?format=json&action=parse&pageid=";
const WIKI_PAGE_NAME_URL =
	"https://www.ssbwiki.com/api.php?format=json&action=parse&page=";

app.get("/", (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	return res.status(400).send({ message: "Invalid route", error: 400 });
});

app.get("/:smasher", async (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");

	// Query the API with `smasher` request param
	let search_res = await axios.get(`${WIKI_SEARCH_URL}${req.params.smasher}`);
	if (search_res.data.query.searchinfo.totalhits === 0) {
		return res.status(404).send({ message: "Not Found", error: 404 });
	}
	let page_id = search_res.data.query.search[0].pageid;

	// If there's a page name that matches the query, get the data from the wiki
	let page_res = await axios.get(`${WIKI_PAGE_ID_URL}${page_id}`);
	let $ = cheerio.load(page_res.data.parse.text["*"]);

	// If the page is a intended meant to redirect wiki readers, follow the redirect link
	if ($(".redirectText").length > 0) {
		let redirect_page_name = $(".redirectText li a").attr("title");
		page_res = page_res = await axios.get(
			`${WIKI_PAGE_NAME_URL}${redirect_page_name}`
		);
		$ = cheerio.load(page_res.data.parse.text["*"]);
	}

	// Scrape the wiki page HTML for relevant data
	const mains = game => {
		const el = $(`.infobox th:contains('${game}'):contains('main')`).first();
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

	let sponsorName = $(".infobox th:contains('Sponsor(s)')")
		.next()
		.text()
		.trim()
		.split(",")[0]
		.replace(/\s+/, "+");

	// prettier-ignore
	const sponsor = sponsorName
		? `https://duckduckgo.com/?q=!ducky+${encodeURIComponent(sponsorName)}+gaming+website`
		: null;

	const twitter = $("li a.external:contains('Twitter')").attr("href");
	const twitch = $("li a.external:contains('Twitch')").attr("href");
	const wiki = `https://www.ssbwiki.com/Smasher:${encodeURIComponent(tag)}`;

	// Return structured data with relevant info
	return res.send({
		tag: tag,
		name: fullName,
		mains: {
			s64: mains("SSB64"),
			melee: mains("Melee"),
			brawl: mains("Brawl"),
			pm: mains("Project M"),
			smash4: mains("SSB4"),
			ultimate: mains("Ultimate")
		},
		twitter: twitter ? twitter : null,
		twitch: twitch ? twitch : null,
		wiki,
		team: sponsor
	});
});

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Listening on ${port}`);
});
