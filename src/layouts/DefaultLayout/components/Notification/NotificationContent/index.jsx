import { useEffect, useRef } from "react";
import styles from "./NotificationContent.module.scss";
import NotificationItem from "./NotificationItem";

const NotificationContent = ({ onHandleClick }) => {
	const currentRef = useRef();
	useEffect(() => {
		const listener = (e) => {
			if (e.target !== currentRef.current) {
				onHandleClick();
			}
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	});

	return (
		<div className={styles.notifiContainer} ref={currentRef}>
			<div className={styles.notifiHeader}>
				<h3>Thông Báo</h3>
				<p className={styles.notifiMark}>Đánh dấu là đã đọc</p>
			</div>
			<div className={styles.notifiList}>
				{/* Fake Data */}
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
			</div>
		</div>
	);
};
export default NotificationContent;
