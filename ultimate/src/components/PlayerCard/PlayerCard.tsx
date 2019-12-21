import React, { useState } from "react";
import s from "./PlayerCard.module.scss";
import CharacterInput from "../CharacterInput";
import Modal from "../Modal";
import { actions as playerActions } from "../../store/slices/players";
import { showNotification } from "../../store/slices/notifications";
import { useSelector, useDispatch } from "react-redux";
import loading from "../../assets/images/loading.svg";

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
	const [additionalInfoShown, setAdditionalInfoShown] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
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

	// Autofill a player using `smasher-api`
	const autofillPlayer = async (tag: string) => {
		setIsLoading(true);
		try {
			const res = await fetch(`http://localhost:3001/${tag}`);
			const data = await res.json();

			// Truncate mains to 2 maximum
			for (const smashTitle in data.mains) {
				data.mains[smashTitle] = data.mains[smashTitle].slice(0, 2);
			}

			// Update store
			dispatch(playerActions.updatePlayer({ playerIndex, update: data }));
			dispatch(
				showNotification(
					"info",
					`Automatically loaded smasher data for player ${playerIndex + 1}`,
					2000
				)
			);
		} catch (err) {
			if (err?.message !== "Not Found") console.error(err.message);
		} finally {
			setIsLoading(false);
		}
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
								onBlur={e =>
									field.name === "tag" ? autofillPlayer(e.target.value) : null
								}
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
				isOpen={additionalInfoShown}
				close={() => setAdditionalInfoShown(false)}
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
					<button onClick={() => setAdditionalInfoShown(false)}>Done</button>
				</section>
			</Modal>

			{/* Additional Info Button */}
			<button
				className={s.extrasBtn}
				onClick={() => setAdditionalInfoShown(true)}
			>
				Additional Info
			</button>

			{/* Loading Spinner */}
			{isLoading && (
				<img src={loading} className={s.loading} alt="Loading..." />
			)}
		</div>
	);
};

export default PlayerCard;
