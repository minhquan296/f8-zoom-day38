import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchForm from "../SearchForm";
import MyCourses from "../MyCourses";
import Notification from "../Notification";
import UserMenu from "../UserMenu";

const Header = () => {
	return (
		<div className={styles.headerContainer}>
			{/* Logo */}
			<Link to="/" style={{ textDecoration: "none", color: "black" }}>
				<div className={styles.headerLogo}>
					<img
						src="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
						alt=""
						className={styles.headerIcon}
					/>
					<p className={styles.headerTitle}>Học Lập Trình Để Đi Làm</p>
				</div>
			</Link>
			<SearchForm />
			<div className={styles.headerControls}>
				<MyCourses />
				<Notification />
				<UserMenu />
			</div>
		</div>
	);
};
export default Header;
