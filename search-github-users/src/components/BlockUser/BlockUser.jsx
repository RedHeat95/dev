import { useSelector } from "react-redux";

import styles from "./BlockUser.module.css";

let followers = 0;
let following = 0;

export const BlockUser = () => {
  const users = useSelector((state) => state.users.items);

  if (users.followers >= 1000) {
    followers = (users.followers / 1000).toFixed(1) + "k";
  } else {
    followers = users.followers;
  }

  if (users.following >= 1000) {
    following = (users.following / 1000).toFixed(1) + "k";
  } else {
    following = users.following;
  }

  return (
    <div className={styles.blockuser}>
      <img className={styles.avatar} src={users.avatar_url} alt="avatar" />
      <p className={styles.avatarname}>{users.name}</p>
      <p>
        <a
          className={styles.username}
          href={users.html_url}
          target="_blank"
          rel="noreferrer"
        >
          {users.login}
        </a>
      </p>

      <div className={styles.userInfo}>
        <p className={styles.infoText}>
          <img
            className={styles.infoImg}
            src="./assets/images/followers.svg"
            alt="followers"
          />
          {followers} followers
        </p>

        <p className={styles.infoText}>
          <img
            className={styles.infoImg}
            src="./assets/images/following.svg"
            alt="following"
          />
          {following} following
        </p>
      </div>
    </div>
  );
};
