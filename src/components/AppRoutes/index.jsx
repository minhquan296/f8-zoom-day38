import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "@fontsource-variable/inter";
import DefaultLayOut from "../../layouts/DefaultLayout";
import HomePage from "../../pages/Home";
import ModalDemo from "../../pages/ModalDemo";
import Profile from "../../pages/Profile";
import ScrollDemo from "../../pages/ScrollDemo";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route element={<DefaultLayOut />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/modal-demo" element={<ModalDemo />} />
					<Route path="/profile " element={<Profile />} />
					<Route path="/scroll-demo" element={<ScrollDemo />} />
				</Route>
			</Routes>
		</Router>
	);
};
export default AppRoutes;
