import { useState } from "react";
import Modal from "../../../../components/Modal";
import styles from "../../ModalDemo.module.scss";

const ModalNotClickESC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div>
			<button
				className={styles.modalAction}
				onClick={() => {
					setIsModalOpen((prev) => !prev);
				}}
			>
				Modal không đóng khi nhấn Esc
			</button>
			<Modal isOpen={isModalOpen} shouldCloseOnOverlayClick onRequestClose={() => setIsModalOpen(false)}>
				<div>
					<h1>Modal ESC</h1>
					<p>Hello this is Modal ESC</p>
					<button onClick={() => setIsModalOpen(false)}>close</button>
				</div>
			</Modal>
		</div>
	);
};
export default ModalNotClickESC;
