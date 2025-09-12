import styles from "./NotificationItem.module.scss";

const NotificationItem = () => {
	return (
		<div className={styles.notifiItemContainer}>
			<img src="https://fullstack.edu.vn/assets/images/f8_avatar.png" alt="" className={styles.notifiItemLogo} />
			<div>
				<div className={styles.notifiItemContent}>
					Bài học <strong>Tóm tắt chương</strong> mới được thêm vào.
					<p className={styles.notifiItemDays}>2 ngày trước</p>
				</div>
			</div>
		</div>
	);
};
export default NotificationItem;
