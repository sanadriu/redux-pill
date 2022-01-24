import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { setAuthLogin } from "./redux/auth/actions";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));

		if (user) dispatch(setAuthLogin(user));
	}, [dispatch]);

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="/home" element={<Home />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/login" element={<SignIn />} />
					<Route path="/register" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
