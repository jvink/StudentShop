import {
    GET_USERS_COUNT_REQUEST,
    GET_USERS_COUNT_ERROR,
    GET_USERS_COUNT_SUCCESS,
} from '../actions/statistics';

const creator = (dispatch) => ({
  getUsersCount: async () => {
    const url = "http://127.0.0.1:5000/api/Statistics/Users";

    dispatch({
      type: GET_USERS_COUNT_REQUEST
    });
    await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((statistics) => {
      dispatch({
        type: GET_USERS_COUNT_SUCCESS,
        statistics
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_USERS_COUNT_ERROR,
        error
      });
    });
  },
});

export default creator;