import BasicModal from "./components/BasicModal";
import ModalAnimation from "./components/ModalAnimation";
import ModalCallback from "./components/ModalCallback";
import ModalCustomClassName from "./components/ModalCustomClassName";
import ModalNotClickESC from "./components/ModalNotClickESC";
import ModalNotClickOverlay from "./components/ModalNotClickOverlay";

const ModalDemo = () => {
	return (
		<div style={{ margin: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
			<BasicModal />
			<ModalAnimation />
			<ModalCallback />
			<ModalCustomClassName />
			<ModalNotClickESC />
			<ModalNotClickOverlay />
		</div>
	);
};
export default ModalDemo;
