import React from "react";
import s from "./RoundInfoCard.module.scss";
import { updateTournament } from "~/store/slices/tournament";
import useDebouncedReduxState from "~/hooks/useDebouncedReduxState";

/**
 * RoundInfoCard Component
 *
 * The top-most card for setting the round and stream link
 */

const RoundInfoCard = () => {
	const [round, setRound] = useDebouncedReduxState(
		state => state.tournament.round,
		updateTournament
	);

	const [streamLink, setStreamLink] = useDebouncedReduxState(
		state => state.tournament.streamLink,
		updateTournament
	);

	return (
		<div className={s.roundInfoCard}>
			<input
				className={s.round}
				type="text"
				placeholder="Round"
				required
				value={round}
				onChange={e => setRound(e.target.value, { round: e.target.value })}
			/>
			<input
				type="text"
				placeholder="Stream Link (optional but recommended)"
				value={streamLink}
				onChange={e =>
					setStreamLink(e.target.value, { streamLink: e.target.value })
				}
			/>
		</div>
	);
};

export default RoundInfoCard;
