import React, { memo } from "react";
import s from "./MatchWinnerInput.module.scss";

/**
 * MatchWinnerInput Component
 *
 * Custom input field for selecting the winner of a match.
 */

interface Props {
	options: String[];
	value: String;
	onChange: (newValue: Number) => any;
}

const MatchWinnerInput = ({ options, value, onChange }: Props) => {
	return (
		<div className={s.matchWinnerInput}>
			{options.map((option, i) => (
				<span
					key={i}
					className={option === options[value as string] ? s.selected : ""}
					onClick={() => onChange(i)}
				>
					{option}
				</span>
			))}
		</div>
	);
};

export default memo(MatchWinnerInput);
