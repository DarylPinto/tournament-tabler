/**
 * PLAYERS
 */
export const players = [
	{
		tag: "MKLeo",
		mains: {
			ultimate: ["Joker", null]
		},
		name: "Leonardo Lopez Perez",
		twitch: "mkleo_fox",
		twitter: "Mkleosb",
		wiki: "https://liquipedia.net/smash/MKLeo",
		sponsor: "https://twitter.com/echofoxgg"
	},
	{
		tag: "Tweek",
		mains: {
			ultimate: ["Wario", null]
		},
		name: "Gavin Dempsey",
		twitch: "tweekssb",
		twitter: "TweekSsb",
		wiki: "https://liquipedia.net/smash/Tweek",
		sponsor: "https://tsm.gg/"
	}
];

/**
 * MATCHES 
 */
const MATCH_COUNT = 5;

export const blankMatch = {
	characters: [null, null],
	stage: "",
	winnerIndex: -1,
	stocksRemaining: 0
};

let matches = Array(MATCH_COUNT).fill(blankMatch);

matches[0] = {
	characters: [
		// Player 1's first main
		players[0].mains.ultimate[0],
		// Player 2's first main
		players[1].mains.ultimate[0]
	],
	stage: "Battlefield",
	// Player 1's tag
	winnerIndex: 0,
	stocksRemaining: 2
};

export { matches };
