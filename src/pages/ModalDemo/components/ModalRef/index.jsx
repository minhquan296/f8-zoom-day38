import { useRef, useState } from "react";
import Modal from "@components/Modal";
import styles from "../../ModalDemo.module.scss";

const ModalRef = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const modalRef = useRef(null);

	return (
		<div>
			<button
				className={styles.modalActionOpen}
				onClick={() => {
					modalRef.current.openModal();
				}}
			>
				ModalRef
			</button>
			{
				<Modal
					ref={modalRef}
					setIsModalOpen={setIsModalOpen}
					isOpen={isModalOpen}
					shouldCloseOnOverlayClick
					onRequestClose={() => setIsModalOpen(false)}
					htmlOpenClassName="html-class"
					bodyOpenClassName="body-class"
					shouldCloseOnEsc
					closeTimeoutMS={300}
				>
					<div>
						<h1>ModalRef </h1>
						<p>Hello this is ModalRef</p>
						<button className={styles.modalBtn} onClick={() => modalRef.current.closeModal()}>
							close with ref
						</button>
					</div>
				</Modal>
			}
		</div>
	);
};
export default ModalRef;
