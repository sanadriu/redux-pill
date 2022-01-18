import { FILTER_LOAD, FILTER_SET_VALUE, FILTER_SWITCH_LIST_VALUE, FILTER_CLEAR } from "./types";

export function switchType(value) {
	return { type: FILTER_SWITCH_LIST_VALUE, payload: { property: "type", value } };
}

export function switchCondition(value) {
	return { type: FILTER_SWITCH_LIST_VALUE, payload: { property: "condition", value } };
}

export function switchFilters(value) {
	return { type: FILTER_SWITCH_LIST_VALUE, payload: { property: "filters", value } };
}

export function switchNumBedrooms(value) {
	return { type: FILTER_SWITCH_LIST_VALUE, payload: { property: "num_bedrooms", value } };
}

export function switchNumBathrooms(value) {
	return { type: FILTER_SWITCH_LIST_VALUE, payload: { property: "num_bathrooms", value } };
}

export function setMinNumBedrooms(value) {
	return { type: FILTER_SET_VALUE, payload: { property: "num_bedrooms_gte", value } };
}

export function setMinNumBathrooms(value) {
	return { type: FILTER_SET_VALUE, payload: { property: "num_bathrooms_gte", value } };
}

export function setMinPrice(value) {
	return { type: FILTER_SET_VALUE, payload: { property: "min_price", value } };
}

export function setMaxPrice(value) {
	return { type: FILTER_SET_VALUE, payload: { property: "max_price", value } };
}

export function setPublicationDate(value) {
	return { type: FILTER_SET_VALUE, payload: { property: "publication_date", value } };
}

export function setSearchValue(value) {
	return { type: FILTER_SET_VALUE, payload: { property: "search", value } };
}

export function loadFilter(query) {
	return { type: FILTER_LOAD, payload: query };
}

export function clearFilter() {
	return { type: FILTER_CLEAR };
}
