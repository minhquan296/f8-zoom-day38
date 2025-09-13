import { useState } from "react";
import Modal from "../../../../components/Modal";
import styles from "../../ModalDemo.module.scss";

const ModalCallback = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div>
			<button
				className={styles.modalAction}
				onClick={() => {
					setIsModalOpen((prev) => !prev);
				}}
			>
				Modal Callback
			</button>
			<Modal
				isOpen={isModalOpen}
				onAfterOpen={() => console.log("Modal callback opened")}
				onAfterClose={() => console.log("Modal callback closed")}
				bodyOpenClassName="body-class"
				htmlOpenClassName="html-class"
			>
				<div>
					<h1>Modal callback </h1>
					<p>Hello this is Modal Callback</p>
					<button onClick={() => setIsModalOpen(false)}>close</button>
				</div>
			</Modal>
		</div>
	);
};
export default ModalCallback;
