import classNames from "classnames";
import styles from "./Modal.module.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Modal = ({
	children,
	isOpen,
	onAfterOpen,
	onAfterClose,
	closeTimeoutMS,
	onRequestClose,
	overlayClassName,
	className,
	bodyOpenClassName,
	htmlOpenClassName,
	shouldCloseOnOverlayClick,
	shouldCloseOnEsc,
}) => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const addModalOpenClasses = () => {
		document.body.classList.add(bodyOpenClassName);
		document.documentElement.classList.add(htmlOpenClassName);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const removeModalOpenClasses = () => {
		document.body.classList.remove(bodyOpenClassName);
		document.documentElement.classList.remove(htmlOpenClassName);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleClickEscape = (e) => {
		if (e.code === "Escape" && shouldCloseOnEsc) {
			return onRequestClose();
		}
	};

	const handleClickOverlay = () => {
		if (shouldCloseOnOverlayClick) {
			return onRequestClose();
		}
	};

	useEffect(() => {
		const timeId = setTimeout(() => {
			if (isOpen) {
				addModalOpenClasses();
				return onAfterOpen();
			}
			removeModalOpenClasses();
			return onAfterClose();
		}, closeTimeoutMS);

		return () => {
			clearTimeout(timeId);
		};
	}, [onAfterOpen, isOpen, closeTimeoutMS, onAfterClose, addModalOpenClasses, removeModalOpenClasses]);

	useEffect(() => {
		document.addEventListener("keydown", handleClickEscape);
		document.removeEventListener("keydown", handleClickEscape);
	}, [handleClickEscape]);

	if (!isOpen) return null;

	return (
		<div className={classNames(styles.modalOverlay, overlayClassName)} onClick={handleClickOverlay}>
			<div
				className={classNames(styles.modalContent, className)}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				{children}
			</div>
		</div>
	);
};

Modal.propTypes = {
	children: PropTypes.node,
	isOpen: PropTypes.bool.isRequired,
	onAfterOpen: PropTypes.func,
	onAfterClose: PropTypes.func,
	closeTimeoutMS: PropTypes.number,
	onRequestClose: PropTypes.func,
	overlayClassName: PropTypes.string,
	className: PropTypes.string,
	bodyOpenClassName: PropTypes.string,
	htmlOpenClassName: PropTypes.string,
	shouldCloseOnOverlayClick: PropTypes.bool,
	shouldCloseOnEsc: PropTypes.bool,
};

export default Modal;
