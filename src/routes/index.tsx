import { BrowserRouter as Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Route } from "./Route";

export const ChangeRoutes = () => {
	// const { acessToken } = useAuth();

	return (
		<Routes>
			<Route path="/" component={Login} />
			<Route path="/signup" component={Signup} />
			<Route path="/dashboard" component={Dashboard} />
		</Routes>
	);
};
