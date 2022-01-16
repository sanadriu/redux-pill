import { TOGGLE_PROPERTY, SET_PROPERTY } from "./types";

export function toggleType(value) {
	return { type: TOGGLE_PROPERTY, payload: { property: "type", value } };
}

export function toggleCondition(value) {
	return { type: TOGGLE_PROPERTY, payload: { property: "condition", value } };
}

export function toggleFilters(value) {
	return { type: TOGGLE_PROPERTY, payload: { property: "filters", value } };
}

export function toggleNumBedrooms(value) {
	return { type: TOGGLE_PROPERTY, payload: { property: "num_bedrooms", value } };
}

export function toggleNumBathrooms(value) {
	return { type: TOGGLE_PROPERTY, payload: { property: "num_bathrooms", value } };
}

export function setMinPrice(value) {
	return { type: SET_PROPERTY, payload: { property: "min_price", value } };
}

export function setMaxPrice(value) {
	return { type: SET_PROPERTY, payload: { property: "max_price", value } };
}

export function setPublicationDate(value) {
	return { type: SET_PROPERTY, payload: { property: "publication_date", value } };
}

export function setSearchString(value) {
	return { type: SET_PROPERTY, payload: { property: "search", value } };
}
