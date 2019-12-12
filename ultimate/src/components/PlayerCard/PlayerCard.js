import React, { useState } from "react";
import s from "./PlayerCard.module.scss";
import CharacterInput from "../CharacterInput";

// Fields to render in this PlayerCard
const fields = [
	{ name: "tag", label: "Tag", required: true },
	{ name: "twitch", label: "Twitch", required: false },
	{ name: "twitter", label: "Twitter", required: false },
	{ name: "wiki", label: "Wiki URL", required: false },
	{ name: "sponsor", label: "Sponsor URL", required: false }
];

const PlayerCard = ({ playerIndex, player, setPlayers }) => {
	const [extrasShown, setExtrasShown] = useState(false);

	// Update a particular property of the player object
	// that's been passed to this component
	// ex: setPlayerProp({ twitch: "c9mang0" });
	const setPlayerProp = playerProp => {
		setPlayers(prevPlayers => {
			let nextPlayers = JSON.parse(JSON.stringify(prevPlayers));
			let player = nextPlayers[playerIndex];
			nextPlayers[playerIndex] = { ...player, ...playerProp };
			return nextPlayers;
		});
	};

	// Update a player's main character by index
	// ex: setMain(0, "Yoshi") sets the player's first main to Yoshi
	const setMain = (index, character) => {
		setPlayers(prevPlayers => {
			let nextPlayers = JSON.parse(JSON.stringify(prevPlayers));
			let player = nextPlayers[playerIndex];
			player.mains.ultimate[index] = character;
			return nextPlayers;
		});
	};

	return (
		<div className={s.playerCard}>
			<h2>Player {playerIndex + 1}</h2>
			{/* Mandatory Fields */}
			{fields
				.filter(field => field.required)
				.map(field => (
					<label>
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
							<label>
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
