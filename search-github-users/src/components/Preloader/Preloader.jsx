import styles from "./Preloader.module.css";

export const Preloader = () => {
  return (
    <div className={styles.preloaderBox}>
      <div className={styles.preloader}></div>
    </div>
  );
};
