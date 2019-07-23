import { combineReducers, createStore } from "redux";
import productsReducer from "store/modules/products.js";

const reducer = combineReducers({
	products: productsReducer
});

const defaultState = {};

const initialState = window.localStorage.getItem("state")
	? JSON.parse(window.localStorage.getItem("state"))
	: defaultState;

const devToolsAvailable =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Initialize store and persist state to localStorage
const initializeStore = () => {
	const store = createStore(reducer, initialState, devToolsAvailable);

	store.subscribe(() => {
		window.localStorage.setItem("state", JSON.stringify(store.getState()));
	});

	return store;
};

export default initializeStore;
