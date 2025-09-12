import { useState } from "react";
import styles from "./SearchForm.module.scss";
import SearchResult from "./SearchResult";

const SearchForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<form className={styles.searchForm}>
				<p>🔎</p>
				<input
					placeholder="Tìm kiếm khóa học, bài viết, video, ...."
					className={styles.searchInput}
					onFocus={() => setIsOpen(true)}
					onBlur={() => setIsOpen(false)}
				/>

				{isOpen && <SearchResult />}
			</form>
		</div>
	);
};
export default SearchForm;
