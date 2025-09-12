import { useEffect } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ children, isOpen, onAfterOpen, onAfterClose }) => {
	useEffect(() => {
		if (!isOpen) {
			return onAfterClose();
		}
		onAfterOpen();
	}, [isOpen, onAfterOpen, onAfterClose]);

	if (!isOpen) return;

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>{children}</div>
		</div>
	);
};
export default Modal;
