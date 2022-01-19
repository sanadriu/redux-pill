import { useCallback, useState, useEffect } from "react";

export default function useTimer() {
	const [timer, setTimer] = useState(null);

	function runTimer(cb = () => {}, time = 1000) {
		if (timer) clearTimeout(timer);

		setTimer(setTimeout(cb, time));
	}

	function cancelTimer() {
		if (timer) clearTimeout(timer);

		setTimer(null);
	}

	useEffect(() => {
		return cancelTimer;
	}, [cancelTimer]);

	return {
		runTimer: useCallback(runTimer, [runTimer]),
		cancelTimer: useCallback(cancelTimer, [cancelTimer]),
	};
}
