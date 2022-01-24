import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/login" element={<SignIn />} />
					<Route path="/register" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
