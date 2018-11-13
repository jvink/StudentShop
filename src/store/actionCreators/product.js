import {
    GETTING_PRODUCTS_ERROR,
    GETTING_PRODUCTS_REQUEST,
    GETTING_PRODUCTS_SUCCESS,
    GETTING_PRODUCT_ERROR,
    GETTING_PRODUCT_REQUEST,
    GETTING_PRODUCT_SUCCESS,
} from '../actions/product';

const creator = (dispatch) => ({
  getProducts: async (category, subcategory) => {
    const url = "http://127.0.0.1:5000/api/products";

    dispatch({
      type: GETTING_PRODUCTS_REQUEST
    });
    await fetch(url)
    .then((response) => {
      response.json()
      .then((product) => {
        dispatch({
          type: GETTING_PRODUCTS_SUCCESS,
          product
        });
      });
    })
    .catch((error) => {
      dispatch({
        type: GETTING_PRODUCTS_ERROR,
        error
      });
    });
  },

  getProduct: async (productId) => {
    const url = "http://127.0.0.1:5000/api/products/" + productId;
    
    dispatch({
      type: GETTING_PRODUCT_REQUEST
    });
    await fetch(url)
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