import React from "react";
import s from "./TablePreview.module.scss";
import { useSelector } from "react-redux";
import PlayerSummary from "./PlayerSummary";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const TablePreview = () => {
	const tournament = useSelector(state => state.tournament);
	const matches = useSelector(state => state.matches);
	const players = useSelector(state => state.players.present);

	return (
		<>
			<h2 className={s.title}>Preview</h2>
			<div className={s.container}>
				<div className={s.tournamentTable}>
					<h1>{tournament.round}</h1>
					<PlayerSummary players={players} />
					<table>
						<TableHeader players={players} matches={matches} />
						<tbody>
							{matches
								.filter(match => !!match.stage)
								.map((match, i) => (
									<TableRow key={i} match={match} />
								))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default TablePreview;
