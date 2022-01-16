import Header from "../../components/Header";
import Search from "../../components/Search";
import landscape from "../../images/landscape.jpg";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-bottom bg-cover" style={{ backgroundImage: `url(${landscape})` }}>
			<Header />
			<main className="flex-grow flex flex-col backdrop-brightness-50">
				<div className="flex-grow flex flex-col p-4 md:flex-row justify-center md:container mx-auto items-center gap-8">
					<div>
						<h1 className="text-center text-white text-5xl sm:text-6xl md:text-left my-5">The Gonzalisticus Estate</h1>
						<h2 className="text-center text-white text-2xl sm:text-3xl md:text-left">
							Just another website to rent the best at the cheapest cost
						</h2>
					</div>
					<Search />
				</div>
			</main>
		</div>
	);
}
