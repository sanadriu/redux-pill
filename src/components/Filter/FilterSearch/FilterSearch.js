import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../../redux/filter/actions";

export default function Search() {
	const { search } = useSelector((state) => state.filter);
	const dispatch = useDispatch();

	return (
		<input
			className="w-64 block py-2 px-4 rounded-md rounded-tr-3xl rounded-br-3xl shadow-inner font-light outline-none bg-white/80 border focus:border-orange-500 text-orange-500 placeholder:text-orange-300"
			placeholder="False Street, 123"
			value={search}
			onChange={({ target: { value } }) => {
				dispatch(setSearchValue(value));
			}}
		/>
	);
}
