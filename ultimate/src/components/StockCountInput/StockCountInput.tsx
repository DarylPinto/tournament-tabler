import React from "react";
import s from "./StockCountInput.module.scss";
import StockIcon from "../StockIcon";
import { useSelector } from "react-redux";

/**
 * StockCountInput component
 *
 * Behaves similarly to a 5 star review input field.
 * Click on one of the spaces to select a value
 */

interface Props {
	stockIcon: string,
	value: number,
	maxValue: number,
	onChange: (newValue: number) => any;
}

const StockCountInput = ({ stockIcon, value, maxValue, onChange }: Props) => {
	const icons = Array(value).fill(null);
	const blanks = Array(maxValue - value).fill(null);
	const smashTitle = useSelector(state => state.tournament.smashTitle);

	return (
		<ul className={s.stockCountInput}>
			{/* Filled clickable spaces */}
			<>
				{icons.map((_, i) => (
					<li key={i} onClick={() => onChange(i + 1)}>
						<StockIcon smashTitle={smashTitle} character={stockIcon} />
					</li>
				))}
			</>

			{/* Unfilled clickable spaces */}
			<>
				{blanks.map((_, i) => (
					<li key={i} onClick={() => onChange(value + i + 1)}>
						•
					</li>
				))}
			</>
		</ul>
	);
};

export default StockCountInput;
