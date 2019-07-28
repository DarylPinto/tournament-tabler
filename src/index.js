import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "store/configureStore";
import Layout from "pages/_layout";

ReactDOM.render(
	<Provider store={store}>
		<Layout />
	</Provider>,
	document.getElementById("root")
);
