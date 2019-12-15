import React from "react";
import s from "./MatchWinnerInput.module.scss";

/**
 * MatchWinnerInput Component
 *
 * Custom input field for selecting the winner of a match.
 */

const MatchWinnerInput = ({ options, value, onChange }) => {
	return (
		<div className={s.matchWinnerInput}>
			{options.map((option, i) => (
				<span
					key={i}
					className={option === options[value] ? s.selected : ""}
					onClick={() => onChange(i)}
				>
					{option}
				</span>
			))}
		</div>
	);
};

export default MatchWinnerInput;
