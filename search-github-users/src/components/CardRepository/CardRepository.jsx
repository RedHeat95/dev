import styles from "./CardRepository.module.css";

export const CardReposiroty = (props) => {
  const repo = props.repo;

  return (
    <div className={styles.cardReposiroty}>
      <p>
        <a
          className={styles.cardTitle}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
        >
          {repo.name}
        </a>
      </p>

      <p className={styles.cardText}>{repo.description}</p>
    </div>
  );
};
