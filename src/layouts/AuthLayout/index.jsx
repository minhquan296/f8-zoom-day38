import { Outlet } from "react-router-dom";
import Header from "../components/header";
import AuthSidebar from "./components/AuthSidebar";
import Navigation from "@components/Navigation";

const AuthLayout = () => {
	return (
		<>
			<Header />
			<AuthSidebar />
			<Outlet />
			<Navigation />
		</>
	);
};
export default AuthLayout;
