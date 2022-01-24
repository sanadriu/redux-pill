import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";

const baseStyles = {
	page: "flex justify-center items-center py-1 px-4 bg-cyan-700 hover:bg-cyan-800 text-white text-center font-light text-lg shadow-inner rounded-3xl",
	account:
		"flex justify-center items-center py-1 px-4 bg-white hover:bg-rose-700 text-cyan-700 hover:text-white text-center font-light text-lg shadow-inner rounded-3xl",
};

export default function Header() {
	return (
		<header className="bg-cyan-600/40 text-white backdrop-blur-3xl">
			<div className="container mx-auto h-16 flex items-center justify-between">
				<img className="w-12 aspect-square" src={logo} alt="logo" />
				<div className="flex gap-3">
					<NavLink
						className={({ isActive }) => (isActive ? `${baseStyles.page} shadow-cyan-900` : baseStyles.page)}
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? `${baseStyles.page} shadow-cyan-900` : baseStyles.page)}
						to="/dashboard"
					>
						Dasboard
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? `${baseStyles.account} shadow-rose-900` : baseStyles.account)}
						to="/login"
					>
						Sign In
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? `${baseStyles.account} shadow-rose-900` : baseStyles.account)}
						to="/register"
					>
						Sign Up
					</NavLink>
				</div>
			</div>
		</header>
	);
}
