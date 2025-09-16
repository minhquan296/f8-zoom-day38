import Wrapper from "@components/Wrapper";
import styles from "./NotificationContent.module.scss";
import NotificationItem from "./NotificationItem";

const NotificationContent = () => {
	return (
		<Wrapper>
			<div className={styles.notifiContainer}>
				<div className={styles.notifiHeader}>
					<h3>Thông Báo</h3>
					<p className={styles.notifiMark}>Đánh dấu là đã đọc</p>
				</div>
				<div className={styles.notifiList}>
					{/* Fake Data */}
					<NotificationItem
						main="Sơn Đặng"
						mainContent="đã nhắc đến bạn trong một bình luận"
						pathImg="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/64f9a2fd4e064.jpg"
						updatedDays="10 ngày trước"
					/>
					<NotificationItem
						main="Vũ Quốc Dũng"
						mainContent="đã nhắc đến bạn trong một bình luận"
						pathImg="https://files.fullstack.edu.vn/f8-prod/public-images/6870d57b274a2.png"
						updatedDays="4 ngày trước"
					/>
				</div>
			</div>
		</Wrapper>
	);
};
export default NotificationContent;
