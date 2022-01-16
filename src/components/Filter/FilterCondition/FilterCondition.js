import { useDispatch, useSelector } from "react-redux";
import { toggleCondition } from "../../../redux/filter/actions";
import InputCheck from "../InputCheck";

export default function FilterCondition() {
	const state = useSelector((state) => state.filter.condition);
	const dispatch = useDispatch();

	return (
		<section className="col-span-12 sm:col-span-6 lg:col-span-4 lg:row-start-2 grid grid-cols-2 mb-4">
			<h4 className="col-span-2 font-normal text-lg mb-2">Condition</h4>
			<InputCheck
				name="condition_new"
				label="New"
				checked={state.includes("new")}
				onChange={() => {
					dispatch(toggleCondition("new"));
				}}
			/>
			<InputCheck
				name="condition_good"
				label="Good"
				checked={state.includes("good")}
				onChange={() => {
					dispatch(toggleCondition("good"));
				}}
			/>
			<InputCheck
				name="condition_to_restore"
				label="Restoration required"
				checked={state.includes("to_restore")}
				onChange={() => {
					dispatch(toggleCondition("to_restore"));
				}}
			/>
		</section>
	);
}
