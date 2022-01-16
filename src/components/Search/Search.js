import { useDispatch, useSelector } from "react-redux";
import { setSearchString } from "../../redux/filter/actions";
import { useNavigate } from "react-router-dom";
import icon from "../../images/search.svg";

export default function Search() {
	const state = useSelector((state) => state.search);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<form>
			<div className="flex justify-between gap-1 w-72 p-1 rounded-3xl bg-white/40">
				<input
					className="flex-grow py-2 px-4 rounded-md rounded-tl-3xl rounded-bl-3xl shadow-inner font-light outline-none bg-white/80 border focus:border-orange-300 text-orange-500 placeholder:text-orange-500"
					placeholder="False Street, 123"
					value={state}
					onChange={({ target: { value } }) => {
						dispatch(setSearchString(value));
					}}
				/>
				<button
					type="button"
					className="flex justify-center items-center w-8 rounded-md rounded-tr-3xl rounded-br-3xl shadow-sm bg-orange-300 hover:bg-orange-400"
					onClick={() => {
						navigate("/dashboard");
					}}
				>
					<img className="w-4" src={icon} alt="search" />
				</button>
			</div>
		</form>
	);
}
