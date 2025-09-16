import { useState } from "react";
import Modal from "@components/Modal";
import styles from "../../ModalDemo.module.scss";

const ModalNotClickOverlay = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	console.log({ isModalOpen });

	return (
		<div>
			<button
				className={styles.modalActionOpen}
				onClick={() => {
					setIsModalOpen((prev) => !prev);
				}}
			>
				Modal không đóng khi click Overlay
			</button>
			<Modal
				setIsModalOpen={setIsModalOpen}
				isOpen={isModalOpen}
				shouldCloseOnEsc
				closeTimeoutMS={300}
				onRequestClose={() => setIsModalOpen(false)}
				bodyOpenClassName="body-class"
				htmlOpenClassName="html-class"
			>
				<div>
					<h1>Modal Lorem ipsum dolor sit.</h1>
					<p>Hello this is Modal Overlay</p>
				</div>
			</Modal>
		</div>
	);
};
export default ModalNotClickOverlay;
