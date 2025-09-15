import Loading from "../components/Loading";

const withLoading = (Component) => {
	const WrapperComponent = ({ isLoading }) => {
		console.log({ isLoading });

		if (isLoading) {
			return <Loading />;
		}

		return <Component />;
	};

	return WrapperComponent;
};
export default withLoading;
