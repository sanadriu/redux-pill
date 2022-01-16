import { useDispatch, useSelector } from "react-redux";
import { setMinPrice, setMaxPrice } from "../../../redux/filter/actions";

export default function FilterPriceRange() {
	const state = useSelector((state) => ({
		min_price: state.filter.min_price,
		max_price: state.filter.max_price,
	}));

	const dispatch = useDispatch();

	return (
		<section className="col-span-12 sm:col-span-6 lg:col-span-3 lg:row-start-2 mb-4">
			<h4 className="font-normal text-lg mb-2">Price range</h4>
			<div className="flex items-center gap-2 ">
				<input
					className="py-1 pl-3 text-center text-sm font-light border border-orange-400 rounded outline-none"
					name="min_price"
					type="number"
					step={10000}
					onChange={({ target: { value } }) => dispatch(setMinPrice(value))}
					value={state.min_price}
					min={0}
					max={state.max_price}
				/>
				<span> - </span>
				<input
					className="py-1 pl-3 text-center text-sm font-light border border-orange-400 rounded outline-none"
					name="max_price"
					type="number"
					step={10000}
					onChange={({ target: { value } }) => dispatch(setMaxPrice(value))}
					value={state.max_price}
					min={state.min_price}
					max={10_000_000}
				/>
			</div>
		</section>
	);
}
