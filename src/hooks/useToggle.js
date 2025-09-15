import { useState } from "react";

const useToggle = (initialValue = false) => {
	const [isValue, setValue] = useState(initialValue);
	const toggle = () => {
		setValue((prev) => !prev);
	};

	return [isValue, toggle, setValue];
};

export default useToggle;
