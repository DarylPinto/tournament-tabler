import React, { memo } from "react";
import s from "./StockIcon.module.scss";
import { SmashTitle } from "~/data/types";

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
}

// -> `smashTitle` will be used in the future
// eslint-disable-next-line no-unused-vars
const StockIcon = ({ smashTitle, character, onClick }: Props) => {
	if (!character) return null;

	return <i className={`${s.stockIcon} ${s[character]}`} onClick={onClick} />;
};

export default memo(StockIcon);
