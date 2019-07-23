import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import initializeStore from "store/init-store.js";
import Layout from "pages/_Layout.js";

const store = initializeStore();

ReactDOM.render(
	<Provider store={store}>
		<Layout />
	</Provider>,
	document.getElementById("root")
);
