if (process.env.NODE_ENV === "development") require("preact/debug");
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
