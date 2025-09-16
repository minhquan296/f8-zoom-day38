import useToggle from "@hooks/useToggle";
import PostListHookDemo from "./components/PostListHookDemo";
import UserListHookDemo from "./components/UserListHookDemo";
import styles from "./CustomHooksDemo.module.scss";

const CustomHooksDemo = () => {
	const [isLight, toggleTheme] = useToggle(false);

	const theme = {
		light: {
			background: "white",
			color: "black",
		},
		dark: {
			background: "black",
			color: "white",
		},
	};

	return (
		<div style={isLight ? theme.light : theme.dark} className={styles.customHooks}>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<PostListHookDemo />
				<UserListHookDemo />
			</div>
			<div>
				<button onClick={toggleTheme}>Toggle Theme</button>
			</div>
		</div>
	);
};
export default CustomHooksDemo;
