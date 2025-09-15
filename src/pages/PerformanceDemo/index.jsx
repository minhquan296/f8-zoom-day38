import { useCallback, useEffect, useState } from "react";
import styles from "./PerformanceDemo.module.scss";
import CounterDisplay from "./components/CounterDisplay";
import ActionButtons from "./components/ActionButtons";
import ExpensiveChild from "./components/ExpensiveChild";

const PerformanceDemo = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("Le Minh Quan");
	const [items, setItems] = useState([]);
	const [value, setValue] = useState("");

	useEffect(() => {
		async function fetchItemData() {
			const res = await fetch("https://jsonplaceholder.typicode.com/users");
			const data = await res.json();
			setItems(data);
		}

		fetchItemData();
	}, []);

	const handleIncrement = useCallback(() => {
		setCount((prev) => prev + 1);
	}, []);

	const handleReset = useCallback(() => {
		setCount(0);
	}, []);

	const handleAddItem = () => {
		if (!value) return;
		setItems((prev) => [...prev, { id: Math.random(), name: value }]);
		setValue("");
	};

	const handleChangeName = () => {
		setName(name);
	};

	return (
		<div className={styles.performanceDemo}>
			<div>
				<p>Name: {name}</p>
				<input type="text" value={name} placeholder="Change Name" onChange={(e) => setName(e.target.value)} />
				<button onClick={handleChangeName}>Change Name</button>
			</div>
			<div>
				<input placeholder="Add Item" value={value} onChange={(e) => setValue(e.target.value)} />
				<button onClick={handleAddItem}>Add Item</button>
				<ExpensiveChild items={items} />
			</div>
			<button onClick={handleIncrement}>Increment Count</button>
			<div>
				<CounterDisplay count={count} />
				<ActionButtons onIncrement={handleIncrement} onReset={handleReset} />
			</div>
		</div>
	);
};
export default PerformanceDemo;
