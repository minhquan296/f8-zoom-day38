import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";

const Profile = () => {
	const [avatarPath, setAvatarPath] = useState(
		"https://files.fullstack.edu.vn/f8-prod/public-images/68be40cca18b8.png"
	);

	const handleChangeAvatar = (event) => {
		const file = event.target.files[0];
		if (file) {
			return setAvatarPath(URL.createObjectURL(file));
		}
		return null;
	};

	useEffect(() => {
		return () => {
			URL.revokeObjectURL(avatarPath);
		};
	}, [avatarPath]);

	return (
		<div className={styles.profileContainer}>
			<label>
				<input type="file" accept="image/*" onChange={handleChangeAvatar} className={styles.profileInput} />
			</label>
			<div>
				<img src={avatarPath} alt="" className={styles.profileImg} />
			</div>
		</div>
	);
};
export default Profile;
