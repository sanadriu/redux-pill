import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";
import logout from "../../images/logout.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthLogout } from "../../redux/auth/actions";

const baseStyles = {
	page: "flex justify-center items-center py-1 px-4 bg-cyan-700 hover:bg-cyan-800 text-white text-center font-light text-lg shadow-inner rounded-3xl",
	account:
		"flex justify-center items-center py-1 px-4 bg-white hover:bg-rose-700 text-cyan-700 hover:text-white text-center font-light text-lg shadow-inner rounded-3xl",
};

export default function Header() {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	return (
		<header className="bg-cyan-600/10 text-white backdrop-blur-xl">
			<div className="container mx-auto h-16 flex items-center justify-between">
				<img className="w-12 aspect-square" src={logo} alt="logo" />
				<div className="flex gap-3">
					<NavLink
						className={({ isChecked }) => (isChecked ? `${baseStyles.page} shadow-cyan-900` : baseStyles.page)}
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						className={({ isChecked }) => (isChecked ? `${baseStyles.page} shadow-cyan-900` : baseStyles.page)}
						to="/dashboard"
					>
						Dasboard
					</NavLink>

					{!auth.user && (
						<NavLink
							className={({ isChecked }) => (isChecked ? `${baseStyles.account} shadow-rose-900` : baseStyles.account)}
							to="/login"
						>
							Sign In
						</NavLink>
					)}
					{!auth.user && (
						<NavLink
							className={({ isChecked }) => (isChecked ? `${baseStyles.account} shadow-rose-900` : baseStyles.account)}
							to="/register"
						>
							Sign Up
						</NavLink>
					)}
					{auth.user && (
						<div className="flex items-center p-2 gap-2 rounded-full shadow-md border border-gray-300">
							<img src={avatar} className="w-8" alt="avatar" />
							<span className="font-bold">{auth.user.name}</span>
							<button
								onClick={() => {
									dispatch(setAuthLogout());
								}}
							>
								<img src={logout} className="w-4" alt="logout" />
							</button>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
