import React from "react";

const MatchWinnerInput = ({ choices, value, onChange }) => {
	return (
		<div>
			{choices.map(option => (
				<span>{option}</span>
			))}
		</div>
	);
};

export default MatchWinnerInput;
