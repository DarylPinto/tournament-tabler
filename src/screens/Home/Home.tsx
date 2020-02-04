import React from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import smashTitleLinkData from "./smashTitleLinkData.json";
import s from "./Home.module.scss";

const Home = () => {
	return (
		<main>
			<Logo />
			<section className={s.mainSection}>
				<div className={s.gameSelection}>
					<h2>Select a game</h2>
					<div className={s.smashTitleLinks}>
						{smashTitleLinkData.map(({ name, link, image }) => (
							<Link to={link}>
								<img src={`/images/game-logos/${image}`} alt={name} />
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
