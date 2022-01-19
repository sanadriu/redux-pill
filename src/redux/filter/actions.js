import { FILTER_LOAD, FILTER_SET_VALUE, FILTER_SWITCH_LIST_VALUE, FILTER_CLEAR } from "./types";

export function switchType(value) {
	return { type: FILTER_SWITCH_LIST_VALUE, payload: { key: "type", value } };
}

export function switchCondition(value) {
	return { type: FILTER_SWITCH_LIST_VALUE, payload: { key: "condition", value } };
}

export function switchFilters(value) {
	return { type: FILTER_SWITCH_LIST_VALUE, payload: { key: "filters", value } };
}

export function switchNumBedrooms(value) {
	return { type: FILTER_SWITCH_LIST_VALUE, payload: { key: "num_bedrooms", value } };
}

export function switchNumBathrooms(value) {
	return { type: FILTER_SWITCH_LIST_VALUE, payload: { key: "num_bathrooms", value } };
}

export function setMinNumBedrooms(value) {
	return { type: FILTER_SET_VALUE, payload: { key: "num_bedrooms_gte", value } };
}

export function setMinNumBathrooms(value) {
	return { type: FILTER_SET_VALUE, payload: { key: "num_bathrooms_gte", value } };
}

export function setMinPrice(value) {
	return { type: FILTER_SET_VALUE, payload: { key: "price_gte", value } };
}

export function setMaxPrice(value) {
	return { type: FILTER_SET_VALUE, payload: { key: "price_lte", value } };
}

export function setPublicationDate(value) {
	return { type: FILTER_SET_VALUE, payload: { key: "publication_date", value } };
}

export function setSearchValue(value) {
	return { type: FILTER_SET_VALUE, payload: { key: "search", value } };
}

export function setHasGarden(value) {
	return { type: FILTER_SET_VALUE, payload: { key: "has_garden", value } };
}

export function setHasSwimmingPool(value) {
	return { type: FILTER_SET_VALUE, payload: { key: "has_swimming_pool", value } };
}

export function setHasTerrace(value) {
	return { type: FILTER_SET_VALUE, payload: { key: "has_terrace", value } };
}

export function setHasAirCondition(value) {
	return { type: FILTER_SET_VALUE, payload: { key: "has_air_conditioning", value } };
}

export function setHasLift(value) {
	return { type: FILTER_SET_VALUE, payload: { key: "has_lift", value } };
}

export function setAllowPets(value) {
	return { type: FILTER_SET_VALUE, payload: { key: "allow_pets", value } };
}

export function loadFilter(query) {
	return { type: FILTER_LOAD, payload: query };
}

export function clearFilter() {
	return { type: FILTER_CLEAR };
}
