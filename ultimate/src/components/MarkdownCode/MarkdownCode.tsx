import React, { useEffect, useRef } from "react";
import s from "./MarkdownCode.module.scss";
import { useSelector } from "react-redux";
import { Match } from "../../data/customTypes";

const MarkdownCode = () => {
	const { tournament, players, matches } = useSelector(state => state);
	const codeBox = useRef(null);
	useEffect(() => codeBox.current.select(), []);

	/**
	 * Stock Icon markdown with appropriate smashTitle prefix & alt text
	 * @param character character to show in stock icon
	 * @param altText stock icon alt text
	 * @returns [](#MeleeFox)
	 */
	const stockIcon = (character: string, altText: string) => {
		const stockPrefixDict = {
			s64: "S64",
			melee: "Melee",
			brawl: "Brawl",
			pm: "Pm",
			smash4: "Smash4",
			ultimate: "U-"
		};
		const stockPrefix = stockPrefixDict[tournament.smashTitle];
		return `[${altText}](#${stockPrefix}${character})`;
	};

	/**
	 * Markdown line containing player summary before table starts
	 * @param playerIndex Index of player to show summary of
	 * @returns **Joseph "Mango" Marquez** // Twitch | Twitter | Wiki | Team
	 */
	const playerSummary = (playerIndex: number) => {
		const { tag, name, twitch, twitter, wiki, team } = players[playerIndex];
		const fields = { twitch, twitter, wiki, team };

		let ret = `**${name ? name : tag}**`;
		if (!Object.values(fields).every(field => field === "")) ret += " // ";
		let social = Object.entries(fields)
			.map(field => `[${field[0]}](${field[1]})`)
			.join(" | ");
		return ret + social;
	};

	/**
	 * Markdown table header containing a player's tag and their mains
	 * @param playerIndex Index of player to show stats for
	 * @returns [Joker](#U-Joker) MKLeo
	 */
	const playerStats = (playerIndex: number) => {
		const { tag, mains } = players[playerIndex];
		const mainsDisplay = mains[tournament.smashTitle]
			.filter(main => !!main)
			.map(main => stockIcon(main, main))
			.join("");
		if (playerIndex === 0) return `${mainsDisplay} ${tag}`;
		else return `${tag} ${mainsDisplay}`;
	};

	/**
	 * Score of the set
	 * @returns 3 - 2
	 */
	const score = () => {
		const p1score = matches.reduce(
			(total, match) => (match.winnerIndex === 0 ? total + 1 : total),
			0
		);
		const p2score = matches.reduce(
			(total, match) => (match.winnerIndex === 1 ? total + 1 : total),
			0
		);

		return `${p1score} - ${p2score}`;
	};

	/**
	 * Markdown table-row for a single match
	 * @param match Match to convert into a table row
	 * @returns [1 stock](#U-Ness) | `=` [](#U-Ness) | Battlefield | [](#U-Roy) `=` | ---
	 */
	const matchRow = (match: Match) => {
		if (match.stage === "") return null;
		const { characters, winnerIndex, stocksRemaining } = match;

		// Set of stocks on either the left or right of the matchRow
		const stockSet = character => {
			if (stocksRemaining === 0) return "---";
			else if (stocksRemaining === 1) return stockIcon(character, "1 stock");
			// First stock contains alt text with stock count
			// subsequent stocks have no alt text
			let ret = stockIcon(character, `${stocksRemaining} stocks`);
			for (let i = 0; i < stocksRemaining - 1; i++)
				ret += stockIcon(character, "");
			return ret;
		};

		// Column represents either the left or right side of a single
		// match row. Either has a set of stocks (stockSet) or "---"
		const column = playerIndex =>
			winnerIndex === playerIndex ? stockSet(characters[playerIndex]) : "---";

		// Return match row markdown
		return `${column(0)} | \`=\` ${stockIcon(characters[0], characters[0])} | ${
			match.stage
		} | ${stockIcon(characters[1], characters[1])} \`=\` | ${column(1)}`;
	};

	// Final markdown
	let markdown = `
	${
		tournament.streamLink.length > 0
			? `---\n\n#[Watch Live](${tournament.streamLink})`
			: ""
	}

	---
	#${tournament.round}

	${playerSummary(0)}  
	***vs***  
	${playerSummary(1)}  

	${playerStats(0)} | | ${score()} | | ${playerStats(1)}
	---:|:--:|:--:|:--:|:---
	${matches
		.map(match => matchRow(match))
		.filter(row => !!row)
		.join("\n")}
	*^^Generated ^^by [^^Tournament ^^Tabler](http://tournament-tabler.com/)*

	---
	`;

	// Trim whitespace and render
	markdown = markdown.trim().replace(/\t/g, "");
	return (
		<textarea
			ref={codeBox}
			className={s.markdownCode}
			value={markdown}
			onClick={() => (codeBox.current ? codeBox.current.select() : null)}
		/>
	);
};

export default MarkdownCode;
