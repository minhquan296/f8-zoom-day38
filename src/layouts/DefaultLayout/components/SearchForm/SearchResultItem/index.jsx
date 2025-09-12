import styles from "../SearchResult/SearchResult.module.scss";

const SearchResultItem = ({ courseDes, coursePathThumbnail }) => {
	return (
		<div className={styles.courseList}>
			<div className={styles.courseItem}>
				<img src={coursePathThumbnail} alt="" className={styles.courseThumbnail} />
				<h3 className={styles.courseDes}>{courseDes}</h3>
			</div>
		</div>
	);
};
export default SearchResultItem;
