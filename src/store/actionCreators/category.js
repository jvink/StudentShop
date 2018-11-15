import {
    GET_CATEGORY_ERROR,
    GET_CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS,
} from '../actions/category';

const creator = (dispatch) => ({
  getCategory: async () => {
    const url = "http://127.0.0.1:5000/api/Categories";

    dispatch({
      type: GET_CATEGORY_REQUEST
    });
    await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((category) => {
      dispatch({
        type: GET_CATEGORY_SUCCESS,
        category
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_CATEGORY_ERROR,
        error
      });
    });
  }
});

export default creator;