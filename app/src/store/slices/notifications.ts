import { createSlice } from "@reduxjs/toolkit";

const MAX_NOTIFICATION_COUNT = 5;

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
			if (state.length === MAX_NOTIFICATION_COUNT) state.pop();
			state.push(action.payload);
		},
		destroyNotification: (state, action) => {
			const { id } = action.payload;
			return state.filter(notification => notification.id !== id);
		}
	}
});

// Thunk action-creator to show an action
// dispatches `createNotification` and then dispatches `destroyNotification`
// after `duration` ms
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

export default notificationsSlice.reducer;
