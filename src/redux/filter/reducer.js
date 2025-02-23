import { FILTER_CLEAR, FILTER_LOAD, FILTER_SET_VALUE, FILTER_SWITCH_VALUE, FILTER_SWITCH_LIST_VALUE } from "./types";
import initialState from "./state";
import { parse } from "query-string";

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case FILTER_SWITCH_LIST_VALUE: {
			const { key, value } = action.payload;

			if (!(state[key] instanceof Array)) state[key] = [state[key]];

			const index = state[key].indexOf(value);

			if (index === -1) {
				state[key].push(value);
			} else {
				state[key].splice(index, 1);
			}

			return { ...state };
		}

		case FILTER_SET_VALUE: {
			const { key, value } = action.payload;

			state[key] = value;

			return { ...state };
		}

		case FILTER_SWITCH_VALUE: {
			const { key } = action.payload;

			switch (state[key]) {
				case true: {
					state[key] = false;
					return { ...state };
				}
				case false: {
					state[key] = undefined;
					return { ...state };
				}
				case undefined: {
					state[key] = true;
					return { ...state };
				}
				default: {
					return { ...state };
				}
			}
		}

		case FILTER_LOAD: {
			return { ...state, ...parse(action.payload, { parseBooleans: true }) };
		}

		case FILTER_CLEAR: {
			return { ...initialState };
		}

		default: {
			return state;
		}
	}
}
