import React from "react";
import s from "./StockCountInput.module.scss";

/**
 * StockCountInput component
 *
 * Behaves similarly to a 5 star review input field.
 * Click on one of the spaces to select a value
 */

const StockCountInput = ({ stockIcon, value, maxValue, onChange }) => {
	const icons = Array(value).fill(null);
	const blanks = Array(maxValue - value).fill(null);

	return (
		<ul className={s.stockCountInput}>
			{/* Filled clickable spaces */}
			<>
				{icons.map((_, i) => (
					<li key={i} onClick={() => onChange(i + 1)}>
						<img src={`images/stocks/ultimate/${stockIcon}.png`} alt="" />
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
