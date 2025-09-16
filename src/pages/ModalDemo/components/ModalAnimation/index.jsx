import { useState } from "react";
import Modal from "@components/Modal";
import styles from "../../ModalDemo.module.scss";

const ModalAnimation = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div>
			<button
				className={styles.modalActionOpen}
				onClick={() => {
					setIsModalOpen(true);
				}}
			>
				Modal với Animation
			</button>
			<Modal
				setIsModalOpen={setIsModalOpen}
				isOpen={isModalOpen}
				closeTimeoutMS={300}
				bodyOpenClassName="body-class"
				htmlOpenClassName="html-class"
				shouldCloseOnOverlayClick
				shouldCloseOnEsc
			>
				<div>
					<h1>Modal with animation </h1>
					<p>Hello this is modal with animation</p>
				</div>
			</Modal>
		</div>
	);
};
export default ModalAnimation;
