import { useCallback, useState, useEffect } from "react";

export default function useTimer() {
	const [timer, setTimer] = useState(null);

	const runTimer = useCallback((cb = () => {}, time = 1000) => {
		if (timer) clearTimeout(timer);

		setTimer(setTimeout(cb, time));
	}, []);

	const cancelTimer = useCallback(() => {
		if (timer) clearTimeout(timer);

		setTimer(null);
	}, []);

	useEffect(() => {
		return cancelTimer;
	}, [cancelTimer]);

	return {
		runTimer,
		cancelTimer,
	};
}
