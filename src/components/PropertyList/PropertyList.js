import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTimer from "../../hooks/useTimer";
import { fetchProperties } from "../../redux/properties/actions";
import PropertyItem from "../PropertyItem";

export default function PropertyList() {
	const filter = useSelector((state) => state.filter);
	const properties = useSelector((state) => state.properties);
	const { runTimer } = useTimer();

	const dispatch = useDispatch();

	const { status, error, result } = properties;

	useEffect(() => {
		runTimer(() => {
			dispatch(fetchProperties(filter));
		}, 300);
	}, [dispatch, filter, runTimer]);

	return (
		<section className="container mx-auto shadow-md rounded-md p-4 flex flex-col gap-4">
			<div className="grid grid-cols-8 gap-6">
				<span className="text-light text-gray-500">Image</span>
				<span className="text-light text-gray-500 col-span-2">Address</span>
				<span className="text-light text-gray-500">Price</span>
				<span className="text-light text-gray-500 col-span-2">Characteristics</span>
				<span className="text-light text-gray-500 text-center">Mark as sold</span>
				<span className="text-light text-gray-500 text-center">Remove</span>
			</div>
			{status === "loading"}
			{status === "success" &&
				result?.length &&
				result.map((property) => <PropertyItem key={property.id} {...property} />)}
			{status === "error" && <div>{error.message}</div>}
		</section>
	);
}
