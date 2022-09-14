import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";

export const ChangeRoutes = () => {
	// const { acessToken } = useAuth();

	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	);
};
