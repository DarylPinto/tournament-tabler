import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "./slices/players";

const reducer = {
	players: playersReducer
};

const store = configureStore({ reducer });

export default store;
