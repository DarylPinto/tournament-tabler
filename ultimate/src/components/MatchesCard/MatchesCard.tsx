import React, { useState, useEffect } from "react";
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

	// Update current match's character by index
	// ex: setCharacter(0, "Yoshi") sets P1's char in the match to Yoshi
	const setCharacter = (index, character) => {
		dispatch(
			matchActions.updateCharacter({
				matchIndex,
				characterIndex: index,
				character
			})
		);
	};

	// When matchIndex changes, automatically load characters from previous match
	// into current match if the current match has no characters selected
	useEffect(() => {
		if (match.characters.includes(null)) {
			const previousMatches = matches.filter(
				(m, i) => i < matchIndex && !m.characters.includes(null)
			);
			const mostRecentMatch = previousMatches[previousMatches.length - 1];
			[P1, P2].forEach((_, index) => {
				if (match.characters[index] === null) {
					dispatch(
						matchActions.updateCharacter({
							matchIndex,
							characterIndex: index,
							character: mostRecentMatch.characters[index]
						})
					);
				}
			});
		}
	}, [matchIndex]);

	return (
		<div className={s.matchesCard}>
			<h2>Game #</h2>

			{/* Match # Selector */}
			<ul className={s.currentMatchSelect}>
				{matches.map((_, i) => (
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
					onChange={e => setMatchProp({ stage: e.target.value })}
				>
					<option value="" disabled>
						---
					</option>
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
					onChange={winnerIndex => setMatchProp({ winnerIndex: winnerIndex })}
				/>
			</label>

			{/* Winner Stock Count Select */}
			<label>
				<span>Stocks Remaining</span>
				<StockCountInput
					stockIcon={match.characters[match.winnerIndex]}
					value={match.stocksRemaining}
					maxValue={3}
					onChange={stockCount => setMatchProp({ stocksRemaining: stockCount })}
				/>
			</label>
		</div>
	);
};

export default MatchesCard;
