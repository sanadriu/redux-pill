import { useDispatch, useSelector } from "react-redux";
import { toggleType } from "../../../redux/filter/actions";
import InputCheck from "../InputCheck";

export default function FilterType() {
	const state = useSelector((state) => state.filter.type);
	const dispatch = useDispatch();

	return (
		<section className="col-span-12 sm:col-span-6 lg:col-span-4 lg:row-start-1 grid grid-cols-2 mb-4">
			<h4 className="col-span-2 font-normal text-lg mb-2">Type of home</h4>
			<InputCheck
				name="type_apartment"
				label="Flat/Apartment"
				checked={state.includes("apartment")}
				onChange={() => {
					dispatch(toggleType("apartment"));
				}}
			/>
			<InputCheck
				name="type_house"
				label="House"
				checked={state.includes("house")}
				onChange={() => {
					dispatch(toggleType("house"));
				}}
			/>
			<InputCheck
				name="type_duplex"
				label="Duplex"
				checked={state.includes("duplex")}
				onChange={() => {
					dispatch(toggleType("duplex"));
				}}
			/>
			<InputCheck
				name="type_penthouse"
				label="Penthouse"
				checked={state.includes("penthouse")}
				onChange={() => {
					dispatch(toggleType("penthouse"));
				}}
			/>
		</section>
	);
}
