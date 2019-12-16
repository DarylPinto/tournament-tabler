import { configureStore } from "@reduxjs/toolkit";
import tournamentReducer from "./slices/tournament";
import playersReducer from "./slices/players";
import matchesReducer from "./slices/matches";

const reducer = {
	tournament: tournamentReducer,
	players: playersReducer,
	matches: matchesReducer
};

const store = configureStore({ reducer });

export default store;
