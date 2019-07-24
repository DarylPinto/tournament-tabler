import { combineReducers, createStore } from "redux";
import createPrimitiveReducer from "store/reducers/createPrimitive";
import {
	CHANGE_SMASH_TITLE,
	SET_BRACKET_ROUND,
	SET_VOD_LINK,
	SET_BRACKET_LINK
} from "store/types";

const reducer = combineReducers({
	smashTitle: createPrimitiveReducer("Ultimate", CHANGE_SMASH_TITLE),
	bracketRound: createPrimitiveReducer("", SET_BRACKET_ROUND),
	vodLink: createPrimitiveReducer("", SET_VOD_LINK),
	bracketLink: createPrimitiveReducer("", SET_BRACKET_LINK)
	// players: playersReducer,
	// setData: setReducer
});

const devTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => createStore(reducer, {}, devTools);

export default configureStore;
