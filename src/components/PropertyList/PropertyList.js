import { useEffect } from "react";
import { useSelector } from "react-redux";
import useGetProperties from "../../hooks/useGetProperties";
import PropertyItem from "../PropertyItem";

export default function PropertyList() {
	const filter = useSelector((state) => state.filter);
	const { request, handleRequest } = useGetProperties();
	const { status, error, data: properties } = request;

	useEffect(() => {
		handleRequest(filter);
	}, [handleRequest, filter]);

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
				properties?.length &&
				properties.map((property) => <PropertyItem key={property.id} {...property} />)}
			{status === "error" && <div>{error.message}</div>}
		</section>
	);
}
