import React from "react";
import { Link } from "react-router-dom";
import s from "./Home.module.scss";

const Home = () => {
	return (
		<main>
			<a href="/" className={s.logo}>
				<h1>Tournament Tabler</h1>
			</a>
			<section className={s.mainSection}>
				<div className={s.links}>
					<Link to="/smash64">Smash 64</Link>
					<Link to="/melee">Melee</Link>
					<Link to="/brawl">Brawl</Link>
					<Link to="/projectm">Project M</Link>
					<Link to="/smash4">Smash 4</Link>
					<Link to="/ultimate">Ultimate</Link>
				</div>
			</section>
		</main>
	);
};

export default Home;
