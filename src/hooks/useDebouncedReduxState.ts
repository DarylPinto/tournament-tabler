import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash.debounce";

const DEBOUNCE_WAIT = 500;

/**
 * This hook allows us to debounce redux dispatches for frequently updating global state
 * while also maintaining local state to keep the UI feeling responsive in areas that
 * need it most
 *
 * A primary use-case for this hook is an input field that updates the redux store
 * The API for this hook is similar to `useState`
 *
 * Example usage:
 *
 * import { someActionCreator } from "~/store/slices/foobar";
 *
 * const initialValueReduxSelector = state => state.foo.bar;
 * const [foo, setFoo] = useDebouncedReduxState(
 *   initialValueReduxSelector,
 *   someActionCreator
 * );
 *
 * <input value={foo} onChange={e => setFoo(e.target.value)} />
 *
 * @param reduxSelector - Redux-selector to determine initial state for `value`
 * @param reduxActionCreator - Action-creator to dispatch after passing params via `setValue`
 */
const useDebouncedReduxState = (
	initialValueReduxSelector,
	reduxActionCreator
) => {
	const initialValue = useSelector(initialValueReduxSelector);
	const [localValue, setLocalValue] = useState(initialValue);

	const dispatch = useDispatch();
	const debouncedDispatch = useRef(debounce(dispatch, DEBOUNCE_WAIT));

	/**
	 * Setter function (similar to the second return value in `useState`)
	 *
	 * @param newValue - value to set to local `useState` state
	 * @param actionCreatorParam - param to pass to action creator to update the store. If this is the same as `newValue` it may be omitted
	 */
	const setValue = (newValue, actionCreatorParam = newValue) => {
		const action = reduxActionCreator(actionCreatorParam);
		debouncedDispatch.current(action);
		setLocalValue(newValue);
	};

	return [localValue, setValue];
};

export default useDebouncedReduxState;
