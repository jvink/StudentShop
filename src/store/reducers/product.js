import {
    GETTING_PRODUCTS_ERROR,
    GETTING_PRODUCTS_REQUEST,
    GETTING_PRODUCTS_SUCCESS,
    GETTING_PRODUCT_ERROR,
    GETTING_PRODUCT_REQUEST,
    GETTING_PRODUCT_SUCCESS,
} from '../actions/product';

const initialState = {
  isGettingProducts: false,
  productsError: undefined,
  getProductsResult: undefined,
  isGettingProduct: false,
  productError: undefined,
  getProductResult: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case GETTING_PRODUCTS_REQUEST: {
      return Object.assign({}, state, {
        isGettingProducts: true,
      });
    }
    case GETTING_PRODUCTS_ERROR: {
      return Object.assign({}, state, {
        isGettingProducts: false,
        productsError: action.error
      });
    }
    case GETTING_PRODUCTS_SUCCESS: {
      return Object.assign({}, state, {
        isGettingProducts: false,
        getProductsResult: action.product
      });
    }
    case GETTING_PRODUCT_REQUEST: {
      return Object.assign({}, state, {
        isGettingProduct: true,
      });
    }
    case GETTING_PRODUCT_ERROR: {
      return Object.assign({}, state, {
        isGettingProduct: false,
        productError: action.error
      });
    }
    case GETTING_PRODUCT_SUCCESS: {
      return Object.assign({}, state, {
        isGettingProduct: false,
        getProductResult: action.product
      });
    }
    default: {
      return state || initialState
    }
  }
}
  
export default reducer;