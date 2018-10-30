import {
    GETTING_PRODUCT_ERROR,
    GETTING_PRODUCT_REQUEST,
    GETTING_PRODUCT_SUCCESS,
} from '../actions/product';

const creator = (dispatch) => ({
  getProduct: async () => {
    const url = "http://127.0.0.1:5000/api/products";

    dispatch({
      type: GETTING_PRODUCT_REQUEST
    });
    fetch(url)
    .then((response) => {
      response.json()
      .then((product) => {
        dispatch({
          type: GETTING_PRODUCT_SUCCESS,
          product
        });
      });
    })
    .catch((error) => {
      dispatch({
        type: GETTING_PRODUCT_ERROR,
        error
      });
    });
  }
});

export default creator;