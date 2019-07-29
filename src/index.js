import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "store";
import Layout from "pages/_layout";
import "global/styles/global.scss";

ReactDOM.render(
	<Provider store={store}>
		<Layout />
	</Provider>,
	document.getElementById("root")
);
