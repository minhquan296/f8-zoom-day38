import styles from "./NotificationItem.module.scss";

const NotificationItem = ({ mainContent, pathImg, updatedDays }) => {
	return (
		<div className={styles.notifiItemContainer}>
			<img src={pathImg} alt="" className={styles.notifiItemLogo} />
			<div>
				<div className={styles.notifiItemContent}>
					{mainContent}
					<p className={styles.notifiItemDays}>{updatedDays}</p>
				</div>
			</div>
		</div>
	);
};
export default NotificationItem;
