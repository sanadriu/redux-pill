import { useEffect } from "react";
import useGetProperties from "../../hooks/useGetProperties";
import PropertyItem from "../PropertyItem";

export default function PropertyList() {
	const { request, handleRequest } = useGetProperties();
	const { status, error, data: properties } = request;

	useEffect(() => {
		handleRequest();
	}, [handleRequest]);

	return (
		<section className="container mx-auto shadow-md rounded-md p-4 flex flex-col gap-4">
			<div className="grid grid-cols-8 gap-6">
				<span className="text-light text-gray-500">Image</span>
				<span className="text-light text-gray-500 col-span-2">Address</span>
				<span className="text-light text-gray-500">Price</span>
				<span className="text-light text-gray-500 col-span-2">Characteristics</span>
				<span className="text-light text-center text-gray-500">Mark as sold</span>
				<span className="text-light text-center text-gray-500">Remove</span>
			</div>
			{status === "loading"}
			{status === "success" &&
				properties?.length &&
				properties.map((property) => <PropertyItem key={property.id} {...property} />)}
			{status === "error" && <div>{error.message}</div>}
		</section>
	);
}
