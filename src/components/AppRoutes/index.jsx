import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "@fontsource-variable/inter";
import DefaultLayOut from "../../layouts/DefaultLayout";
import HomePage from "../../pages/Home";
import ModalDemo from "../../pages/ModalDemo";
import Profile from "../../pages/Profile";
import ScrollDemo from "../../pages/ScrollDemo";
import PerformanceDemo from "../../pages/PerformanceDemo";
import FocusDemo from "../../pages/FocusDemo";
import HOCDemo from "../../pages/HOCDemo";
import RenderPropsDemo from "../../pages/RenderPropsDemo";
import CustomHooksDemo from "../../pages/CustomHooksDemo";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route element={<DefaultLayOut />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/modal-demo" element={<ModalDemo />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/scroll-demo" element={<ScrollDemo />} />
					<Route path="/performance-demo" element={<PerformanceDemo />} />
					<Route path="/focus-demo" element={<FocusDemo />} />
					<Route path="/hoc-demo" element={<HOCDemo />} />
					<Route path="/render-props-demo" element={<RenderPropsDemo />} />
					<Route path="/custom-hooks-demo" element={<CustomHooksDemo />} />
				</Route>
			</Routes>
		</Router>
	);
};
export default AppRoutes;
