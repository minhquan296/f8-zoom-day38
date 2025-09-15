import { memo } from "react";

const CounterDisplay = memo(({ count }) => {
	console.log("CounterDisplay re-render");
	return <div>{count}</div>;
});

export default CounterDisplay;
