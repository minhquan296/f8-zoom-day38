import styles from "./UserMenuContent.module.scss";
import UserAvatar from "../UserAvatar";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Wrapper from "../../../../../components/Wrapper";

const USER_SETTINGS = [
	{
		id: Math.random(),
		title: "Trang cá nhân",
		linkTo: "/:id",
	},
	{
		id: Math.random(),
		title: "Viết blog",
		linkTo: "/new-post",
	},
	{
		id: Math.random(),
		title: "Bài viết của tôi",
		linkTo: "/me/posts",
	},
	{
		id: Math.random(),
		title: "Bài viết đã lưu",
		linkTo: "/me/bookmark",
	},
	{
		id: Math.random(),
		title: "Cài đặt",
		linkTo: "/settings",
	},
	{
		id: Math.random(),
		title: "Đăng Xuất",
		linkTo: "/login",
	},
];

const UserMenuContent = ({ onHandleClick }) => {
	const currentRef = useRef();
	useEffect(() => {
		const listener = (e) => {
			if (e.target !== currentRef.current) {
				onHandleClick();
			}
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	});

	return (
		<Wrapper>
			<div ref={currentRef} className={styles.userMenuContainer}>
				<div className={styles.userMenuInfo}>
					<UserAvatar
						width="50px"
						height="50px"
						pathImg={"https://files.fullstack.edu.vn/f8-prod/public-images/68be40cca18b8.png"}
					/>
					<div>
						<p className={styles.userMenuName}>Lê Minh Quân</p>
						<span className={styles.userMenuId}>@leminhquan18</span>
					</div>
				</div>
				<div>
					<ul style={{ listStyleType: "none" }}>
						{USER_SETTINGS.map((setting) => {
							return (
								<li style={{}} key={setting.id}>
									<Link to={setting.linkTo} className={styles.userMenuLink}>
										{setting.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</Wrapper>
	);
};
export default UserMenuContent;
