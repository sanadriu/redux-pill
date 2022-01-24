import { FILTER_LOAD, FILTER_SET_VALUE, FILTER_SWITCH_VALUE, FILTER_SWITCH_LIST_VALUE, FILTER_CLEAR } from "./types";

export function setType(value) {
  return { type: FILTER_SWITCH_LIST_VALUE, payload: { key: "type", value } };
}

export function setCondition(value) {
  return { type: FILTER_SWITCH_LIST_VALUE, payload: { key: "condition", value } };
}

export function setNumBedrooms(value) {
  return { type: FILTER_SWITCH_LIST_VALUE, payload: { key: "num_bedrooms", value } };
}

export function setNumBathrooms(value) {
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

export function setGarden() {
  return { type: FILTER_SWITCH_VALUE, payload: { key: "has_garden" } };
}

export function setSwimmingPool() {
  return { type: FILTER_SWITCH_VALUE, payload: { key: "has_swimming_pool" } };
}

export function setTerrace() {
  return { type: FILTER_SWITCH_VALUE, payload: { key: "has_terrace" } };
}

export function setAirConditioning() {
  return { type: FILTER_SWITCH_VALUE, payload: { key: "has_air_conditioning" } };
}

export function setLift() {
  return { type: FILTER_SWITCH_VALUE, payload: { key: "has_lift" } };
}

export function setAllowPets() {
  return { type: FILTER_SWITCH_VALUE, payload: { key: "allow_pets" } };
}

export function loadFilter(query) {
  return { type: FILTER_LOAD, payload: query };
}

export function clearFilter() {
  return { type: FILTER_CLEAR };
}
