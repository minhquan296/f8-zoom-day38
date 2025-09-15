import { useApi } from "../../hooks/useApi";

function MyComponent() {
	const { data, loading, error, refetch } = useApi("https://jsonplaceholder.typicode.com/posts");

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<button onClick={refetch}>Refetch Data</button>
			{data?.map((item) => (
				<div key={item.id}>{item.title}</div>
			))}
		</div>
	);
}

export default MyComponent;
