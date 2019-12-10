import React from "react";
import s from "./RoundInfoCard.module.scss";

const RoundInfoCard = ({ round, setRound, streamLink, setStreamLink }) => {
	return (
		<div className={s.roundInfoCard}>
			<input
				className={s.round}
				type="text"
				placeholder="Round"
				required
				value={round}
				onChange={e => setRound(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Stream Link (optional but recommended)"
				value={streamLink}
				onChange={e => setStreamLink(e.target.value)}
			/>
		</div>
	);
};

export default RoundInfoCard;
