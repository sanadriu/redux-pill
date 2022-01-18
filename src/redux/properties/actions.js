import { PROPERTIES_LOAD } from "./types";

export function loadProperties(properties) {
	return { type: PROPERTIES_LOAD, payload: properties };
}
