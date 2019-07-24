import React from "react";
import { connect } from "react-redux";
import { CHANGE_SMASH_TITLE } from "store/types";

const HomePage = ({ smashTitle, dispatch }) => {
	const updateGame = e => {
		dispatch({
			type: CHANGE_SMASH_TITLE,
			payload: e.target.value
		});
	};

	return (
		<div>
			<h1>Tournament Tabler</h1>
			<input value={smashTitle} onChange={updateGame} />
		</div>
	);
};

const mapState = ({ smashTitle }) => ({ smashTitle });
export default connect(mapState)(HomePage);
