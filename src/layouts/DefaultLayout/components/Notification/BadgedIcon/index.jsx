import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./BadgedIcon.module.scss";

const BadgedIcon = ({ count, handleClick }) => {
	return (
		<div className={styles.badgedContainer} onClick={handleClick}>
			<FontAwesomeIcon icon={faBell} className={styles.badgedIcon} />
			{count > 0 && <span className={styles.badgedCount}>{count}</span>}
		</div>
	);
};
export default BadgedIcon;
