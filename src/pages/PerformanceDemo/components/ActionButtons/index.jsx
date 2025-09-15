import { memo } from "react";

const ActionButtons = memo(({ onIncrement, onReset }) => {
	console.log("ActionButtons re-render");

	return (
		<div>
			<button onClick={onIncrement}>Increment</button>
			<button onClick={onReset}>Reset</button>
		</div>
	);
});
export default ActionButtons;
