import classNames from "classnames";
import styles from "./Modal.module.scss";
import PropTypes from "prop-types";
import { useCallback, useEffect } from "react";

const Modal = ({
	children,
	isOpen,
	onAfterOpen = () => {},
	onAfterClose = () => {},
	closeTimeoutMS,
	onRequestClose,
	overlayClassName,
	className,
	bodyOpenClassName,
	htmlOpenClassName,
	shouldCloseOnOverlayClick = false,
	shouldCloseOnEsc = false,
}) => {
	const addModalOpenClasses = useCallback(() => {
		document.body.classList.add(bodyOpenClassName);
		document.documentElement.classList.add(htmlOpenClassName);
	}, [bodyOpenClassName, htmlOpenClassName]);

	const removeModalOpenClasses = useCallback(() => {
		document.body.classList.remove(bodyOpenClassName);
		document.documentElement.classList.remove(htmlOpenClassName);
	}, [bodyOpenClassName, htmlOpenClassName]);

	const handleClickEscape = useCallback(
		(e) => {
			if (e.code === "Escape" && shouldCloseOnEsc) {
				return onRequestClose();
			}
		},
		[shouldCloseOnEsc, onRequestClose]
	);

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
		return () => {
			document.removeEventListener("keydown", handleClickEscape);
		};
	}, [handleClickEscape]);

	console.log({ isOpen });

	// useEffect(() => {
	// 	const timeId = setTimeout(() => {
	// 		if (!isOpen) {
	// 		}
	// 	}, closeTimeoutMS);
	// 	return () => {
	// 		clearTimeout(timeId);
	// 	};
	// }, [isOpen, closeTimeoutMS]);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={classNames(styles.modalOverlay, overlayClassName)} onClick={handleClickOverlay}>
			<div
				className={classNames(styles.modalContent, className, {
					[styles.close]: !isOpen,
				})}
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
