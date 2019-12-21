import { configureStore } from "@reduxjs/toolkit";
import tournamentReducer from "./slices/tournament";
import playersReducer from "./slices/players";
import matchesReducer from "./slices/matches";
import notificationsReducer from "./slices/notifications";

const reducer = {
	tournament: tournamentReducer,
	players: playersReducer,
	matches: matchesReducer,
	notifications: notificationsReducer
};

const store = configureStore({ reducer });

export default store;
