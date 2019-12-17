import React, { useState } from "react";
import s from "./App.module.scss";
import RoundInfoCard from "./components/RoundInfoCard";
import PlayerCard from "./components/PlayerCard";
import MatchesCard from "./components/MatchesCard";
import MarkdownCode from "./components/MarkdownCode";
import { useSelector } from "react-redux";

const App = () => {
	const [markdownShown, setMarkdownShown] = useState(false);
	const players = useSelector(state => state.players);

	const handleGenerateBtnClick = () => {
		setMarkdownShown(true);
		setTimeout(() => {
			window.scrollTo(0,document.body.scrollHeight);
		}, 250);
	};

	return (
		<main>
			<h1 className={s.logo}>Tournament Tabler</h1>
			<section className={s.mainSection}>
				<RoundInfoCard />
				<div className={s.setInfo}>
					{players.map((_, i) => (
						<PlayerCard key={i} playerIndex={i} />
					))}
					<MatchesCard />
				</div>
				<button className={s.btn} onClick={handleGenerateBtnClick}>
					Generate Table
				</button>
				{markdownShown && <MarkdownCode />}
			</section>
		</main>
	);
};

export default App;
