if (process.env.NODE_ENV === "development") require("preact/debug");
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "./assets/styles/global.scss";

document.title = "Ultimate - r/smashbros Tournament Tabler";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
