import { useEffect, useRef, useState } from "react";
import CustomInput from "@components/CustomInput";

const FocusDemo = () => {
	const input1Ref = useRef(null);
	const input2Ref = useRef(null);
	const counterRef = useRef(0);
	const [value1, setValue1] = useState("");
	const [value2, setValue2] = useState("");

	useEffect(() => {
		counterRef.current += 1;
		console.log("Render lần:", counterRef.current);
	});

	const handleFocus = (input1Ref) => {
		input1Ref.current.focus();
	};

	const handleClearBoth = () => {
		setValue1("");
		setValue2("");
	};

	const handleGetValue = () => {
		console.log({
			input1Ref: input1Ref.current.getValue(),
			input2Ref: input2Ref.current.getValue(),
		});
	};

	return (
		<div>
			<CustomInput
				ref={input1Ref}
				label="CustomInput 1"
				value={value1}
				onChange={(e) => setValue1(e.target.value)}
				placeholder="CustomInput 1"
			/>
			<CustomInput
				ref={input2Ref}
				label="CustomInput 2"
				value={value2}
				onChange={(e) => setValue2(e.target.value)}
				placeholder="CustomInput 2"
			/>
			<button onClick={() => handleFocus(input1Ref)}>Focus Input 1</button>
			<button onClick={() => handleFocus(input2Ref)}>Focus Input 2</button>
			<button onClick={handleClearBoth}>Clear Both</button>
			<button onClick={() => handleGetValue()}>Get Values</button>
		</div>
	);
};
export default FocusDemo;
