import { createSlice } from "@reduxjs/toolkit";
import { Match } from "~/data/customTypes";

const MATCH_COUNT = 5;

const blankMatch: Match = {
	characters: [null, null],
	stage: "",
	winnerIndex: -1,
	stocksRemaining: 0
};

let initialState: Match[] = Array(MATCH_COUNT).fill(blankMatch);

initialState[0] = {
	characters: ["Joker", "Wario"],
	stage: "Battlefield",
	winnerIndex: 0,
	stocksRemaining: 2
};

const matchesSlice = createSlice({
	name: "matches",
	initialState: initialState,
	reducers: {
		updateMatch: (state, action) => {
			const { matchIndex } = action.payload;
			let targetMatch = state[matchIndex];
			targetMatch = Object.assign({}, targetMatch, action.payload.update);
			state[matchIndex] = targetMatch;
			return state;
		},
		updateCharacter: (state, action) => {
			const { matchIndex, characterIndex, character } = action.payload;
			let targetMatch = state[matchIndex];
			targetMatch.characters[characterIndex] = character;
		}
	}
});

export const { updateMatch, updateCharacter } = matchesSlice.actions;
export default matchesSlice.reducer;
