import React from "react";
import getPlayerFullName from "~/util/getPlayerFullName";
import toTitleCase from "~/util/toTitleCase";

const PlayerLinks = ({ player }) => {
	const { twitch, twitter, wiki, team } = player;
	const fields = { twitch, twitter, wiki, team };
	if (Object.values(fields).every(field => field === "")) return null;

	const links = Object.entries(fields)
		.filter(field => field[1] !== null && field[1].length > 0)
		.map((field, i) => {
			const separator = i === 0 ? " // " : " | ";
			return (
				<span>
					{separator}
					<a href={field[1]} target="_blank" rel="noopener noreferrer">
						{toTitleCase(field[0])}
					</a>
				</span>
			);
		});
	return <>{links}</>;
};

const PlayerSummary = ({ players }) => {
	const P1 = players[0];
	const P2 = players[1];

	return (
		<>
			<b>{getPlayerFullName(P1.name, P1.tag)}</b> <PlayerLinks player={P1} />
			<br />
			<b>
				<em>vs</em>
			</b>
			<br />
			<b>{getPlayerFullName(P2.name, P2.tag)}</b> <PlayerLinks player={P2} />
		</>
	);
};

export default PlayerSummary;
