import styles from "./Wrapper.module.scss";

const Wrapper = ({ children }) => {
	return <div className={styles.wrapperContainer}>{children}</div>;
};
export default Wrapper;
