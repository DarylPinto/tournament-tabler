import React, { useState } from "react";
import s from "./MatchesCard.module.scss";
import CharacterInput from "../CharacterInput";
import MatchWinnerInput from "../MatchWinnerInput";
import StockCountInput from "../StockCountInput";
import { actions as matchActions } from "../../store/slices/matches";
import { useSelector, useDispatch } from "react-redux";
import stages from "../../data/stages";

/**
 * MatchesCard Component
 *
 * The right-most card for selecting tournament
 * set data including character, stage, winner,
 * stocks remaining etc.
 */

const MatchesCard = () => {
	const [matchIndex, setMatchIndex] = useState(0);
	const matches = useSelector(state => state.matches);
	const match = matches[matchIndex];
	const players = useSelector(state => state.players);	
	const P1 = players[0];
	const P2 = players[1];
	const dispatch = useDispatch();

	// Update a particular property of the current match
	// Ex: setMatchProp({stage: "Yoshi's Island"}) sets the stage for
	// the current match to Yoshi's Island
	const setMatchProp = update => {
		dispatch(matchActions.updateMatch({ matchIndex, update }));
	};

	// Switches the current match
	const selectMatch = index => {
		// If there's no match data in the selected index
		// if (!matches[index]) {
		// 	// Find most recent previous existing match to use as a template
		// 	let previousMatches = matches.filter((match, i) => !!match && i < index);
		// 	let mostRecentMatch = previousMatches[previousMatches.length - 1];

		// 	// Insert a blank match at the index with relevant values
		// 	// (like characters) copied from the most recent match
		// 	setMatches(prevMatches => {
		// 		let nextMatches = JSON.parse(JSON.stringify(prevMatches));
		// 		nextMatches[index] = {
		// 			...defaultMatches[0],
		// 			characters: mostRecentMatch.characters,
		// 			stage: "",
		// 			stocksRemaining: 0
		// 		};
		// 		return nextMatches;
		// 	});
		// }

		// If selected match has no characters,
		// Find the most recent existing match to pull
		// characters from
		/*
		let nextMatchCharacters = matches[index].characters;
		if(nextMatchCharacters[0] === null && nextMatchCharacters[1] === null) {
			setMatches
		}
		*/

		// Update match index
		setMatchIndex(index);	
	};

	// Update current match's character by index
	// ex: setCharacter(0, "Yoshi") sets P1's char in the match to Yoshi
	const setCharacter = (index, character) => {
		dispatch(
			matchActions.updateCharacters({
				matchIndex,	
				characterIndex: index,
				character
			})
		);
	};

	return (
		<div className={s.matchesCard}>
			<h2>Game #</h2>

			{/* Match # Selector */}
			<ul className={s.currentMatchSelect}>
				{matches.map((_, i) => (
					<li
						key={i}
						className={matchIndex === i ? s.activeTab : ""}
						onClick={() => selectMatch(i)}
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
					onChange={e => setMatchProp({stage: e.target.value})}
				>
					<option value="" disabled>---</option>
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
					onChange={winnerIndex => setMatchProp({winnerIndex: winnerIndex})}
				/>
			</label>

			{/* Winner Stock Count Select */}
			<label>
				<span>Stocks Remaining</span>
				<StockCountInput
					stockIcon={match.characters[match.winnerIndex]}
					value={match.stocksRemaining}
					maxValue={3}
					onChange={stockCount => setMatchProp({stocksRemaining: stockCount})}
				/>
			</label>
		</div>
	);
};

export default MatchesCard;
