import { useState } from "react";
import Modal from "../../../../components/Modal";
import styles from "../../ModalDemo.module.scss";

const ModalNotClickOverlay = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div>
			<button
				className={styles.modalAction}
				onClick={() => {
					setIsModalOpen((prev) => !prev);
				}}
			>
				Modal không đóng khi click Overlay
			</button>
			<Modal
				isOpen={isModalOpen}
				shouldCloseOnEsc
				onRequestClose={() => setIsModalOpen(false)}
				bodyOpenClassName="body-class"
				htmlOpenClassName="html-class"
			>
				<div>
					<h1>Modal Overlay</h1>
					<p>Hello this is Modal Overlay</p>
					<button onClick={() => setIsModalOpen(false)}>close</button>
				</div>
			</Modal>
		</div>
	);
};
export default ModalNotClickOverlay;
