import { createSlice } from "@reduxjs/toolkit";

interface Notification {
	id: string;
	content: string;
}

const initialState: Notification[] = [];

const notificationsSlice = createSlice({
	name: "notifications",
	initialState: initialState,
	reducers: {
		createNotification: (state, action) => {
			if (state.length > 2) state.pop();
			state.push(action.payload);
		},
		destroyNotification: (state, action) => {
			const { id } = action.payload;
			return state.filter(notification => notification.id !== id);
		}
	}
});

export const showNotification = (content: string, duration: number) => {
	const { actions } = notificationsSlice;
	const { createNotification, destroyNotification } = actions;

	const id = Date.now().toString();

	return dispatch => {
		dispatch(createNotification({ id, content }));
		setTimeout(() => {
			dispatch(destroyNotification({ id }));
		}, duration);
	};
};

export const { actions, reducer } = notificationsSlice;
export default reducer;
