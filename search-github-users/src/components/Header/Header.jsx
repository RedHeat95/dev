import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUsers, setUsername } from "../../redux/actions/usersActions";
import {
  getRepos,
  setPageNumder,
  setFirstItem,
} from "../../redux/actions/reposActions";

import styles from "./Header.module.css";
import { Container } from "../Container/Container";

export const Header = () => {
  const dispatch = useDispatch();
  const perPage = useSelector((state) => state.repos.perPage);
  const pageNumber = useSelector((state) => state.repos.pageNumber);
  const [searchValue, setSearchValue] = useState("");

  const inputOnChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const searchHandler = (e) => {
    if (e.key === "Enter" && searchValue !== "") {
      dispatch(setPageNumder(1));
      dispatch(setFirstItem(0));
      dispatch(setUsername(searchValue));
      dispatch(getUsers(searchValue));
      dispatch(getRepos(searchValue, perPage, pageNumber));
      setSearchValue("");
    }
  };

  return (
    <div className={styles.header}>
      <Container>
        <img
          className={styles.headerLogo}
          src="./assets/images/logo.svg"
          alt="logo"
        />

        <div className={styles.headerSearch}>
          <img
            className={styles.searchImg}
            src="./assets/images/searchInput.svg"
            alt="search"
          />

          <input
            className={styles.searchInput}
            value={searchValue}
            onChange={inputOnChange}
            onKeyDown={searchHandler}
            type="text"
            placeholder="Enter GitHub username"
          />
        </div>
      </Container>
    </div>
  );
};
