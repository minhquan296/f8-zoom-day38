import { useCallback, useEffect } from "react";
import styles from "./GoToTop.module.scss";
import classNames from "classnames";

const GoToTop = ({ isShow, setIsShow, onGoToTop }) => {
	const handleScroll = useCallback(() => {
		if (window.scrollY >= 300) {
			setIsShow(true);
		} else {
			setIsShow(false);
		}
	}, [setIsShow]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	if (!isShow) return;

	return (
		<div
			className={classNames(styles.goToTop, {
				[styles.show]: isShow,
			})}
			onClick={onGoToTop}
		>
			ToTop
		</div>
	);
};
export default GoToTop;
