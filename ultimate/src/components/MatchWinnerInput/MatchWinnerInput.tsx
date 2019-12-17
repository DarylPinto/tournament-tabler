import React, { memo } from "react";
import s from "./MatchWinnerInput.module.scss";

/**
 * MatchWinnerInput Component
 *
 * Custom input field for selecting the winner of a match.
 */

interface Props {
	options: string[];
	value: string;
	onChange: (newValue: number) => any;
}

const MatchWinnerInput = ({ options, value, onChange }: Props) => {
	return (
		<div className={s.matchWinnerInput}>
			{options.map((option, i) => (
				<span
					key={i}
					className={option === options[value] ? s.selected : ""}
					onClick={() => onChange(i)}
				>
					{option.length > 0 ? option : `Player ${i + 1}`}
				</span>
			))}
		</div>
	);
};

export default memo(MatchWinnerInput);
