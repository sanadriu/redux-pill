import { AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SET_ERROR, AUTH_CLEAR_ERROR } from "./types";
import initialState from "./state";

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case AUTH_LOADING: {
			return {
				...state,
				status: "loading",
				error: null,
			};
		}
		case AUTH_LOGIN: {
			return {
				status: "idle",
				error: null,
				user: action.payload,
			};
		}
		case AUTH_LOGOUT: {
			return {
				status: "idle",
				error: null,
				user: null,
			};
		}
		case AUTH_SET_ERROR: {
			return {
				...state,
				status: "error",
				error: action.payload,
			};
		}
		case AUTH_CLEAR_ERROR: {
			return {
				...state,
				status: "idle",
				error: null,
			};
		}
		default: {
			return state;
		}
	}
}
