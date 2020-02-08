import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import smashGames from "~/data/smashGames";
import HomeScreen from "~/screens/Home";
import GameScreen from "~/screens/Game";

function App() {
	return (
		<Router>
			<Switch>
				<Route key="home" exact path="/" component={HomeScreen} />
				{smashGames.map(game => (
					<Route key={game.title} exact path={`/${game.title}`} component={GameScreen} />
				))}
			</Switch>
		</Router>
	);
}

export default App;
