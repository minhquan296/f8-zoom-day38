import Loading from "../../../../components/Loading";
import { useApi } from "../../../../hooks/useApi";
import useToggle from "../../../../hooks/useToggle";

const PostListHookDemo = () => {
	const { data, loading, error, refetch } = useApi("https://jsonplaceholder.typicode.com/posts?_limit=10");
	const [isHidden, toggle] = useToggle(true);

	if (loading) return <Loading />;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<button onClick={refetch}>Refetch Posts</button>
			<button onClick={toggle}>Toggle</button>
			{isHidden && (
				<div>
					{data?.map((item) => (
						<div key={item.id}>{item.title}</div>
					))}
				</div>
			)}
		</div>
	);
};
export default PostListHookDemo;
