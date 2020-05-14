import Axios from "axios";

const SEARCH_USERS = "SEARCH_USERS";
const GET_REPOS = "GET_REPOS";
const GET_USER = "GET_USER";
const SET_LOADING = "SET_LOADING";

const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.users,
        loading: false,
      };

    case GET_REPOS:
      return {
        ...state,
        repos: action.repos,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export const searchUsersThunk = (value) => async (dispatch) => {
  try {
    const response = await Axios.get(
      `https://api.github.com/search/users?q=${value.usersValue}&client_id=$${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );

    dispatch(searchUsers(response.data.items));
    console.log(response.data.items);
  } catch (e) {
    if (e) throw e;
  }
};

export const getReposThunk = (name) => async (dispatch) => {
  try {
    const response = await Axios.get(
      `https://api.github.com/users/${name.usersValue}/repos?client_id=$${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    dispatch(getRepos(response.data));
    console.log(response.data);
  } catch (e) {
    if (e) throw e;
  }
};

export const getUserThunk = (name) => async (dispatch) => {
  try {
    const response = await Axios.get(
      `https://api.github.com/users/${name.usersValue}?client_id=$${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    dispatch(getUser(response.data));
    console.log(response.data);
  } catch (e) {
    if (e) throw e;
  }
};

const searchUsers = (users) => ({ type: SEARCH_USERS, users });
const getRepos = (repos) => ({ type: GET_REPOS, repos });
const getUser = (user) => ({ type: GET_USER, user });
export const setLoading = () => ({ type: SET_LOADING });
