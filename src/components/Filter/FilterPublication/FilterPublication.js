import { useDispatch, useSelector } from "react-redux";
import { setPublicationDate } from "../../../redux/filter/actions";

export default function FilterPriceRange() {
	const { publicationDate } = useSelector((state) => state.filter);
	const dispatch = useDispatch();

	return (
		<section className="col-span-12 sm:col-span-6 lg:col-span-2 lg:row-start-2 mb-4">
			<h4 className="font-normal text-lg mb-2">Publication date</h4>
			<select
				className="py-1 w-36 text-center text-sm font-light border border-orange-400 rounded outline-none"
				name="publication_date"
				value={publicationDate}
				onChange={({ target: { value } }) => {
					dispatch(setPublicationDate(value));
				}}
			>
				<option value="all">All</option>
				<option value="24h">Last 24 hours</option>
				<option value="48h">Last 48 hours</option>
				<option value="1w">Last week</option>
				<option value="1m">Last month</option>
				<option value="1y">Last year</option>
			</select>
		</section>
	);
}
