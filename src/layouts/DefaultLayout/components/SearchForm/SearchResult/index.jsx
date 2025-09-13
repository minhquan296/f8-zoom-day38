import SearchResultItem from "../SearchResultItem";
import styles from "./SearchResult.module.scss";
import Wrapper from "../../../../../components/Wrapper";

const SearchResult = () => {
	return (
		<div className={styles.courseContainer}>
			<div>
				<div className={styles.courseHeader}>
					<p className={styles.courseTitle}>KHÓA HỌC</p>
					<a href="!#" className={styles.courseLink}>
						Xem thêm
					</a>
				</div>
				<SearchResultItem
					courseDes="JavaScript Pro"
					coursePathThumbnail="https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png"
				/>
				<SearchResultItem
					courseDes="HTML, CSS Pro"
					coursePathThumbnail="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
				/>
				<SearchResultItem
					courseDes="Ngôn Ngữ Sass"
					coursePathThumbnail="https://files.fullstack.edu.vn/f8-prod/courses/27/64e184ee5d7a2.png"
				/>
			</div>
			<div>
				<div className={styles.courseHeader}>
					<p className={styles.courseTitle}>BÀI VIẾT</p>
					<a href="!#" className={styles.courseLink}>
						Xem thêm
					</a>
				</div>
				<SearchResultItem
					courseDes="[Cơ bản]Phần 1 Array trong javascript"
					coursePathThumbnail="https://files.fullstack.edu.vn/f8-prod/blog_posts/731/6157dab64bb17.jpg"
				/>
				<SearchResultItem
					courseDes="[Cơ bản]Phần 2 Array trong javascript"
					coursePathThumbnail="https://files.fullstack.edu.vn/f8-prod/blog_posts/733/6157e596019d9.png"
				/>
			</div>
			<div>
				<div className={styles.courseHeader}>
					<p className={styles.courseTitle}>VIDEO</p>
					<a href="!#" className={styles.courseLink}>
						Xem thêm
					</a>
				</div>
				<SearchResultItem
					courseDes="Day 21: Array..prototype P2"
					coursePathThumbnail="https://i.ytimg.com/vi/RKhPFxu1KWU/maxresdefault.jpg"
				/>
				<SearchResultItem
					courseDes="Day 20: Array.prototype methods - Phần 1"
					coursePathThumbnail="https://i.ytimg.com/vi/gKsEHOyGmUY/maxresdefault.jpg"
				/>
				<SearchResultItem
					courseDes="JSX render Arrays | JSX FQA"
					coursePathThumbnail="https://i.ytimg.com/vi/i1cjVyIZCKs/maxresdefault.jpg"
				/>
			</div>
		</div>
	);
};
export default SearchResult;
