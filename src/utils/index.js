export function timer(data, time = 2000) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, time);
	});
}
