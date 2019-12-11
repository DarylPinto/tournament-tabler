import React, { useState } from "react";
import s from "./MatchesCard.module.scss";
import CharacterPicker from "../CharacterPicker";

const gameCount = 5;
const gameDummyArr = Array(gameCount).fill(null);

const MatchesCard = () => {
	const [gameNum, setGameNum] = useState(1);
	const [p1char, setP1Char] = useState(null);
	const [p2char, setP2Char] = useState(null);
	

	return (
		<div className={s.matchesCard}>
			<h2>Game #</h2>
			<ul className={s.gameNumSelect}>
				{gameDummyArr.map((_, i) => (
					<li
						className={gameNum === i + 1 ? s.activeTab : ""}
						onClick={() => setGameNum(i + 1)}
					>
						{i + 1}
					</li>
				))}
			</ul>	
			<CharacterPicker value={p1char} onChange={setP1Char} />
			<CharacterPicker value={p2char} onChange={setP2Char} />
		</div>
	);
};

export default MatchesCard;
