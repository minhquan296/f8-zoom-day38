import styles from "./MyCourseItem.module.scss";

const MyCourseItem = ({ title, pathImg }) => {
	return (
		<div className={styles.myCourseItemContainer}>
			<img src={pathImg} alt="" className={styles.myCourseItemImg} />
			<div>
				<h3 className={styles.myCourseItemTitle}>{title}</h3>
				<a href="" className={styles.myCourseItemStart}>
					Bắt đầu học
				</a>
			</div>
		</div>
	);
};
export default MyCourseItem;
