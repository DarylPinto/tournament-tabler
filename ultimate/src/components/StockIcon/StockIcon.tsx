import React, { memo } from "react";
import s from "./StockIcon.module.scss";

/**
 * StockIcon component
 *
 * Displays a single stock icon with an optional click handler
 * Pass in a smashTitle (i.e Melee, Ultimate etc.) and a
 * character name
 */

type SmashTitle = "64" | "Melee" | "Brawl" | "PM" | "Smash4" | "Ultimate";

interface Props {
	smashTitle: SmashTitle;
	character: String;
	onClick?: () => void;
};

const StockIcon = ({ smashTitle, character, onClick }: Props) => {	
	return (
		<i
			className={`${s.stockIcon} ${s[character as string]}`}
			onClick={onClick}
		/>
	);
};

export default memo(StockIcon);
