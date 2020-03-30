import { Match } from "~/data/types";

/**
 * Score of the set
 * @param matches Matches to calculate score from
 * @returns 3 - 2
 */
const getScore = (matches: Match[]) => {
	const p1score = matches.reduce(
		(total, match) => (match.winnerIndex === 0 ? total + 1 : total),
		0
	);
	const p2score = matches.reduce(
		(total, match) => (match.winnerIndex === 1 ? total + 1 : total),
		0
	);

	return `${p1score} - ${p2score}`;
};

export default getScore;
