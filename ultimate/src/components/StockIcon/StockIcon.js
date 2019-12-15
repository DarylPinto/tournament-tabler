import React from "react";
import s from "./StockIcon.module.scss";

/**
 * StockIcon component
 *
 * Displays a single stock icon with an optional click handler
 * Pass in a smashTitle (i.e Melee, Ultimate etc.) and a
 * character name
 */

const StockIcon = ({ smashTitle, character, onClick }) => {	
	return (
		<i
			className={`${s.stockIcon} ${s[character]}`}
			onClick={onClick}
		/>
	);
};

export default StockIcon;
