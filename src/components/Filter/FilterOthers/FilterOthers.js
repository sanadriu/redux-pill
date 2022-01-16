import { useDispatch, useSelector } from "react-redux";
import { toggleFilters } from "../../../redux/filter/actions";
import InputCheck from "../InputCheck";

export default function FilterOthers() {
	const state = useSelector((state) => state.filter.filters);
	const dispatch = useDispatch();

	return (
		<section className="col-span-12 lg:col-span-3 lg:row-span-2 lg:row-start-1 grid grid-cols-2 content-start mb-4">
			<h4 className="col-span-2 font-normal text-lg mb-2">More filters</h4>
			<InputCheck
				name="has_pool"
				label="Swimming pool"
				checked={state.includes("has_pool")}
				onChange={() => {
					dispatch(toggleFilters("has_pool"));
				}}
			/>
			<InputCheck
				name="has_lift"
				label="Lift"
				checked={state.includes("has_lift")}
				onChange={() => {
					dispatch(toggleFilters("has_lift"));
				}}
			/>
			<InputCheck
				name="has_garden"
				label="Garden"
				checked={state.includes("has_garden")}
				onChange={() => {
					dispatch(toggleFilters("has_garden"));
				}}
			/>
			<InputCheck
				name="has_ac"
				label="Air conditioning"
				checked={state.includes("has_ac")}
				onChange={() => {
					dispatch(toggleFilters("has_ac"));
				}}
			/>
			<InputCheck
				name="has_terrace"
				label="Terrace"
				checked={state.includes("has_terrace")}
				onChange={() => {
					dispatch(toggleFilters("has_terrace"));
				}}
			/>
			<InputCheck
				name="allowed_pets"
				label="Pets allowed"
				checked={state.includes("allowed_pets")}
				onChange={() => {
					dispatch(toggleFilters("allowed_pets"));
				}}
			/>
		</section>
	);
}
