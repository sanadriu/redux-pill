import { SET_URL_PARAMS, SET_PROPERTY, TOGGLE_PROPERTY } from "./types";
import initialState from "./state";
import { getFilterFromUrl } from "./utils";

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_PROPERTY: {
			const { property, value } = action.payload;

			const index = state[property].indexOf(value);

			if (index === -1) {
				state[property].push(value);
			} else {
				state[property].splice(index, 1);
			}

			return { ...state };
		}
		case SET_PROPERTY: {
			const { property, value } = action.payload;

			state[property] = value;

			return { ...state };
		}
		case SET_URL_PARAMS: {
			return getFilterFromUrl(action.payload);
		}
		default: {
			return state;
		}
	}
}
