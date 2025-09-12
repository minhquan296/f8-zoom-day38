import styles from "./userAvatar.module.scss";

const userAvatar = ({ width, height, pathImg }) => {
	return (
		<img src={pathImg} alt="" className={styles.userAvatar} style={{ width: `${width}`, height: `${height}` }} />
	);
};
export default userAvatar;
