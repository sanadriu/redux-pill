import axios from "axios";
import { stringify } from "query-string";

const BASE_URL = "http://localhost:4000";

export async function getProperties(filter) {
	const response = await axios({
		baseURL: BASE_URL,
		url: "/properties",
		method: "GET",
		params: {
			type: filter.type,
			condition: filter.condition,
			num_bedrooms: filter.num_bedrooms,
			num_bathrooms: filter.num_bathrooms,
		},
		paramsSerializer: stringify,
	});

	return response.data;
}
