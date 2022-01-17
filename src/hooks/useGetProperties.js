import { useDispatch, useSelector } from "react-redux";
import { loading, success, fail, reset } from "../redux/request/actions";
import { getProperties } from "../api";
import { useCallback } from "react";

export default function useGetProperties() {
	const request = useSelector((state) => state.properties);
	const dispatch = useDispatch();

	function handleRequest() {
		dispatch(loading());

		getProperties()
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
