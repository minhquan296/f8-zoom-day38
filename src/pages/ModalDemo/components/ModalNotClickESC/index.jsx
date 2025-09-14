import { useState } from "react";
import Modal from "../../../../components/Modal";
import styles from "../../ModalDemo.module.scss";

const ModalNotClickESC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div>
			<button
				className={styles.modalActionOpen}
				onClick={() => {
					setIsModalOpen(true);
				}}
			>
				Modal không đóng khi nhấn Esc
			</button>
			<Modal
				setIsModalOpen={setIsModalOpen}
				isOpen={isModalOpen}
				shouldCloseOnOverlayClick
				onRequestClose={() => setIsModalOpen(false)}
				bodyOpenClassName="body-class"
				htmlOpenClassName="html-class"
				closeTimeoutMS={300}
			>
				<div>
					<h1>Modal Lorem ipsum dolor sit.</h1>
					<p>Hello this is Modal ESC</p>
				</div>
			</Modal>
		</div>
	);
};
export default ModalNotClickESC;
