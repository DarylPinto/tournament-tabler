import React, { useState } from "react";
import axios from "axios";

const HomePage = () => {
	const [searchInput, setSearchInput] = useState("mango");

	const getit = async () => {
		let res = await axios.get(`http://localhost:3001/${searchInput}`);
		// eslint-disable-next-line no-console
		console.log(res.data);
	};

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				getit();
			}}
		>
			<h1>Tournament Tabler</h1>
			<input
				type="text"
				value={searchInput}
				onChange={e => setSearchInput(e.target.value)}
			/>
			<button>Get the smasher</button>
		</form>
	);
};

export default HomePage;
