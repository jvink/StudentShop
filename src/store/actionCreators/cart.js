import {
  // ADD_TO_CART_ERROR,
  // ADD_TO_CART_REQUEST,
  // ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART_ERROR,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  GET_CART_ERROR,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_ALL_FROM_CART_REQUEST,
  REMOVE_ALL_FROM_CART_SUCCESS,
  REMOVE_ALL_FROM_CART_ERROR,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_ERROR,
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

  addProductToCart: async (productId, amount, token) => {
    const url = "http://127.0.0.1:5000/api/ShoppingCarts?token=" + token;
    dispatch({
      type: ADD_TO_CART_REQUEST
    });

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "ProductId": productId,
          "Amount": amount
        })
      });

      if (res.ok) {
        dispatch({
          type: ADD_TO_CART_SUCCESS
        });
      } else {
        dispatch({
          type: ADD_TO_CART_ERROR
        });
      }
    } catch (error) {
      dispatch({
        type: ADD_TO_CART_ERROR,
        error
      });
    }
  },

  deleteSingleFromCart: async (productId, token) => {
    const url = "http://127.0.0.1:5000/api/ShoppingCarts/" + productId + "?token=" + token;
    
    dispatch({
      type: REMOVE_FROM_CART_REQUEST
    });

    try {
      const res = await fetch(url, {method: 'DELETE'});
      
      if (res.ok) {
        dispatch({
          type: REMOVE_FROM_CART_SUCCESS,
          productId
        }); 
      }
    } catch (error) {
      dispatch({
        type: REMOVE_FROM_CART_ERROR,
        error
      });
    }
  },

  deleteAllFromCart: async (token) => {
    const url = "http://127.0.0.1:5000/api/ShoppingCarts/d?token=" + token;
    
    dispatch({
      type: REMOVE_ALL_FROM_CART_REQUEST
    });

    try {
      const res = await fetch(url, {method: 'DELETE'});
      
      if (res.ok) {
        dispatch({
          type: REMOVE_ALL_FROM_CART_SUCCESS
        }); 
      }
    } catch (error) {
      dispatch({
        type: REMOVE_ALL_FROM_CART_ERROR,
        error
      });
    }
  },
});

export default creator;