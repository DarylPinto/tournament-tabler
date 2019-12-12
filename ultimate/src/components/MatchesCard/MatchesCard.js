import React, { useState } from "react";
import s from "./MatchesCard.module.scss";
import CharacterInput from "../CharacterInput";
import MatchWinnerInput from "../MatchWinnerInput";
import StockCountInput from "../StockCountInput";
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
	const match = matches[matchIndex];
	const P1 = players[0];
	const P2 = players[1];

	// Update a particular property of the current match
	// Ex: setMatchProp("stage", "Yoshi's Island") sets the stage for
	// the current match to Yoshi's Island
	const setMatchProp = (matchProp, value) => {
		setMatches(prevMatches => {
			let nextMatches = JSON.parse(JSON.stringify(matches));
			let match = nextMatches[matchIndex];
			match[matchProp] = value;
			return nextMatches;
		});
	};

	// Update current match's character by index
	// ex: setCharacter(0, "Yoshi") sets P1's char in the match to Yoshi
	const setCharacter = (index, character) => {
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
			<div className={s.characterSelect}>
				<label>
					<span>
						{P1.tag.trim().length > 0 ? P1.tag : "P1"}'s
						<br />
						character
					</span>
					<CharacterInput
						value={match.characters[0]}
						onChange={character => setCharacter(0, character)}
					/>
				</label>
				<label>
					<span>
						{P2.tag.trim().length > 0 ? P2.tag : "P2"}'s
						<br />
						character
					</span>
					<CharacterInput
						value={match.characters[1]}
						onChange={character => setCharacter(1, character)}
					/>
				</label>
			</div>

			{/* Stage Select */}
			<label className={s.stageSelect}>
				<span>Stage</span>
				<select
					value={match.stage}
					onChange={e => setMatchProp("stage", e.target.value)}
				>
					{stages.map(stage => (
						<option key={stage} value={stage}>
							{stage}
						</option>
					))}
				</select>
			</label>

			{/* Winner Select */}
			<label>
				<span>Winner</span>
				<MatchWinnerInput
					options={players.map(p => p.tag)}
					value={match.winnerIndex}
					onChange={winnerIndex => setMatchProp("winnerIndex", winnerIndex)}
				/>
			</label>

			{/* Winner Stock Count Select */}
			<label>
				<span>Stocks Remaining</span>
				<StockCountInput
					stockIcon={match.characters[match.winnerIndex]}
					value={match.stocksRemaining}
					maxValue={3}
					onChange={stockCount => setMatchProp("stocksRemaining", stockCount)}
				/>
			</label>
		</div>
	);
};

export default MatchesCard;
