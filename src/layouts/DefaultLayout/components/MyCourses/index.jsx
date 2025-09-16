import { useEffect, useRef, useState } from "react";
import styles from "./MyCourses.module.scss";
import MyCourseList from "./MyCourseList";

const MyCourses = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef();

	useEffect(() => {
		const listener = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [setIsOpen]);

	return (
		<div ref={menuRef} style={{ position: "relative" }}>
			<button className={styles.myCoursesTitle} onClick={() => setIsOpen((prev) => !prev)}>
				Khóa học của tôi
			</button>

			{isOpen && <MyCourseList setIsOpen={setIsOpen} />}
		</div>
	);
};
export default MyCourses;
