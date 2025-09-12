import { useState } from "react";
import Modal from "../../components/Modal";
import styles from "./ModalDemo.module.scss";

const ModalDemo = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div style={{ margin: "20px" }}>
			<button
				style={{ padding: "15px" }}
				onClick={() => {
					setIsModalOpen((prev) => !prev);
				}}
			>
				Open Modal
			</button>
			<Modal
				isOpen={isModalOpen}
				onAfterOpen={() => console.log("Modal đã mở")}
				onAfterClose={() => console.log("Modal đã đóng")}
				onRequestClose={() => setIsModalOpen(false)}
				closeTimeoutMS={300}
				overlayClassName="custom-overlay"
				className="custom-modal"
				bodyOpenClassName="modal-open"
				htmlOpenClassName="modal-open"
				shouldCloseOnOverlayClick={true}
				shouldCloseOnEsc={true}
			>
				<h2>Modal Content</h2>
				<p>Đây là nội dung modal</p>
				<button className={styles.modalDemoBtn} onClick={() => setIsModalOpen(false)}>
					Đóng
				</button>
			</Modal>
		</div>
	);
};
export default ModalDemo;
