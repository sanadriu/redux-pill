import { LOADING, SUCCESS, RESET, FAIL } from "./types";

export function loading() {
	return { type: LOADING };
}

export function success(data) {
	return { type: SUCCESS, payload: data };
}

export function fail(error) {
	return { type: FAIL, payload: error };
}

export function reset() {
	return { type: RESET };
}
