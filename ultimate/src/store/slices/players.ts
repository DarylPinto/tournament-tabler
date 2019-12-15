import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const playersSlice = createSlice({
	name: "players",
	initialState: initialState,
	reducers: {}
});

export const { actions, reducer } = playersSlice;
export default reducer;
