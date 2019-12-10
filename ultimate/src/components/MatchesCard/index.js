import React, { useState } from "react";
import s from "./index.module.scss";

const gameCount = 5;
const gameDummyArr = Array(gameCount).fill(null);

const MatchesCard = () => {
	const [gameNum, setGameNum] = useState(1);

	return (
		<div className={s.matchesCard}>
			<h2>Game #</h2>
			<ul className={s.gameNumSelect}>
				{gameDummyArr.map((_, i) => (
					<li onClick={() => setGameNum(i + 1)}>{i + 1}</li>
				))}
			</ul>
			<p>{gameNum}</p>
			<ul></ul>
		</div>
	);
};

export default MatchesCard;
