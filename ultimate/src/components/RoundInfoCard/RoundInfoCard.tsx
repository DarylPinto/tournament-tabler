import React from "react";
import s from "./RoundInfoCard.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { actions as tournament } from "../../store/slices/tournament";

/**
 * RoundInfoCard Component
 *
 * The top-most card for setting the round and stream link
 */

const RoundInfoCard = () => {
	const round = useSelector(state => state.tournament.round);
	const streamLink = useSelector(state => state.tournament.streamLink);	
	const dispatch = useDispatch();	

	return (
		<div className={s.roundInfoCard}>
			<input
				className={s.round}
				type="text"
				placeholder="Round"
				required
				value={round}
				onChange={e =>
					dispatch(tournament.updateTournament({ round: e.target.value }))
				}
			/>
			<input
				type="text"
				placeholder="Stream Link (optional but recommended)"
				value={streamLink}	
				onChange={e =>
					dispatch(tournament.updateTournament({ streamLink: e.target.value }))
				}
			/>
		</div>
	);
};

export default RoundInfoCard;
