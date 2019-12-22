import React, { useState } from "react";
import s from "./PlayerCard.module.scss";
import CharacterInput from "../CharacterInput";
import Modal from "../Modal";
import { SMASHER_API_URL} from "../../data/constants";
import { updateMains, updatePlayer } from "../../store/slices/players";
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
		dispatch(updatePlayer({ playerIndex, update }));
	};

	// Update a player's main character by index
	// ex: setMain(0, "Yoshi") sets the player's first main to Yoshi
	const setMain = (index, character) => {
		const payload = {
			playerIndex,
			smashTitle: "ultimate",
			mainIndex: index,
			character
		};
		dispatch(updateMains(payload));
	};

	// Autofill all a player's data using `smasher-api`
	const autofillPlayer = async (tag: string) => {
		setIsLoading(true);
		// Query API for player data
		const res = await fetch(`${SMASHER_API_URL}/${tag}`);
		let data = await res.json();
		// If player data is not found, exit early
		if (data.message === "Not Found") return setIsLoading(false);
		// Update player data in store
		dispatch(updatePlayer({ playerIndex, update: data }));
		// Show toast notification
		// prettier-ignore
		const toastMsg = `Automatically loaded smasher data for player ${playerIndex + 1}`;
		dispatch(showNotification(toastMsg, 4000));
		setIsLoading(false);
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

			{/* Additional Info Button */}
			<button
				className={s.extrasBtn}
				onClick={() => setAdditionalInfoShown(true)}
			>
				Additional Info
			</button>

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

			{/* Loading Spinner */}
			{isLoading && (
				<img src={loading} className={s.loading} alt="Loading..." />
			)}
		</div>
	);
};

export default PlayerCard;
