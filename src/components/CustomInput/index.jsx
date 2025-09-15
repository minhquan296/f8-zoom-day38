import { forwardRef } from "react";
import { useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef(({ label, value, onChange, placeholder }, ref) => {
	const inputRef = useRef();

	useImperativeHandle(ref, () => ({
		focus() {
			inputRef.current.focus();
		},
		blur() {
			inputRef.current.blur();
		},
		getValue() {
			return inputRef.current.value;
		},
	}));

	return (
		<div>
			<label>{label}</label>
			<input ref={inputRef} type="text" placeholder={placeholder} value={value} onChange={onChange} />
		</div>
	);
});

export default CustomInput;
