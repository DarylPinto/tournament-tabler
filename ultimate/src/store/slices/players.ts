import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player } from "../../data/customTypes";
import resolveCharacter from "../../util/resolveCharacter";

const initialState: Player[] = [
	{
		tag: "MkLeo",
		mains: {
			ultimate: ["Byleth", null],
		},
		name: "Leonardo Lopez Perez",
		twitch: "https://twitch.tv/mkleo_fox",
		twitter: "https://twitter.com/Mkleosb",
		wiki: "https://liquipedia.net/smash/MKLeo",
		team: "https://t1.gg/",
	},
	{
		tag: "Tweek",
		mains: {
			ultimate: ["DiddyKong", null],
		},
		name: "Gavin Dempsey",
		twitch: "https://twitch.tv/tweekssb",
		twitter: "https://twitter.com/TweekSsb",
		wiki: "https://liquipedia.net/smash/Tweek",
		team: "https://tsm.gg/",
	},
];

const playersSlice = createSlice({
	name: "players",
	initialState: initialState,
	reducers: {
		updatePlayer: (
			state,
			{ payload }: PayloadAction<{ update: Player; playerIndex: number }>
		) => {
			const { update, playerIndex } = payload;
			const { mains } = update;
			for (const smashTitle in mains) {
				mains[smashTitle] = mains[smashTitle].map(resolveCharacter);
				mains[smashTitle] = mains[smashTitle].slice(0, 2);
				// If both mains are the same, remove the second. (Often happens with Pyra/Mythra)
				if (mains[smashTitle][1] === mains[smashTitle][0]) {
					mains[smashTitle] = mains[smashTitle].slice(0, 1);
				}
			}
			let targetPlayer = state[playerIndex];
			targetPlayer = Object.assign({}, targetPlayer, update);
			state[playerIndex] = targetPlayer;
			return state;
		},
		updateMains: (state, action) => {
			const { playerIndex, smashTitle, mainIndex, character } = action.payload;
			let targetPlayer = state[playerIndex];
			targetPlayer.mains[smashTitle][mainIndex] = resolveCharacter(character);
		},
	},
});

export const { updatePlayer, updateMains } = playersSlice.actions;
export default playersSlice.reducer;
