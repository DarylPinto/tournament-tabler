import React from "react";

/**
 * MatchWinnerInput Component
 * 
 * Custom input field for selecting the winner of a match. 
 */

const MatchWinnerInput = ({ choices, value, onChange }) => {
	return (
		<div>
			{choices.map(option => (
				<span key={option}>{option}</span>
			))}
		</div>
	);
};

export default MatchWinnerInput;
