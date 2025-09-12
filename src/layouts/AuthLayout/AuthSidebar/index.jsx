import { Link } from "react-router-dom";
import styles from "./AuthSidebar.module.scss";

const AuthSidebar = () => {
	return (
		<ul className={styles.sidebar}>
			<li>
				<Link to="/login">Đăng nhập</Link>
				<Link to="/register">Đăng ký</Link>
				<Link to="/forgot-password">Quên mật khẩu</Link>
			</li>
		</ul>
	);
};
export default AuthSidebar;
