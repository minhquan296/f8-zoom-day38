import { useState } from "react";
import Modal from "@components/Modal";
import styles from "../../ModalDemo.module.scss";

const ModalCallback = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div>
			<button
				className={styles.modalActionOpen}
				onClick={() => {
					setIsModalOpen((prev) => !prev);
				}}
			>
				Modal Callback
			</button>
			<Modal
				setIsModalOpen={setIsModalOpen}
				isOpen={isModalOpen}
				onAfterOpen={() => console.log("Modal callback opened")}
				onAfterClose={() => console.log("Modal callback closed")}
				bodyOpenClassName="body-class"
				htmlOpenClassName="html-class"
				closeTimeoutMS={300}
			>
				<div>
					<h1>Modal callback </h1>
					<p>Hello this is Modal Callback</p>
				</div>
			</Modal>
		</div>
	);
};
export default ModalCallback;
