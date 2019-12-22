import React from "react";
import StockIcon from "../StockIcon";
import getScore from "../../util/getScore";

const HeaderCell = ({ players, playerIndex }) => {
	const player = players[playerIndex];
	return (
		<>
			{playerIndex === 1 ? player.tag : null}
			{player.mains.ultimate
				.filter(character => !!character)
				.map(character => (
					<StockIcon smashTitle="ultimate" character={character} />
				))}
			{playerIndex === 0 ? player.tag : null}
		</>
	);
};

const TableHeader = ({ players, matches }) => {
	return (
		<thead>
			<tr>
				<th align="right">
					<HeaderCell players={players} playerIndex={0} />
				</th>
				<th align="center"></th>
				<th align="center">{getScore(matches)}</th>
				<th align="center"></th>
				<th align="left">
					<HeaderCell players={players} playerIndex={1} />
				</th>
			</tr>
		</thead>
	);
};

export default TableHeader;
