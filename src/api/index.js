import axios from "axios";
import { stringify } from "query-string";

const BASE_URL = "http://localhost:4000";
const LARAVEL_URL = "http://localhost:8100";

export async function login({ data }) {
	const response = await axios({
		baseURL: LARAVEL_URL,
		url: "/login",
		method: "POST",
		data,
	});

	return response.data;
}

export async function register({ data }) {
	const response = await axios({
		baseURL: LARAVEL_URL,
		url: "/register",
		method: "POST",
		data,
	});

	return response.data;
}

export async function getProperties(filter) {
	const {
		type,
		condition,
		num_bedrooms,
		num_bathrooms,
		num_bedrooms_gte,
		num_bathrooms_gte,
		price_lte,
		price_gte,
		search,
	} = filter;

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
			price_lte,
			price_gte,
			q: search,
		},
		paramsSerializer: stringify,
	});

	return response.data;
}
