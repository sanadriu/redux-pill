import { useDispatch, useSelector } from "react-redux";
import {
	setTerrace,
	setSwimmingPool,
	setGarden,
	setAirConditioning,
	setLift,
	setAllowPets,
} from "../../../redux/filter/actions";
import InputCheck from "../InputCheck";

export default function FilterOthers() {
	const { has_swimming_pool, has_terrace, has_garden, has_lift, has_air_conditioning, allow_pets } = useSelector(
		(state) => state.filter
	);
	const dispatch = useDispatch();

	return (
		<section className="col-span-12 lg:col-span-3 lg:row-span-2 lg:row-start-1 grid grid-cols-2 content-start mb-4">
			<h4 className="col-span-2 font-normal text-lg mb-2">More filters</h4>
			<InputCheck
				name="has_garden"
				label="Garden"
				indeterminate={has_garden === undefined}
				checked={has_garden}
				onChange={() => {
					dispatch(setGarden());
				}}
			/>
			<InputCheck
				name="has_pool"
				label="Swimming pool"
				indeterminate={has_swimming_pool === undefined}
				checked={has_swimming_pool}
				onChange={() => {
					dispatch(setSwimmingPool());
				}}
			/>
			<InputCheck
				name="has_air_conditioning"
				label="Air conditioning"
				indeterminate={has_air_conditioning === undefined}
				checked={has_air_conditioning}
				onChange={() => {
					dispatch(setAirConditioning());
				}}
			/>
			<InputCheck
				name="has_terrace"
				label="Terrace"
				indeterminate={has_terrace === undefined}
				checked={has_terrace}
				onChange={() => {
					dispatch(setTerrace());
				}}
			/>
			<InputCheck
				name="has_lift"
				label="Lift"
				indeterminate={has_lift === undefined}
				checked={has_lift}
				onChange={() => {
					dispatch(setLift());
				}}
			/>
			<InputCheck
				name="allowed_pets"
				label="Pets allowed"
				indeterminate={allow_pets === undefined}
				checked={allow_pets}
				onChange={() => {
					dispatch(setAllowPets());
				}}
			/>
		</section>
	);
}
