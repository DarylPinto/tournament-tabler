import { createSlice } from "redux-starter-kit";

const initialState = {
	name: "",
	smashTitle: "",
	bracketType: "",
	watchLink: "",
	bracketLink: ""
};

const tournamentSlice = createSlice({
	slice: "tournament",
	initialState: initialState,
	reducers: {
		updateInfo: (state, action) => {
			Object.assign(state, action.payload);
		}
	}
});

export const { actions, reducer } = tournamentSlice;
export default reducer;
