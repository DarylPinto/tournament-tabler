import React, { useState, useRef } from "react";
import s from "./App.module.scss";
import RoundInfoCard from "./components/RoundInfoCard";
import PlayerCard from "./components/PlayerCard";
import MatchesCard from "./components/MatchesCard";
import MarkdownCode from "./components/MarkdownCode";
import Toasts from "./components/Toasts";
import { useSelector, useDispatch } from "react-redux";
import { showNotification } from "./store/slices/notifications";

const App = () => {
	const [markdownShown, setMarkdownShown] = useState(false);
	const markdownEl = useRef(null);
	const players = useSelector(state => state.players);
	const dispatch = useDispatch();

	const handleGenerateBtnClick = () => {
		setMarkdownShown(true);
		dispatch(
			showNotification("info", "Code selected! Command+C to copy!", 10000)
		);
		setTimeout(() => {
			window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
			markdownEl.current ? markdownEl.current.select() : null;
		}, 50);
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

				{markdownShown && <MarkdownCode refContainer={markdownEl} />}
			</section>
			<Toasts />
		</main>
	);
};

export default App;
