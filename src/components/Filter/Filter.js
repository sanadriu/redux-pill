import { useSelector } from "react-redux";

import FilterBathrooms from "./FilterBathrooms";
import FilterBedrooms from "./FilterBedrooms";
import FilterCondition from "./FilterCondition";
import FilterOthers from "./FilterOthers";
import FilterPriceRange from "./FilterPriceRange";
import FilterPublication from "./FilterPublication";
import FilterType from "./FilterType";

export default function Filter(props) {
	const state = useSelector((state) => state.filter);
	console.log(state);

	return (
		<form>
			<div className="container mx-auto grid grid-cols-12 shadow-md rounded-md p-4">
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
