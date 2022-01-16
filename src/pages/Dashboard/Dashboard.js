import Filter from "../../components/Filter";
import Header from "../../components/Header";

export default function Dashboard() {
	return (
		<>
			<Header />
			<main className="p-2">
				<Filter />
			</main>
		</>
	);
}
