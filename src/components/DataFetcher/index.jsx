import { useEffect, useState } from "react";

const DataFetcher = ({ url, children }) => {
	const [data, setData] = useState([]);
	const [isError, setIsError] = useState(false);
	useEffect(() => {
		async function fetchPostsData() {
			try {
				if (!url) return;
				const res = await fetch(url);
				const data = await res.json();
				setData(data);
			} catch (error) {
				setIsError(true);
				throw error;
			}
		}
		fetchPostsData();
	}, [url]);

	return (
		<div>
			{children({
				data,
				isLoading: data.length,
				error: isError ? "Loi roi" : "",
			})}
		</div>
	);
};
export default DataFetcher;
