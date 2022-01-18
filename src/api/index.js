import axios from "axios";
import { stringify } from "query-string";

const BASE_URL = "http://localhost:4000";

export async function getProperties(filter) {
	const { type, condition, num_bedrooms, num_bathrooms, num_bedrooms_gte, num_bathrooms_gte, search } = filter;

	const response = await axios({
		baseURL: BASE_URL,
		url: "/properties",
		method: "GET",
		params: {
			type,
			condition,
			num_bedrooms,
			num_bedrooms_gte,
			num_bathrooms,
			num_bathrooms_gte,
			q: search,
		},
		paramsSerializer: stringify,
	});

	return response.data;
}
