import React from 'react';
import { Link } from "react-router-dom";
import s from "./Home.module.scss";

const Home = () => {
	return (
		<div className={s.links}>
			<Link to="/smash64">Smash 64</Link>
			<Link to="/melee">Melee</Link>
			<Link to="/brawl">Brawl</Link>
			<Link to="/projectm">Project M</Link>
			<Link to="/smash4">Smash 4</Link>
			<Link to="/ultimate">Ultimate</Link>
		</div>
	);
};

export default Home;