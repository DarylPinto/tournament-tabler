import React, { useState } from "react";
import s from "./MatchesCard.module.scss";
import CharacterPicker from "../CharacterPicker";

const MatchesCard = ({ matches, setMatches }) => {
	const [matchIndex, setMatchIndex] = useState(0);
	const currentMatch = matches[matchIndex];

	// Update a match's character by index
	// ex: setMatchCharacter(0, "Yoshi") sets the match's first character to Yoshi
	const setMatchCharacter = (index, character) => {
		setMatches(prevMatches => {
			let nextMatches = JSON.parse(JSON.stringify(matches));
			let match = nextMatches[matchIndex];
			match.characters[index] = character;
			return nextMatches;
		});
	};

	return (
		<div className={s.matchesCard}>
			<h2>Game #</h2>
			<ul className={s.currentMatchSelect}>
				{[0, 1, 2, 3, 4].map((_, i) => (
					<li
						className={matchIndex === i ? s.activeTab : ""}
						onClick={() => setMatchIndex(i)}
					>
						{i + 1}
					</li>
				))}
			</ul>
			<CharacterPicker
				value={currentMatch.characters[0]}
				onChange={character => setMatchCharacter(0, character)}
			/>
			<CharacterPicker
				value={currentMatch.characters[1]}
				onChange={character => setMatchCharacter(1, character)}
			/>
		</div>
	);
};

export default MatchesCard;
