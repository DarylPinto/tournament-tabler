import { combineReducers } from "redux";
import { configureStore } from "redux-starter-kit";
import tournamentReducer from "store/slices/tournament";

const reducer = combineReducers({
	tournament: tournamentReducer
});

const store = configureStore({ reducer });
export default store;
