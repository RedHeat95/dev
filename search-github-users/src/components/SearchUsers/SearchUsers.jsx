import styles from "./SearchUsers.module.css";

export const SearchUsers = () => {
  return (
    <div className={styles.searchUsers}>
      <img
        className={styles.searchUsersImg}
        src="./assets/images/search.svg"
        alt="search"
      />
      <p className={styles.searchUsersText}>
        Start with searching a GitHub user
      </p>
    </div>
  );
};
