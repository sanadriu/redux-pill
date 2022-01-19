export function timer(time = 2000) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, time);
	});
}

export function getPublicationDate(value) {
	const date = new Date();

	switch (value) {
		case "24h": {
			date.setDate(date.getDate() - 1);

			return date;
		}
		case "48h": {
			date.setDate(date.getDate() - 2);

			return date;
		}
		case "1w": {
			date.setDate(date.getDate() - 7);

			return date;
		}
		case "1m": {
			date.setMonth(date.getMonth() - 1);

			return date;
		}
		case "1y": {
			date.setFullYear(date.getFullYear() - 1);

			return date;
		}
		default: {
			return null;
		}
	}
}
