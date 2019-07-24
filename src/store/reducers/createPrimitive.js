// This function creates a reducer that simply replaces a primitive
// value with another. Useful for un-nested strings etc.
export default function(initialValue, ACTION_TYPE) {
	return function(state = initialValue, { type, payload }) {
		switch (type) {
		case ACTION_TYPE:
			return payload;
		default:
			return state;
		}
	};
}
