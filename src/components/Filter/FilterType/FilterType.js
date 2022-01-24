import { useDispatch, useSelector } from "react-redux";
import { switchType } from "../../../redux/filter/actions";
import InputCheck from "../../InputCheck";

export default function FilterType() {
	const { type } = useSelector((state) => state.filter);
	const dispatch = useDispatch();

	return (
		<section className="col-span-12 sm:col-span-6 lg:col-span-4 lg:row-start-1 grid grid-cols-2 mb-4">
			<h4 className="col-span-2 font-normal text-lg mb-2">Type of home</h4>
			<InputCheck
				name="type_apartment"
				label="Flat/Apartment"
				checked={type.includes("apartment")}
				onChange={() => {
					dispatch(switchType("apartment"));
				}}
			/>
			<InputCheck
				name="type_house"
				label="House"
				checked={type.includes("house")}
				onChange={() => {
					dispatch(switchType("house"));
				}}
			/>
			<InputCheck
				name="type_duplex"
				label="Duplex"
				checked={type.includes("duplex")}
				onChange={() => {
					dispatch(switchType("duplex"));
				}}
			/>
			<InputCheck
				name="type_penthouse"
				label="Penthouse"
				checked={type.includes("penthouse")}
				onChange={() => {
					dispatch(switchType("penthouse"));
				}}
			/>
		</section>
	);
}
