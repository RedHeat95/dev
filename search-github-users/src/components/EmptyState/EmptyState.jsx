import styles from "./EmptyState.module.css";

export const EmptyState = ({ image, alt, text }) => {
  return (
    <div className={styles.emptyState}>
      <img className={styles.emptyStateImg} src={image} alt={alt} />

      <p className={styles.emptyStateText}>{text}</p>
    </div>
  );
};
