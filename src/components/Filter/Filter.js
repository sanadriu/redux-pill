import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter, loadFilter } from "../../redux/filter/actions";
import { stringify } from "query-string";

import FilterBathrooms from "./FilterBathrooms";
import FilterBedrooms from "./FilterBedrooms";
import FilterCondition from "./FilterCondition";
import FilterOthers from "./FilterOthers";
import FilterPriceRange from "./FilterPriceRange";
import FilterPublication from "./FilterPublication";
import FilterType from "./FilterType";

import FilterSearch from "./FilterSearch";
import InputButton from "../InputButton";

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
		<form className="flex flex-col gap-4">
			<div className="container mx-auto shadow-md rounded-md p-2 flex justify-between items-center">
				<FilterSearch />
				<InputButton
					onClick={() => {
						dispatch(clearFilter());
					}}
				>
					Clear
				</InputButton>
			</div>
			<div className="container mx-auto shadow-md rounded-md p-4 grid grid-cols-12">
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
