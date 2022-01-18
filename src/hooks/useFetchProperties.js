import { useCallback, useReducer } from "react";

import requestReducer from "./request/reducer";
import initialState from "./request/state";
import { loading, success, fail, reset } from "./request/actions";

import { getProperties } from "../api";

export default function useFetchProperties() {
	const [request, dispatch] = useReducer(requestReducer, initialState);

	function handleRequest(filter) {
		dispatch(loading());

		getProperties(filter)
			.then((data) => {
				dispatch(success(data));
			})
			.catch((error) => {
				dispatch(fail(error));
			});
	}

	function handleReset() {
		dispatch(reset());
	}

	return {
		handleRequest: useCallback(handleRequest, [dispatch]),
		handleReset: useCallback(handleReset, [dispatch]),
		request,
	};
}
