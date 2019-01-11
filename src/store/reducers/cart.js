
import {
    ADD_TO_CART_ERROR,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    REMOVE_FROM_CART_ERROR,
    REMOVE_FROM_CART_REQUEST,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_ALL_FROM_CART_ERROR,
    REMOVE_ALL_FROM_CART_REQUEST,
    REMOVE_ALL_FROM_CART_SUCCESS,
    GET_CART_ERROR,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
} from '../actions/cart';

const initialState = {
  isAddingToCart: false,
  addCartError: undefined,
  addCartResult: undefined,
  isRemovingFromCart: false,
  removeCartError: undefined,
  removeCartResult: undefined,
  isRemovingAllFromCart: false,
  removeAllCartError: undefined,
  removeAllCartResult: undefined,
  isGettingCart: false,
  getCartError: undefined,
  getCartResult: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST: {
      return Object.assign({}, state, {
        isAddingToCart: true,
      });
    }
    case ADD_TO_CART_ERROR: {
      return Object.assign({}, state, {
        isAddingToCart: false,
        addCartError: action.error
      });
    }
    case ADD_TO_CART_SUCCESS: {
      return Object.assign({}, state, {
        isAddingToCart: false,
        addCartResult: true
      });
    }
    case REMOVE_FROM_CART_REQUEST: {
      return Object.assign({}, state, {
        isRemovingFromCart: true
      })
    }
    case REMOVE_FROM_CART_ERROR: {
      return Object.assign({}, state, {
        isRemovingFromCart: false,
        removeCartError: action.error
      });
    }
    case REMOVE_FROM_CART_SUCCESS: {
      return Object.assign({}, state, {
        isRemovingFromCart: false,
        getCartResult: state.getCartResult.filter((cart) => {
          return cart.p.id !== action.productId;
        })
      });
    }
    case REMOVE_ALL_FROM_CART_REQUEST: {
      return Object.assign({}, state, {
        isRemovingAllFromCart: true,
      });
    }
    case REMOVE_ALL_FROM_CART_ERROR: {
      return Object.assign({}, state, {
        isRemovingAllFromCart: false,
        removeAllCartError: action.error
      });
    }
    case REMOVE_ALL_FROM_CART_SUCCESS: {
      return Object.assign({}, state, {
        isRemovingAllFromCart: false,
        getCartResult: []
      });
    }
    case GET_CART_REQUEST: {
      return Object.assign({}, state, {
        isGettingCart: true,
      });
    }
    case GET_CART_ERROR: {
      return Object.assign({}, state, {
        isGettingCart: false,
        getCartError: action.error
      });
    }
    case GET_CART_SUCCESS: {
      return Object.assign({}, state, {
        isGettingCart: false,
        getCartResult: action.cart
      });
    }
    default: {
      return state || initialState
    }
  }
}
  
export default reducer;