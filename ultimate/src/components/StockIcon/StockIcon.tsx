import React, { memo } from "react";
import s from "./StockIcon.module.scss";
import { SmashTitle } from "../../data/customTypes";

/**
 * StockIcon component
 *
 * Displays a single stock icon with an optional click handler
 * Pass in a smashTitle (i.e Melee, Ultimate etc.) and a
 * character name
 */

interface Props {
	smashTitle: SmashTitle;
	character: string;
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
