// export function getFilterParams(searchQuery) {
// 	const searchParams = new URLSearchParams(searchQuery);
// 	const filterParams = {};

// 	if (searchParams.has("type")) {
// 		filterParams.type = searchParams.getAll("type");
// 	}

// 	if (searchParams.has("condition")) {
// 		filterParams.condition = searchParams.getAll("condition");
// 	}

// 	if (searchParams.has("filters")) {
// 		filterParams.filters = searchParams.getAll("filters");
// 	}

// 	if (searchParams.has("num_bedrooms")) {
// 		filterParams.num_bedrooms = searchParams.getAll("num_bedrooms");
// 	}

// 	if (searchParams.has("num_bathrooms")) {
// 		filterParams.num_bathrooms = searchParams.getAll("num_bathrooms");
// 	}

// 	if (searchParams.has("min_price")) {
// 		const value = searchParams.get("min_price");

// 		filterParams.min_price = isNaN(value) ? Number(value) : 0;
// 	}

// 	if (searchParams.has("max_price")) {
// 		const value = searchParams.get("max_price");

// 		filterParams.max_price = isNaN(value) ? Number(value) : 10_000_000;
// 	}

// 	if (searchParams.has("search")) {
// 		filterParams.search = searchParams.get("search");
// 	}

// 	return filterParams;
// }

export function getFilterParams(searchQuery) {
	const searchParams = new URLSearchParams(searchQuery);

	return {
		type: searchParams.getAll("type"),
		condition: searchParams.getAll("condition"),
		filters: searchParams.getAll("filters"),
		num_bedrooms: searchParams.getAll("num_bedrooms"),
		num_bathrooms: searchParams.getAll("num_bathrooms"),
		min_price: !isNaN(searchParams.get("min_price")) ? Number(searchParams.get("min_price")) : 0,
		max_price: !isNaN(searchParams.get("max_price")) ? Number(searchParams.get("max_price")) : 10_000_000,
		publication_date: searchParams.get("publication_date") ?? "all",
		search: searchParams.get("search") ?? "",
	};
}
