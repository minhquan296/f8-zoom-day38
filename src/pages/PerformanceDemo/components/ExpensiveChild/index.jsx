import { memo, useMemo } from "react";

const ExpensiveChild = memo(({ items = [] }) => {
	console.log("ExpensiveChild re-render");

	// Tính toán nặng: tìm item có tên dài nhất
	const expensiveCalculation = useMemo(() => {
		console.log("Calculating longest name...");
		let longest = "";
		let total = 0;
		items.forEach((item) => {
			// Thêm delay giả lập tính toán nặng
			for (let i = 0; i < 100000; i++) {
				total += i;
			}
			if (item.name.length > longest.length) {
				longest = item.name;
			}
		});
		console.log(total);
		return longest;
	}, [items]);

	return (
		<div>
			{items.map((item) => {
				return <div key={item.id}>{item.title}</div>;
			})}
			{`Tên dài nhất là ${expensiveCalculation}`}
		</div>
	);
});
export default ExpensiveChild;
