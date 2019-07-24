// import axios from "axios";
// import cheerio from "cheerio";
const axios = require("axios");
const cheerio = require("cheerio");

const API_URL =
	"https://www.ssbwiki.com/api.php?format=json&action=parse&page=";

// Retrieve smasher data from SmashWiki
async function getSmasher(name) {
	let res1 = await axios.get(`${API_URL}${name}`);
	if (res1.data.error) return null;

	let pageName = res1.data.parse.links[0]["*"];
	let res2 = await axios.get(`${API_URL}${pageName}`);

	let $ = cheerio.load(res2.data.parse.text["*"]);
	let fullName = $(".infobox th:contains('Real')")
		.next()
		.text();

	return {
		name: fullName
	};
}

// export default getSmasher;
(async function() {
	// eslint-disable-next-line no-console
	console.log(await getSmasher("mango"));
})();
