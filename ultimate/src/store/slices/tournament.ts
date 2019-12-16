import { createSlice } from "@reduxjs/toolkit";
import { SmashTitle } from "../../data/customTypes";

interface Tournament {
	smashTitle: SmashTitle;
	round: string;
	streamLink: string;
}

const initialState: Tournament = {
	smashTitle: "ultimate",
	round: "Grand Finals",
	streamLink: ""
};

const tournamentSlice = createSlice({
	name: "tournament",
	initialState: initialState,
	reducers: {	
		updateTournament: (state, action) => {
			state = Object.assign({}, state, action.payload);	
			return state;
		}
	}
});

export const { actions, reducer } = tournamentSlice;
export default reducer;
