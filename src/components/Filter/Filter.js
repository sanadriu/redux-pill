import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchParams } from "../../redux/filter/actions";
import { stringifyUrl } from "query-string";

import FilterBathrooms from "./FilterBathrooms";
import FilterBedrooms from "./FilterBedrooms";
import FilterCondition from "./FilterCondition";
import FilterOthers from "./FilterOthers";
import FilterPriceRange from "./FilterPriceRange";
import FilterPublication from "./FilterPublication";
import FilterType from "./FilterType";

export default function Filter() {
	const dispatch = useDispatch();
	const filter = useSelector((state) => state.filter);

	useEffect(() => {
		dispatch(setSearchParams(window.location.search));
	}, []);

	useEffect(() => {
		const url = stringifyUrl({ url: window.location.toString().replace(window.location.search, ""), query: filter });

		window.history.replaceState({}, null, url);
	}, [filter]);

	return (
		<form>
			<div className="container mx-auto shadow-md rounded-md p-4 grid grid-cols-12 ">
				<FilterType />
				<FilterCondition />
				<FilterBedrooms />
				<FilterBathrooms />
				<FilterPriceRange />
				<FilterPublication />
				<FilterOthers />
			</div>
		</form>
	);
}
