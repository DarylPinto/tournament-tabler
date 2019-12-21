import { createSlice } from "@reduxjs/toolkit";
import { Player } from "../../data/customTypes";

const initialState: Player[] = [
	{
		tag: "MkLeo",
		mains: {
			ultimate: ["Joker", null]
		},
		name: "Leonardo Lopez Perez",
		twitch: "https://twitch.tv/mkleo_fox",
		twitter: "https://twitter.com/Mkleosb",
		wiki: "https://liquipedia.net/smash/MKLeo",
		team: ""
	},
	{
		tag: "Tweek",
		mains: {
			ultimate: ["Wario", null]
		},
		name: "Gavin Dempsey",
		twitch: "https://twitch.tv/tweekssb",
		twitter: "https://twitter.com/TweekSsb",
		wiki: "https://liquipedia.net/smash/Tweek",
		team: "https://tsm.gg/"
	}
];

const playersSlice = createSlice({
	name: "players",
	initialState: initialState,
	reducers: {
		updatePlayer: (state, action) => {
			const { playerIndex } = action.payload;
			let targetPlayer = state[playerIndex];
			targetPlayer = Object.assign({}, targetPlayer, action.payload.update);
			state[playerIndex] = targetPlayer;
			return state;
		},
		updateMains: (state, action) => {
			const { playerIndex, smashTitle, mainIndex, character } = action.payload;
			let targetPlayer = state[playerIndex];
			targetPlayer.mains[smashTitle][mainIndex] = character;
		}
	}
});

export const { updatePlayer, updateMains } = playersSlice.actions;
export default playersSlice.reducer;
