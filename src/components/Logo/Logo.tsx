import React from "react";
import { Link } from "react-router-dom";
import s from "./Logo.module.scss";

const Logo = () => {
	return (
		<Link to="/" className={s.logo}>
			<h1>Tournament Tabler</h1>
		</Link>
	);
};

export default Logo;
