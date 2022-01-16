import { useDispatch, useSelector } from "react-redux";
import { toggleNumBathrooms } from "../../../redux/filter/actions";
import InputButton from "../InputButton";

export default function FilterBedrooms() {
	const state = useSelector((state) => state.filter.num_bathrooms);
	const dispatch = useDispatch();

	return (
		<section className="col-span-12 sm:col-span-6 lg:col-span-2 lg:row-start-1 mb-4">
			<h4 className="col-span-2 font-normal text-lg mb-2">Bathrooms</h4>
			<div className="flex gap-2">
				{["1", "2", "≥3"].map((value) => {
					return (
						<InputButton
							key={value}
							isActive={state.includes(value)}
							onClick={() => {
								dispatch(toggleNumBathrooms(value));
							}}
						>
							{value}
						</InputButton>
					);
				})}
			</div>
		</section>
	);
}
