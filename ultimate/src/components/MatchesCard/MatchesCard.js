import React, { useState } from "react";
import s from "./MatchesCard.module.scss";
import CharacterInput from "../CharacterInput";
import MatchWinnerInput from "../MatchWinnerInput";
import stages from "../../data/stages";

/**
 * MatchesCard Component
 * 
 * The right-most card for selecting tournament
 * set data including character, stage, winner,
 * stocks remaining etc. 
 */

const MatchesCard = ({ matches, setMatches, players }) => {
	const [matchIndex, setMatchIndex] = useState(0);
	const currentMatch = matches[matchIndex];

	// Update current match's character by index
	// ex: setCharacter(0, "Yoshi") sets the match's first character to Yoshi
	const setCharacter = (index, character) => {
		setMatches(prevMatches => {
			let nextMatches = JSON.parse(JSON.stringify(matches));
			let match = nextMatches[matchIndex];
			match.characters[index] = character;
			return nextMatches;
		});
	};

	// Update current match's stage
	// ex: setStage("Battlefield") sets the match's stage to Battlefield
	const setStage = stage => {
		setMatches(prevMatches => {
			let nextMatches = JSON.parse(JSON.stringify(matches));
			let match = nextMatches[matchIndex];
			match.stage = stage;
			return nextMatches;
		});
	};

	return (
		<div className={s.matchesCard}>
			<h2>Game #</h2>

			{/* Match # Selector */}
			<ul className={s.currentMatchSelect}>
				{[0, 1, 2, 3, 4].map((_, i) => (
					<li
						key={i}
						className={matchIndex === i ? s.activeTab : ""}
						onClick={() => setMatchIndex(i)}
					>
						{i + 1}
					</li>
				))}
			</ul>

			{/* Character Select */}
			<p>{players[0].tag}</p>
			<CharacterInput
				value={currentMatch.characters[0]}
				onChange={character => setCharacter(0, character)}
				/>
			<p>{players[1].tag}</p>
			<CharacterInput
				value={currentMatch.characters[1]}
				onChange={character => setCharacter(1, character)}
			/>

			{/* Stage Select */}
			<label className={s.stageSelect}>
				<span>Stage</span>
				<select
					value={currentMatch.stage}
					onChange={e => setStage(e.target.value)}
				>
					{stages.map(stage => (
						<option key={stage} value={stage}>{stage}</option>
					))}
				</select>
			</label>

			{/* Winner Select */}
			<label>
				<span>Winner</span>
				<MatchWinnerInput
					choices={[players[0].tag, players[1].tag]}
					value={players[0].tag}
					onChange={() => {}}
				/>
			</label>
		</div>
	);
};

export default MatchesCard;
