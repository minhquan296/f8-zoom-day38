import { useState } from "react";
import Modal from "@components/Modal";
import styles from "../../ModalDemo.module.scss";

const ModalCustomClassName = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div>
			<button
				className={styles.modalActionOpen}
				onClick={() => {
					setIsModalOpen((prev) => !prev);
				}}
			>
				Modal với custom className
			</button>
			<Modal
				setIsModalOpen={setIsModalOpen}
				isOpen={isModalOpen}
				className={styles.customModal}
				bodyOpenClassName="body-class"
				htmlOpenClassName="html-class"
				closeTimeoutMS={300}
			>
				<div>
					<h1>Modal CustomClassName </h1>
					<p>Hello this is Modal CusTomClassName</p>
				</div>
			</Modal>
		</div>
	);
};
export default ModalCustomClassName;
