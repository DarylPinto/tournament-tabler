import React from "react";
import StockIcon from "../StockIcon";
import getScore from "../../util/getScore";

const StockSet = ({ match, playerIndex }) => {
	const { characters, winnerIndex, stocksRemaining } = match;

	if (winnerIndex !== playerIndex) return <>---</>;

	const dummyArray = Array(stocksRemaining).fill(null);
	return (
		<>
			{dummyArray.map(_ => (
				<StockIcon smashTitle="ultimate" character={characters[playerIndex]} />
			))}
		</>
	);
};

const TableRow = ({ match }) => {
	const { characters } = match;
	return (
		<tr>
			<td align="right"><StockSet match={match} playerIndex={0} /></td>
			<td align="center">
				<code>=</code>
				<StockIcon smashTitle="ultimate" character={characters[0]} />
			</td>
			<td align="center">{match.stage}</td>
			<td align="left">
				<StockIcon smashTitle="ultimate" character={characters[1]} />
				<code>=</code>
			</td>
			<td align="left"><StockSet match={match} playerIndex={1} /></td>
		</tr>
	);
};

export default TableRow;
