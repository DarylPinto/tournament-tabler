import React, { useState, useRef } from "react";
import s from "./Game.module.scss";
import Logo from "../../components/Logo";
import RoundInfoCard from "../../components/RoundInfoCard";
import PlayerCard from "../../components/PlayerCard";
import MatchesCard from "../../components/MatchesCard";
import MarkdownCode from "../../components/MarkdownCode";
import TablePreview from "../../components/TablePreview";
import Toasts from "../../components/Toasts";
import { useSelector, useDispatch } from "react-redux";
import { showNotification } from "../../store/slices/notifications";

const Game = () => {
	const [resultsShown, setResultsShown] = useState(false);
	const markdownEl = useRef(null);
	const players = useSelector(state => state.players.present);
	const dispatch = useDispatch();

	const handleGenerateBtnClick = () => {
		setResultsShown(true);
		dispatch(showNotification("Code selected! Ctrl+C to copy!", 3000, false));
		setTimeout(() => {
			window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
			markdownEl.current ? markdownEl.current.select() : null;
		}, 50);
	};

	return (
		<main>
			<Logo />
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

				{resultsShown && (
					<>
						<MarkdownCode refContainer={markdownEl} />
						<TablePreview />
					</>
				)}
			</section>
			<Toasts />
		</main>
	);
};

export default Game;
