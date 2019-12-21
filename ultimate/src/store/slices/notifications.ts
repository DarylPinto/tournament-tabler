import { createSlice } from "@reduxjs/toolkit";

type NotificationKind = "info" | "success" | "warning" | "error";

interface Notification {
	id: string;
	kind: NotificationKind;
	content: string;
}

const initialState: Notification[] = [];

const notificationsSlice = createSlice({
	name: "notifications",
	initialState: initialState,
	reducers: {
		createNotification: (state, action) => {
			state.push(action.payload);
		},
		destroyNotification: (state, action) => {
			const { id } = action.payload;
			return state.filter(notification => notification.id !== id);
		}
	}
});

export const showNotification = (
	kind: NotificationKind,
	content: string,
	duration: number
) => {
	const { actions } = notificationsSlice;
	const { createNotification, destroyNotification } = actions;

	const id = Date.now().toString();

	return dispatch => {
		dispatch(createNotification({ id, kind, content }));
		setTimeout(() => {
			dispatch(destroyNotification({ id }));
		}, duration);
	};
};

export const { actions, reducer } = notificationsSlice;
export default reducer;
