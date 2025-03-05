import { useSelector } from "react-redux";

import styles from "./Main.module.css";
import { Container } from "../Container/Container";
import { SearchUsers } from "../SearchUsers/SearchUsers";
import { EmptyState } from "../EmptyState/EmptyState";
import { BlockUser } from "../BlockUser/BlockUser";
import { BlockRepository } from "../BlockRepository/BlockRepository";
import { Preloader } from "../Preloader/Preloader";

export const Main = () => {
  const isSearch = useSelector((state) => state.users.isSearch);
  const isFetching = useSelector((state) => state.users.isFetching);
  const isNotFound = useSelector((state) => state.users.isNotFound);

  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.mainWrraper}>
          {isSearch ? (
            <>
              {isFetching ? (
                <>
                  {isNotFound ? (
                    <EmptyState
                      image="./assets/images/user.svg"
                      alt="user"
                      text="User not found"
                    />
                  ) : (
                    <div className={styles.mainBlock}>
                      <BlockUser />
                      <BlockRepository />
                    </div>
                  )}
                </>
              ) : (
                <Preloader />
              )}
            </>
          ) : (
            <SearchUsers />
          )}
        </div>
      </Container>
    </div>
  );
};
