import { combineReducers, createStore } from "redux";
import tournamentReducer from "store/reducers/tournament";
// import playersReducer from "store/reducers/players";
// import gamesReducer from "store/reducers/games";
// import createPrimitiveReducer from "store/reducers/createPrimitive";
// import { UPDATE_ROUND } from "store/types";

const reducer = combineReducers({
	tournament: tournamentReducer
	// set: {
	// 	round: createPrimitiveReducer("", UPDATE_ROUND),
	// 	players: playersReducer,
	// 	games: gamesReducer
	// }
});

const devTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => createStore(reducer, {}, devTools);

export default configureStore;
