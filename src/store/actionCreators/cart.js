import {
  // ADD_TO_CART_ERROR,
  // ADD_TO_CART_REQUEST,
  // ADD_TO_CART_SUCCESS,
  // REMOVE_FROM_CART_ERROR,
  // REMOVE_FROM_CART_REQUEST,
  // REMOVE_FROM_CART_SUCCESS,
  GET_CART_ERROR,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
} from '../actions/cart';

const creator = (dispatch) => ({
  getCart: async (token) => {
    const url = "http://127.0.0.1:5000/api/ShoppingCarts/MyCart?token=" + token;

    dispatch({
      type: GET_CART_REQUEST
    });
    await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      return results;
    })
    .then((cart) => {
      dispatch({
        type: GET_CART_SUCCESS,
        cart
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_CART_ERROR,
        error
      });
    });
  },
});

export default creator;