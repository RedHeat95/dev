import { useSelector } from "react-redux";

import styles from "./BlockRepository.module.css";
import { CardReposiroty } from "../CardRepository/CardRepository";
import { Pagination } from "../Pagination/Pagination";
import { EmptyState } from "../EmptyState/EmptyState";

export const BlockRepository = () => {
  const totalCount = useSelector((state) => state.users.totalCount);
  const repos = useSelector((state) => state.repos.items);

  return (
    <>
      {totalCount === 0 ? (
        <EmptyState
          image="./assets/images/empty.svg"
          alt="empty"
          text="Repository list is empty"
        />
      ) : (
        <>
          <div className={styles.blockRepository}>
            <p className={styles.title}>Repositories ({totalCount})</p>

            <div className={styles.cards}>
              {repos.map((repo) => (
                <CardReposiroty repo={repo} key={repo.id} />
              ))}
            </div>
            <Pagination />
          </div>
        </>
      )}
    </>
  );
};
