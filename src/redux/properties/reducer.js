import { PROPERTIES_LOADING, PROPERTIES_SET_ERROR, PROPERTIES_SET_RESULT, PROPERTIES_RESET } from "./types";

import initialState from "./state";

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case PROPERTIES_RESET:
			return { result: [], error: undefined, status: "idle" };
		case PROPERTIES_LOADING:
			return { result: [], error: undefined, status: "loading" };
		case PROPERTIES_SET_RESULT:
			return { result: action.payload, error: undefined, status: "success" };
		case PROPERTIES_SET_ERROR:
			return { result: [], error: action.payload, status: "error" };
		default:
			return state;
	}
}
