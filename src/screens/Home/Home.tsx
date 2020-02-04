import React from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import smashGames from "../../data/smashGames";
import s from "./Home.module.scss";

const Home = () => {
	return (
		<main>
			<Logo />
			<section className={s.mainSection}>
				<div className={s.gameSelection}>
					<h2>Select a game</h2>
					<div className={s.smashTitleLinks}>
						{smashGames.map(game => (
							<Link to={`/${game.title}`} key={game.title}>
								<img
									src={`/images/game-logos/${game.title}.png`}
									alt={game.fullTitle}
									title={game.fullTitle}
								/>
							</Link>
						))}
					</div>
				</div>
				<div className={s.about}>
					<h2>About</h2>
					<p>
						Tournament Tabler is an easy-to-use tool made to generate detailed
						set tables for /r/smashbros tournament result threads. Fill in
						information for each game while watching the set, then once it's
						over click "Generate Table" and BAM: Instant table.
					</p>
				</div>
			</section>
		</main>
	);
};

export default Home;
