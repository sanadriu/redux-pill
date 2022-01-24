import { useDispatch, useSelector } from "react-redux";
import { setCondition } from "../../../redux/filter/actions";
import InputCheck from "../../InputCheck";

export default function FilterCondition() {
	const { condition } = useSelector((state) => state.filter);
	const dispatch = useDispatch();

	return (
		<section className="col-span-12 sm:col-span-6 lg:col-span-4 lg:row-start-2 grid grid-cols-2 mb-4">
			<h4 className="col-span-2 font-normal text-lg mb-2">Condition</h4>
			<InputCheck
				name="condition_new"
				label="New"
				checked={condition.includes("new")}
				onChange={() => {
					dispatch(setCondition("new"));
				}}
			/>
			<InputCheck
				name="condition_good"
				label="Good"
				checked={condition.includes("good")}
				onChange={() => {
					dispatch(setCondition("good"));
				}}
			/>
			<InputCheck
				name="condition_to_restore"
				label="Restoration required"
				checked={condition.includes("to_restore")}
				onChange={() => {
					dispatch(setCondition("to_restore"));
				}}
			/>
		</section>
	);
}
