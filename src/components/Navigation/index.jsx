import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
	return (
		<ul className={styles.wrapperNav}>
			<li className={styles.wrapperNavItem}>
				<Link to="/">Home</Link>
			</li>
			<li className={styles.wrapperNavItem}>
				<Link to="/modal-demo">ModalDemo</Link>
			</li>
			<li className={styles.wrapperNavItem}>
				<Link to="/profile">Profile</Link>
			</li>
			<li className={styles.wrapperNavItem}>
				<Link to="/scroll-demo">ScrollDemo</Link>
			</li>
			<li className={styles.wrapperNavItem}>
				<Link to="/performance-demo">PerformanceDemo</Link>
			</li>
			<li className={styles.wrapperNavItem}>
				<Link to="/focus-demo">FocusDemo</Link>
			</li>
			<li className={styles.wrapperNavItem}>
				<Link to="/render-props-demo">RenderPropsDemo</Link>
			</li>
			<li className={styles.wrapperNavItem}>
				<Link to="/custom-hooks-demo">CustomHooksDemo</Link>
			</li>
		</ul>
	);
};
export default Navigation;
