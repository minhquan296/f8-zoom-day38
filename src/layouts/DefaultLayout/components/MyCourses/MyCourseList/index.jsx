import Wrapper from "../../../../../components/Wrapper";
import MyCourseItem from "../MyCourseItem";
import styles from "./MyCourseList.module.scss";
import { v4 as uuidv4 } from "uuid";

const FAKE_DATA = [
	{
		id: uuidv4(),
		title: "Fullstack web",
		pathImg: "https://files.fullstack.edu.vn/f8-prod/courses/31/67f4c93c28d4b.png",
	},
	{
		id: uuidv4(),
		title: "Javascript Pro",
		pathImg: "https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png",
	},
	{
		id: uuidv4(),
		title: "HTML, CSS Pro",
		pathImg: "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
	},
];

const MyCourseList = () => {
	return (
		<Wrapper>
			<div className={styles.myCourseContainer}>
				<div className={styles.myCourseHeader}>
					<p className={styles.myCourseTitle}>Khóa học của tôi</p>
					<a href="#!" className={styles.myCourseContainerShowAll}>
						Xem tất cả
					</a>
				</div>
				{FAKE_DATA.map((course) => {
					return <MyCourseItem key={course.id} title={course.title} pathImg={course.pathImg} />;
				})}
			</div>
		</Wrapper>
	);
};
export default MyCourseList;
