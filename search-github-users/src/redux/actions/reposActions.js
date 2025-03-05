import axios from "axios";
import { ACTIONS } from "../constants";

const setRepos = (repos) => ({
  type: ACTIONS.SET_REPOS,
  payload: repos,
});

export const setPageNumder = (number) => ({
  type: ACTIONS.SET_PAGE_NUMBER,
  payload: number,
});

export const setPageCount = (number) => ({
  type: ACTIONS.SET_PAGE_COUNT,
  payload: number,
});

export const setFirstItem = (number) => ({
  type: ACTIONS.SET_FIRST_ITEM,
  payload: number,
});

export const setLastItem = (number) => ({
  type: ACTIONS.SET_LAST_ITEM,
  payload: number,
});

export const getRepos = (username, perPage, pageNumber) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${pageNumber}`
      );

      dispatch(setRepos(response.data));
    } catch (e) {}
  };
};
