import { useCallback, useEffect, useState } from "react";

export const useApi = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	console.log({ data, loading, error });

	const fetchPosts = useCallback(async () => {
		const res = await fetch(url);
		const posts = await res.json();
		setData(posts);
	}, [url]);

	useEffect(() => {
		try {
			fetchPosts();
		} catch (error) {
			setError(error.message);
			throw error;
		}
	}, [url, fetchPosts]);

	useEffect(() => {
		if (!data.length) {
			return setLoading(true);
		}
		return setLoading(false);
	}, [loading, data.length]);

	const refetch = () => {
		setData([]);
		setLoading(false);
		setError(false);
		fetchPosts();
	};

	return { data, loading, error, refetch };
};
