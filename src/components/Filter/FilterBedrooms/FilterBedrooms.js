import { useDispatch, useSelector } from "react-redux";
import { toggleNumBedrooms } from "../../../redux/filter/actions";
import InputButton from "../InputButton";

export default function FilterBedrooms() {
	const { num_bedrooms } = useSelector((state) => state.filter);
	const dispatch = useDispatch();

	return (
		<section className="col-span-12 sm:col-span-6 lg:col-span-3 lg:row-start-1 mb-4">
			<h4 className="col-span-2 font-normal text-lg mb-2">Beedroms</h4>
			<div className="flex gap-2">
				{["0 (studio)", "1", "2", "3", "≥4"].map((value) => {
					return (
						<InputButton
							key={value}
							isActive={num_bedrooms.includes(value)}
							onClick={() => {
								dispatch(toggleNumBedrooms(value));
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
