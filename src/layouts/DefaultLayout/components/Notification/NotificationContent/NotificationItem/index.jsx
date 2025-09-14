import styles from "./NotificationItem.module.scss";

const NotificationItem = ({ main, mainContent, pathImg, updatedDays }) => {
	return (
		<div className={styles.notifiItemContainer}>
			<img src={pathImg} alt="" className={styles.notifiItemLogo} />
			<div>
				<div className={styles.notifiItemContent}>
					<strong style={{ marginRight: "3px" }}>{main}</strong>
					{mainContent}
					<p className={styles.notifiItemDays}>{updatedDays}</p>
				</div>
			</div>
		</div>
	);
};
export default NotificationItem;
