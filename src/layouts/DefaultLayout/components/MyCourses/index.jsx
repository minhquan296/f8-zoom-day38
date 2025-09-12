import { useState } from "react";
import styles from "./MyCourses.module.scss";
import MyCourseList from "./MyCourseList";

const MyCourses = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div style={{ position: "relative" }}>
			<button className={styles.myCoursesTitle} onClick={handleClick}>
				Khóa học của tôi
			</button>

			{isOpen && <MyCourseList onHandleClick={handleClick} />}
		</div>
	);
};
export default MyCourses;
