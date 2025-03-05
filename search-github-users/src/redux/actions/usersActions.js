import axios from "axios";
import { ACTIONS } from "../constants";

const setUsers = (users) => ({
  type: ACTIONS.SET_USERS,
  payload: users,
});

export const setUsername = (string) => ({
  type: ACTIONS.SET_USERNAME,
  payload: string,
});

const setIsSearch = (bool) => ({
  type: ACTIONS.SET_IS_SEARCH,
  payload: bool,
});

const setIsNotFound = (bool) => ({
  type: ACTIONS.SET_IS_NOT_FOUND,
  payload: bool,
});

const setIsFetching = (bool) => ({
  type: ACTIONS.SET_IS_FETCHING,
  payload: bool,
});

export const getUsers = (username) => {
  return async (dispatch) => {
    try {
      dispatch(setIsSearch(true));
      dispatch(setIsNotFound(false));
      dispatch(setIsFetching(false));

      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );

      dispatch(setUsers(response.data));
    } catch (e) {
      dispatch(setIsSearch(true));
      dispatch(setIsNotFound(true));
      dispatch(setIsFetching(true));
    }
  };
};
