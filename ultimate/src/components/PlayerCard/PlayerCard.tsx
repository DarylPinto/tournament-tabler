import React, { useState } from "react";
import s from "./PlayerCard.module.scss";
import CharacterInput from "../CharacterInput";
import { actions as playerActions } from "../../store/slices/players";
import { useSelector, useDispatch } from "react-redux";

/**
 * PlayerCard Component
 *
 * The first two cards on the left for setting player data
 * including tag, mains, full name, twitch acc etc.
 */

// Fields to render in this PlayerCard
const fields = [
	{ name: "tag", label: "Tag", required: true },
	{ name: "name", label: "Full Name", required: false },
	{ name: "twitch", label: "Twitch", required: false },
	{ name: "twitter", label: "Twitter", required: false },
	{ name: "wiki", label: "Wiki URL", required: false },
	{ name: "sponsor", label: "Sponsor URL", required: false }
];

interface Props {
	playerIndex: number;
}

const PlayerCard = ({ playerIndex }: Props) => {
	const [extrasShown, setExtrasShown] = useState(false);
	const player = useSelector(state => state.players[playerIndex]);
	const dispatch = useDispatch();

	// Update a particular property of the player object
	// that's been passed to this component
	// ex: setPlayerProp({twitch: "c9mang0"});
	const setPlayerProp = update => {
		dispatch(playerActions.updatePlayer({ playerIndex, update }));
	};

	// Update a player's main character by index
	// ex: setMain(0, "Yoshi") sets the player's first main to Yoshi
	const setMain = (index, character) => {
		dispatch(
			playerActions.updateMains({
				playerIndex,
				smashTitle: "ultimate",
				mainIndex: index,
				character
			})
		);
	};

	return (
		<div className={s.playerCard}>
			<h2>Player {playerIndex + 1}</h2>
			{/* Mandatory Fields */}
			{fields
				.filter(field => field.required)
				.map(field => (
					<label key={field.name}>
						<span>{field.label}</span>
						<input
							type="text"
							required
							value={player[field.name]}
							onChange={e => setPlayerProp({ [field.name]: e.target.value })}
						/>
					</label>
				))}

			{/* Main character selection */}
			<label>
				<span>Mains</span>
				<div className={s.characterInputWrap}>
					<CharacterInput
						value={player.mains.ultimate[0]}
						onChange={character => setMain(0, character)}
					/>
					<CharacterInput
						value={player.mains.ultimate[1]}
						onChange={character => setMain(1, character)}
					/>
				</div>
			</label>

			{/* Extra Fields */}
			{extrasShown && (
				<>
					{fields
						.filter(field => !field.required)
						.map(field => (
							<label key={field.name}>
								<span>{field.label} (optional)</span>
								<input
									type="text"
									value={player[field.name]}
									onChange={e =>
										setPlayerProp({ [field.name]: e.target.value })
									}
								/>
							</label>
						))}
				</>
			)}

			{/* Show Extras Button */}
			{!extrasShown && (
				<button className={s.extrasBtn} onClick={() => setExtrasShown(true)}>
					Add Extras
				</button>
			)}
		</div>
	);
};

export default PlayerCard;
