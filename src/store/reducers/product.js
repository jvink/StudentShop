import {
    GETTING_PRODUCT_ERROR,
    GETTING_PRODUCT_REQUEST,
    GETTING_PRODUCT_SUCCESS,
} from '../actions/product';

const initialState = {
  isGettingProducts: false,
  productError: undefined,
  getProductResult: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case GETTING_PRODUCT_REQUEST: {
      return Object.assign({}, state, {
        isGettingProducts: true,
      });
    }
    case GETTING_PRODUCT_ERROR: {
      return Object.assign({}, state, {
        isGettingProducts: false,
        productError: action.error
      });
    }
    case GETTING_PRODUCT_SUCCESS: {
      return Object.assign({}, state, {
        isGettingProducts: false,
        getProductResult: action.product
      });
    }
    default: {
      return state || initialState
    }
  }
}
  
export default reducer;