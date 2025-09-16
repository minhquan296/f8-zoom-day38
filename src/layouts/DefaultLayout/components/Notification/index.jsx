import useOutsideClick from "../../../../hooks/useOutsideClick";
import BadgedIcon from "./BadgedIcon";
import NotificationContent from "./NotificationContent";

const Notification = () => {
	const { isOpen, setIsOpen, currentRef } = useOutsideClick();

	return (
		<div ref={currentRef} style={{ position: "relative" }}>
			<BadgedIcon count={10} handleClick={() => setIsOpen((prev) => !prev)} />
			{isOpen && <NotificationContent />}
		</div>
	);
};
export default Notification;
