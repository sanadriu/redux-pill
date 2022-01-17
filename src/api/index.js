import axios from "axios";

const BASE_URL = "http://localhost:4000";

export async function getProperties() {
	const response = await axios({
		baseURL: BASE_URL,
		url: "/properties",
		method: "GET",
	});

	return response.data;
}
