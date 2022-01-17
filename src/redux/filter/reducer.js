import { FILTER_CLEAR, FILTER_SET_SEARCH_PARAMS, FILTER_SET_VALUE, FILTER_SWITCH_LIST_VALUE } from "./types";
import initialState from "./state";
import { getFilterParams } from "./utils";

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case FILTER_SWITCH_LIST_VALUE: {
			const { property, value } = action.payload;

			const index = state[property].indexOf(value);

			if (index === -1) {
				state[property].push(value);
			} else {
				state[property].splice(index, 1);
			}

			return { ...state };
		}
		case FILTER_SET_VALUE: {
			const { property, value } = action.payload;

			state[property] = value;

			return { ...state };
		}
		case FILTER_SET_SEARCH_PARAMS: {
			return getFilterParams(action.payload);
		}
		case FILTER_CLEAR: {
			return initialState;
		}
		default: {
			return state;
		}
	}
}
