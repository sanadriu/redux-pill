import Filter from "../../components/Filter";
import Header from "../../components/Header";
import PropertyList from "../../components/PropertyList";

export default function Dashboard() {
	return (
		<>
			<Header />
			<main className="p-2">
				<Filter />
				<PropertyList />
			</main>
		</>
	);
}
