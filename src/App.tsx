import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Game from "./screens/Game";
// import Navigation from "components/Navigation";
// import routes from "data/routes.js";
// import "assets/styles/react-transitions.min.css";

const games = ["smash64", "melee", "brawl", "projectm", "smash4", "ultimate"];

function App() {
	return (
		<Router>
			<Switch>
				<Route key="home" exact path="/" component={Home} />
				{games.map(game => (
					<Route key={game} exact path={`/${game}`} component={Game} />
				))}
			</Switch>
		</Router>
	);
}

export default App;
