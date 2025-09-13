import classNames from "classnames";
import styles from "./Modal.module.scss";
import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";

const Modal = ({
	children,
	isOpen = false,
	setIsModalOpen,
	onAfterOpen = () => {},
	onAfterClose = () => {},
	closeTimeoutMS,
	overlayClassName,
	className,
	bodyOpenClassName,
	htmlOpenClassName,
	shouldCloseOnOverlayClick = false,
	shouldCloseOnEsc = false,
}) => {
	const [isClosing, setIsClosing] = useState(false);

	const handleClose = useCallback(() => {
		setIsClosing(true);
		setTimeout(() => {
			setIsModalOpen(false);
			setIsClosing(false);
		}, closeTimeoutMS);
	}, [closeTimeoutMS, setIsModalOpen]);

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
				return handleClose();
			}
		},
		[shouldCloseOnEsc, handleClose]
	);

	const handleClickOverlay = () => {
		if (shouldCloseOnOverlayClick) {
			return handleClose();
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

	if (!isOpen) {
		return null;
	}

	return (
		<div
			className={classNames(
				styles.modalOverlay,
				{
					[styles.close]: isClosing,
				},
				overlayClassName
			)}
			onClick={handleClickOverlay}
		>
			<div
				className={classNames(
					styles.modalContent,
					{
						[styles.close]: isClosing,
					},
					className
				)}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				{children}
				<button className={styles.modalBtn} onClick={handleClose}>
					close
				</button>
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
	setIsModalOpen: PropTypes.func,
};

export default Modal;
