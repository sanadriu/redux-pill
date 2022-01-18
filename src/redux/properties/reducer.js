import { PROPERTIES_LOAD } from "./types";
import initialState from "./state";

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case PROPERTIES_LOAD:
			return [...action.payload];
		default:
			return state;
	}
}
