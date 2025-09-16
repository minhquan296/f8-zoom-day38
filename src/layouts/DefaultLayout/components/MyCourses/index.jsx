import styles from "./MyCourses.module.scss";
import MyCourseList from "./MyCourseList";
import useOutsideClick from "@hooks/useOutsideClick";

const MyCourses = () => {
	const { isOpen, setIsOpen, currentRef } = useOutsideClick();

	return (
		<div ref={currentRef} style={{ position: "relative" }}>
			<button className={styles.myCoursesTitle} onClick={() => setIsOpen((prev) => !prev)}>
				Khóa học của tôi
			</button>
			{isOpen && <MyCourseList setIsOpen={setIsOpen} />}
		</div>
	);
};
export default MyCourses;
