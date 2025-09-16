import UserProfile from "@components/UserProfile";
import ProductList from "@components/ProductList";
import { useState } from "react";

const HOCDemo = () => {
	const [userLoading, setUserLoading] = useState(false);
	const [productLoading, setProductLoading] = useState(false);

	return (
		<div>
			<UserProfile isLoading={userLoading} />
			<ProductList isLoading={productLoading} />

			<div>
				<button onClick={() => setUserLoading((prev) => !prev)}>Toggle UserLoading</button>
				<button onClick={() => setProductLoading((prev) => !prev)}>Toggle ProductLoading</button>
			</div>
		</div>
	);
};
export default HOCDemo;
