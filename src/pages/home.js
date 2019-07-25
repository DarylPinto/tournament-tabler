import React, { useState } from "react";
import smasher from "data/smasher";

const HomePage = () => {
	const [searchInput, setSearchInput] = useState("mango");

	const getit = async () => {
		let res = await smasher(searchInput);
		// eslint-disable-next-line no-console
		console.log(res);
	};

	return (
		<div>
			<h1>Tournament Tabler</h1>
			<input
				type="text"
				value={searchInput}
				onChange={e => setSearchInput(e.target.value)}
			/>
			<button onClick={getit}>Get the smasher</button>
		</div>
	);
};

export default HomePage;
