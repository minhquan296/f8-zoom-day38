import { useEffect, useRef, useState } from "react";

const useOutsideClick = () => {
	const currentRef = useRef();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const listener = (e) => {
			if (currentRef.current && !currentRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
		};
	});

	return { isOpen, setIsOpen, currentRef };
};

export default useOutsideClick;
