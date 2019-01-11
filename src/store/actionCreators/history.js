import {
  GET_HISTORY_ERROR,
  GET_HISTORY_REQUEST,
  GET_HISTORY_SUCCESS,
} from '../actions/history';

const creator = (dispatch) => ({
  getHistory: async (token) => {
    const url = "http://127.0.0.1:5000/api/History?token=" + token;

    dispatch({
      type: GET_HISTORY_REQUEST
    });
    await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      return results;
    })
    .then((history) => {
      dispatch({
        type: GET_HISTORY_SUCCESS,
        history
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_HISTORY_ERROR,
        error
      });
    });
  },
});

export default creator;