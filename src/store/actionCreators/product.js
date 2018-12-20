import {
    GETTING_PRODUCTS_ERROR,
    GETTING_PRODUCTS_REQUEST,
    GETTING_PRODUCTS_SUCCESS,
    GETTING_PRODUCT_ERROR,
    GETTING_PRODUCT_REQUEST,
    GETTING_PRODUCT_SUCCESS,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_ERROR,
    GET_ALL_PRODUCTS_SUCCESS
} from '../actions/product';

const creator = (dispatch) => ({
  getProducts: async (token, category, subcategory, searchQuery, isHomePage) => {
    let url = null;
    if (isHomePage) {
      url = "http://127.0.0.1:5000/api/Products/Random" + (token ? "?token=" + token : "");
    } else if (category && subcategory) {
      url = "http://127.0.0.1:5000/api/Categories/" + category + "/Subcategories/" + subcategory + (token ? "?token=" + token : "");
    } else if (category && !subcategory) {
      url = "http://127.0.0.1:5000/api/Categories/" + category + (token ? "?token=" + token : "");
    } else if (searchQuery) {
      url = "http://127.0.0.1:5000/api/Products/Search=" + searchQuery + (token ? "?token=" + token : "");
    } else {
      url = "http://127.0.0.1:5000/api/Products" + (token ? "?token=" + token : "");
    }
    if (url) {
      dispatch({
        type: GETTING_PRODUCTS_REQUEST
      });
      await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((product) => {
        dispatch({
          type: GETTING_PRODUCTS_SUCCESS,
          product
        });
      })
      .catch((error) => {
        dispatch({
          type: GETTING_PRODUCTS_ERROR,
          error
        });
      });
    }
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
  },

  getAllProducts: async () => {
    const url = "http://127.0.0.1:5000/api/Admin/Products";
    
    dispatch({
      type: GET_ALL_PRODUCTS_REQUEST
    });
    await fetch(url)
    .then((response) => {
      response.json()
      .then((product) => {
        dispatch({
          type: GET_ALL_PRODUCTS_SUCCESS,
          product
        });
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_ALL_PRODUCTS_ERROR,
        error
      });
    });
  }
});

export default creator;