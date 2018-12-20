import {
    GETTING_PRODUCTS_ERROR,
    GETTING_PRODUCTS_REQUEST,
    GETTING_PRODUCTS_SUCCESS,
    GETTING_PRODUCT_ERROR,
    GETTING_PRODUCT_REQUEST,
    GETTING_PRODUCT_SUCCESS,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_ERROR,
    GET_ALL_PRODUCTS_SUCCESS,
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS
} from '../actions/product';

const initialState = {
  isGettingProducts: false,
  productsError: undefined,
  getProductsResult: undefined,
  isGettingProduct: false,
  productError: undefined,
  getProductResult: undefined,
  isGettingAllProduct: false,
  getAllProductsError: undefined,
  getAllProductsResult: undefined,
  isDeletingProduct: false,
  deleteProductError: undefined,
  deleteProductResult: undefined,
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
    case GET_ALL_PRODUCTS_REQUEST: {
      return Object.assign({}, state, {
        isGettingAllProduct: true,
      });
    }
    case GET_ALL_PRODUCTS_ERROR: {
      return Object.assign({}, state, {
        isGettingAllProduct: false,
        getAllProductsError: action.error
      });
    }
    case GET_ALL_PRODUCTS_SUCCESS: {
      return Object.assign({}, state, {
        isGettingAllProduct: false,
        getAllProductsResult: action.product
      });
    }
    case DELETE_PRODUCT_REQUEST: {
      return Object.assign({}, state, {
        isDeletingProduct: true,
      });
    }
    case DELETE_PRODUCT_ERROR: {
      return Object.assign({}, state, {
        isDeletingProduct: false,
        deleteProductError: action.error
      });
    }
    case DELETE_PRODUCT_SUCCESS: {
      return Object.assign({}, state, {
        getAllProductsResult: state.getAllProductsResult.filter((product) => {
          return product.id !== action.productId;
        })
      });
    }
    default: {
      return state || initialState
    }
  }
}
  
export default reducer;