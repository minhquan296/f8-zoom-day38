import { useEffect, useRef } from "react";
import styles from "./NotificationContent.module.scss";
import NotificationItem from "./NotificationItem";
import Wrapper from "../../../../../components/Wrapper";

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
		<Wrapper>
			<div className={styles.notifiContainer} ref={currentRef}>
				<div className={styles.notifiHeader}>
					<h3>Thông Báo</h3>
					<p className={styles.notifiMark}>Đánh dấu là đã đọc</p>
				</div>
				<div className={styles.notifiList}>
					{/* Fake Data */}
					<NotificationItem
						mainContent="Sơn Đặng đã nhắc đến bạn trong một bình luận"
						pathImg="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/64f9a2fd4e064.jpg"
						updatedDays="10 ngày trước"
					/>
				</div>
			</div>
		</Wrapper>
	);
};
export default NotificationContent;
