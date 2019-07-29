import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "pages/home";

function App() {
	return (
		<Router>
			<div className="container">
				<Route path="/" component={HomePage} exact />
			</div>
		</Router>
	);
}

export default App;
