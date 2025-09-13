import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "../../components/Navigation";

const DefaultLayOut = () => {
	return (
		<>
			<Header />
			<Navigation />
			<Outlet />
		</>
	);
};
export default DefaultLayOut;
