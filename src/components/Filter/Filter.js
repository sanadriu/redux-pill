import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setUrlParams } from "../../redux/filter/actions";
import FilterBathrooms from "./FilterBathrooms";
import FilterBedrooms from "./FilterBedrooms";
import FilterCondition from "./FilterCondition";
import FilterOthers from "./FilterOthers";
import FilterPriceRange from "./FilterPriceRange";
import FilterPublication from "./FilterPublication";
import FilterType from "./FilterType";

export default function Filter(props) {
	const [searchParams] = useSearchParams();
	const dispatch = useDispatch();

	console.log(searchParams.toString());

	useEffect(() => {
		dispatch(setUrlParams(searchParams));
	}, [dispatch, searchParams]);

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
