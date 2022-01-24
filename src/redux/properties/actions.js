import { PROPERTIES_LOADING, PROPERTIES_SET_ERROR, PROPERTIES_SET_RESULT, PROPERTIES_RESET } from "./types";
import { getProperties } from "../../api";

function setPropertiesLoading() {
	return { type: PROPERTIES_LOADING };
}

function setPropertiesResult(result) {
	return { type: PROPERTIES_SET_RESULT, payload: result };
}

function setPropertiesError(error) {
	return { type: PROPERTIES_SET_ERROR, payload: error };
}

export function clearProperties() {
	return { type: PROPERTIES_RESET };
}

export function fetchProperties(filter) {
	return async (dispatch) => {
		dispatch(setPropertiesLoading());

		try {
			const result = await getProperties(filter);

			dispatch(setPropertiesResult(result));
		} catch (error) {
			dispatch(setPropertiesError(error));
		}
	};
}
