import { LOADING, SUCCESS, RESET, FAIL } from "./types";
import initialState from "./state";

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case RESET:
			return { status: "idle", data: [], error: null };
		case LOADING:
			return { status: "loading", data: [], error: null };
		case SUCCESS:
			return { status: "success", data: action.payload, error: null };
		case FAIL:
			return { status: "error", data: [], error: action.payload };
		default:
			return state;
	}
}
