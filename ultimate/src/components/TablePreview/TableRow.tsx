import React from "react";
import StockIcon from "../StockIcon";
import { useSelector } from "react-redux";

const StockSet = ({ match, playerIndex }) => {
	const { characters, winnerIndex, stocksRemaining } = match;
	const smashTitle = useSelector(state => state.tournament.smashTitle);

	if (winnerIndex !== playerIndex) return <>---</>;

	const dummyArray = Array(stocksRemaining).fill(null);
	return (
		<>
			{dummyArray.map(_ => (
				<StockIcon smashTitle={smashTitle} character={characters[playerIndex]} />
			))}
		</>
	);
};

const TableRow = ({ match }) => {
	const { characters } = match;
	const smashTitle = useSelector(state => state.tournament.smashTitle);

	return (
		<tr>
			<td align="right"><StockSet match={match} playerIndex={0} /></td>
			<td align="center">
				<code>=</code>
				<StockIcon smashTitle={smashTitle} character={characters[0]} />
			</td>
			<td align="center">{match.stage}</td>
			<td align="left">
				<StockIcon smashTitle={smashTitle} character={characters[1]} />
				<code>=</code>
			</td>
			<td align="left"><StockSet match={match} playerIndex={1} /></td>
		</tr>
	);
};

export default TableRow;
