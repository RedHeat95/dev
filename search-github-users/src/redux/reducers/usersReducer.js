import { ACTIONS } from "../constants";

const defaultState = {
  items: [],
  totalCount: 0,
  username: "",
  isSearch: false,
  isNotFound: false,
  isFetching: false,
};

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USERS:
      return {
        ...state,
        items: action.payload,
        totalCount: action.payload.public_repos,
        isSearch: true,
        isNotFound: false,
        isFetching: true,
      };

    case ACTIONS.SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };

    case ACTIONS.SET_IS_SEARCH:
      return {
        ...state,
        isSearch: action.payload,
      };

    case ACTIONS.SET_IS_NOT_FOUND:
      return {
        ...state,
        isNotFound: action.payload,
      };

    case ACTIONS.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };

    default:
      return state;
  }
};
