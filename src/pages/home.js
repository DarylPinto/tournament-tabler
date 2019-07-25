import React from "react";
import { connect } from "react-redux";
import { UPDATE_TOURNAMENT_INFO } from "store/types";

const HomePage = ({ dispatch }) => {
	let input;

	return (
		<div>
			<h1>Tournament Tabler</h1>
			<input ref={node => (input = node)} />
			<button
				onClick={() =>
					dispatch({
						type: UPDATE_TOURNAMENT_INFO,
						payload: { name: input.value }
					})
				}
			>
				Update Name
			</button>
		</div>
	);
};

export default connect()(HomePage);
