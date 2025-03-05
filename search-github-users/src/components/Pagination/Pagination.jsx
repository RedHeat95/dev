import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import {
  getRepos,
  setPageNumder,
  setPageCount,
  setFirstItem,
  setLastItem,
} from "../../redux/actions/reposActions";

import styles from "./Pagination.module.css";

export const Pagination = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.users.username);
  const totalCount = useSelector((state) => state.users.totalCount);
  const perPage = useSelector((state) => state.repos.perPage);
  const pageNumber = useSelector((state) => state.repos.pageNumber);
  const pageCount = useSelector((state) => state.repos.pageCount);
  const firstItem = useSelector((state) => state.repos.firstItem);
  const lastItem = useSelector((state) => state.repos.lastItem);

  useEffect(() => {
    dispatch(getRepos(username, perPage, pageNumber));
    dispatch(setPageCount(Math.ceil(totalCount / perPage)));

    if (firstItem + perPage > totalCount) {
      dispatch(setLastItem(totalCount));
    } else {
      dispatch(setLastItem(firstItem + perPage));
    }
  }, [dispatch, username, totalCount, firstItem, perPage, pageNumber]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * perPage) % totalCount;
    dispatch(setFirstItem(newOffset));
    dispatch(setPageNumder(event.selected + 1));
  };

  return (
    <div className={styles.pagination}>
      <p className={styles.paginationText}>
        {firstItem} - {lastItem} of {totalCount} items
      </p>

      <ReactPaginate
        containerClassName={styles.paginationContainer}
        previousClassName={styles.paginationPrevious}
        nextClassName={styles.paginationNext}
        activeClassName={styles.paginationActive}
        activeLinkClassName={styles.paginationActiveLink}
        previousLabel={
          <img src="./assets/images/arrowLeft.svg" alt="arrowLeft" />
        }
        breakLabel="..."
        nextLabel={
          <img src="./assets/images/arrowRight.svg" alt="arrowRight" />
        }
        pageCount={pageCount}
        marginPagesDisplayed="1"
        onPageChange={handlePageClick}
        disableInitialCallback={true}
      />
    </div>
  );
};
