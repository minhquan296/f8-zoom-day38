import { useState } from "react";
import Modal from "../../../../components/Modal";
import styles from "../../ModalDemo.module.scss";

const ModalAnimation = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div>
			<button
				className={styles.modalAction}
				onClick={() => {
					setIsModalOpen((prev) => !prev);
				}}
			>
				Modal với Animation
			</button>
			<Modal
				isOpen={isModalOpen}
				closeTimeoutMS={300}
				bodyOpenClassName="body-class"
				htmlOpenClassName="html-class"
			>
				<div>
					<h1>Modal with animation </h1>
					<p>Hello this is modal with animation</p>
					<button onClick={() => setIsModalOpen(false)}>close</button>
				</div>
			</Modal>
		</div>
	);
};
export default ModalAnimation;
