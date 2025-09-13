import { useState } from "react";
import BadgedIcon from "./BadgedIcon";
import NotificationContent from "./NotificationContent";

const Notification = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div style={{ position: "relative" }}>
			<BadgedIcon count={10} handleClick={handleClick} />

			{isOpen && <NotificationContent onHandleClick={handleClick} />}
		</div>
	);
};
export default Notification;
