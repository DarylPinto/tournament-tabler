import { configureStore } from "@reduxjs/toolkit";
import undoable from "redux-undo";
import tournamentReducer from "./slices/tournament";
import playersReducer from "./slices/players";
import matchesReducer from "./slices/matches";
import notificationsReducer from "./slices/notifications";

const reducer = {
	tournament: tournamentReducer,
	players: undoable(playersReducer, { limit: 1 }),
	matches: matchesReducer,
	notifications: notificationsReducer
};

const store = configureStore({ reducer });

export default store;
