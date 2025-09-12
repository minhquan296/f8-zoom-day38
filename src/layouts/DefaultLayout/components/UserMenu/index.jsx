import { useState } from "react";
import UserMenuContent from "./UserMenuContent";
import UserAvatar from "./UserAvatar";

const UserMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div style={{ position: "relative" }}>
			<div onClick={handleClick}>
				<UserAvatar
					width="30px"
					height="30px"
					pathImg={"https://files.fullstack.edu.vn/f8-prod/public-images/68be40cca18b8.png"}
				/>
			</div>
			{isOpen && <UserMenuContent onHandleClick={handleClick} />}
		</div>
	);
};
export default UserMenu;
