import UserMenuContent from "./UserMenuContent";
import UserAvatar from "./UserAvatar";
import useOutsideClick from "@hooks/useOutsideClick";

const UserMenu = () => {
	const { isOpen, setIsOpen, currentRef } = useOutsideClick();

	return (
		<div ref={currentRef} style={{ position: "relative" }}>
			<div onClick={() => setIsOpen((prev) => !prev)}>
				<UserAvatar
					width="30px"
					height="30px"
					pathImg={"https://files.fullstack.edu.vn/f8-prod/public-images/68be40cca18b8.png"}
				/>
			</div>
			{isOpen && <UserMenuContent />}
		</div>
	);
};
export default UserMenu;
