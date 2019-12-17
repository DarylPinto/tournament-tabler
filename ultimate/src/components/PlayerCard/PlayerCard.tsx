import React, { useState } from "react";
import s from "./PlayerCard.module.scss";
import CharacterInput from "../CharacterInput";
import Modal from "../Modal";
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
	{ name: "wiki", label: "Wiki", required: false },
	{ name: "team", label: "Team Website URL", required: false }
];

interface Props {
	playerIndex: number;
}

const PlayerCard = ({ playerIndex }: Props) => {
	const [additonalInfoShown, setAdditonalInfoShown] = useState(false);
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
			<div className={s.requiredInfo}>
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
			</div>

			{/* Additional Info Modal */}
			<Modal
				isOpen={additonalInfoShown}
				close={() => setAdditonalInfoShown(false)}
			>
				<section className={s.additionalInfo}>
					<h1>{player.tag ? player.tag : `Player ${playerIndex + 1}`}</h1>
					<div>
						{fields
							.filter(field => !field.required)
							.map(field => (
								<label key={field.name}>
									<span>{field.label}</span>
									<input
										type="text"
										value={player[field.name]}
										onChange={e =>
											setPlayerProp({ [field.name]: e.target.value })
										}
									/>
								</label>
							))}
					</div>
					<button onClick={() => setAdditonalInfoShown(false)}>Done</button>
				</section>
			</Modal>

			{/* Show Extras Button */}
			<button
				className={s.extrasBtn}
				onClick={() => setAdditonalInfoShown(true)}
			>
				Additional Info
			</button>
		</div>
	);
};

export default PlayerCard;
