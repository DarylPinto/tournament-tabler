import { createSlice } from "@reduxjs/toolkit";

interface Player {
	tag: String;
	mains: {
		s64?: String[];
		melee?: String[];
		brawl?: String[];
		pm?: String[];
		smash4?: String[];
		ultimate?: String[];
	};
	name: String;
	twitch: String;
	twitter: String;
	wiki: String;
	team: String;
}

const initialState: Player[] = [
	{
		tag: "MKLeo",
		mains: {
			ultimate: ["Joker", null]
		},
		name: "Leonardo Lopez Perez",
		twitch: "mkleo_fox",
		twitter: "Mkleosb",
		wiki: "https://liquipedia.net/smash/MKLeo",
		team: "https://twitter.com/echofoxgg"
	},
	{
		tag: "Tweek",
		mains: {
			ultimate: ["Wario", null]
		},
		name: "Gavin Dempsey",
		twitch: "tweekssb",
		twitter: "TweekSsb",
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

export const { actions, reducer } = playersSlice;
export default reducer;
