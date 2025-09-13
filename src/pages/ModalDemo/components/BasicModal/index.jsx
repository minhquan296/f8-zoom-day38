import { useState } from "react";
import Modal from "../../../../components/Modal";
import styles from "../../ModalDemo.module.scss";

const BasicModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div>
			<button
				className={styles.modalActionOpen}
				onClick={() => {
					setIsModalOpen((prev) => !prev);
				}}
			>
				Basic Modal
			</button>
			{isModalOpen && (
				<Modal
					setIsModalOpen={setIsModalOpen}
					isOpen={isModalOpen}
					shouldCloseOnOverlayClick
					onRequestClose={() => setIsModalOpen(false)}
					htmlOpenClassName="html-class"
					bodyOpenClassName="body-class"
					shouldCloseOnEsc
				>
					<div>
						<h1>Basic Modal </h1>
						<p>Hello this is basic modal</p>
					</div>
				</Modal>
			)}
		</div>
	);
};
export default BasicModal;
