import { UPDATE_TOURNAMENT_INFO } from "store/types";

const defaultState = {
	name: "",
	smashTitle: "",
	bracketType: "",
	watchLink: "",
	bracketLink: ""
};

export default (state = defaultState, { type, payload }) => {
	switch (type) {
	case UPDATE_TOURNAMENT_INFO:
		return Object.assign({}, state, payload);
	default:
		return state;
	}
};
