import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFilter } from "../../redux/filter/actions";
import { stringify } from "query-string";

import FilterBathrooms from "./FilterBathrooms";
import FilterBedrooms from "./FilterBedrooms";
import FilterCondition from "./FilterCondition";
import FilterOthers from "./FilterOthers";
import FilterPriceRange from "./FilterPriceRange";
import FilterPublication from "./FilterPublication";
import FilterType from "./FilterType";
import { useLocation, useNavigate } from "react-router-dom";

export default function Filter() {
	const filter = useSelector((state) => state.filter);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [isFilterInitialized, setFilterInitialized] = useState(false);

	useEffect(() => {
		if (!isFilterInitialized) {
			dispatch(loadFilter(location.search));

			setFilterInitialized(true);
		}
	}, [dispatch, isFilterInitialized, location]);

	useEffect(() => {
		const query = stringify(filter);

		navigate(`/dashboard?${query}`, { replace: true });
	}, [filter, navigate]);

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
