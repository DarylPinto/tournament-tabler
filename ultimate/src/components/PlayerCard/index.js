import React, { useState } from "react";
import s from "./index.module.scss";

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
