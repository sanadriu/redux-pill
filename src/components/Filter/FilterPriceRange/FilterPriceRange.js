import { useDispatch, useSelector } from "react-redux";
import { setMinPrice, setMaxPrice } from "../../../redux/filter/actions";

export default function FilterPriceRange() {
	const { price_gte, price_lte } = useSelector((state) => state.filter);

	const dispatch = useDispatch();

	return (
		<section className="col-span-12 sm:col-span-6 lg:col-span-3 lg:row-start-2 mb-4">
			<h4 className="font-normal text-lg mb-2">Price range</h4>
			<div className="flex items-center gap-2 ">
				<input
					className="py-1 pl-3 text-center text-sm font-light border border-orange-400 rounded outline-none"
					name="price_gte"
					type="number"
					step={10000}
					onChange={({ target: { value } }) => dispatch(setMinPrice(value))}
					value={price_gte}
					min={0}
					max={price_lte}
				/>
				<span> - </span>
				<input
					className="py-1 pl-3 text-center text-sm font-light border border-orange-400 rounded outline-none"
					name="price_lte"
					type="number"
					step={10000}
					onChange={({ target: { value } }) => dispatch(setMaxPrice(value))}
					value={price_lte}
					min={price_gte}
					max={10_000_000}
				/>
			</div>
		</section>
	);
}
