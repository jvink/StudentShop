import {
    GET_USERS_COUNT_REQUEST,
    GET_USERS_COUNT_ERROR,
    GET_USERS_COUNT_SUCCESS,
    GET_DELIVERED_ORDERS_COUNT_ERROR,
    GET_DELIVERED_ORDERS_COUNT_REQUEST,
    GET_DELIVERED_ORDERS_COUNT_SUCCESS,
    GET_LOWEST_PRODUCT_ERROR,
    GET_LOWEST_PRODUCT_REQUEST,
    GET_LOWEST_PRODUCT_SUCCESS,
    GET_PENDING_ORDERS_COUNT_ERROR,
    GET_PENDING_ORDERS_COUNT_REQUEST,
    GET_PENDING_ORDERS_COUNT_SUCCESS
} from '../actions/statistics';

const creator = (dispatch) => ({
  getUsersCount: async (token) => {
    const url = "http://127.0.0.1:5000/api/Statistics/Users?token=" + token;

    dispatch({
      type: GET_USERS_COUNT_REQUEST
    });
    await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((statistics) => {
      dispatch({
        type: GET_USERS_COUNT_SUCCESS,
        statistics
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_USERS_COUNT_ERROR,
        error
      });
    });
  },

  getLowestStockProducts: async (token) => {
    const url = "http://127.0.0.1:5000/api/Statistics/Products?token=" + token;

    dispatch({
      type: GET_LOWEST_PRODUCT_REQUEST
    });
    await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((statistics) => {
      dispatch({
        type: GET_LOWEST_PRODUCT_SUCCESS,
        statistics
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_LOWEST_PRODUCT_ERROR,
        error
      });
    });
  },

  getPendingOrderCount: async (token) => {
    const url = "http://127.0.0.1:5000/api/Statistics/Pending?token=" + token;

    dispatch({
      type: GET_PENDING_ORDERS_COUNT_REQUEST
    });
    await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((statistics) => {
      dispatch({
        type: GET_PENDING_ORDERS_COUNT_SUCCESS,
        statistics
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_PENDING_ORDERS_COUNT_ERROR,
        error
      });
    });
  },

  getDeliveredOrderCount: async (token) => {
    const url = "http://127.0.0.1:5000/api/Statistics/GetDelivered?token=" + token;

    dispatch({
      type: GET_DELIVERED_ORDERS_COUNT_REQUEST
    });
    await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((statistics) => {
      dispatch({
        type: GET_DELIVERED_ORDERS_COUNT_SUCCESS,
        statistics
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_DELIVERED_ORDERS_COUNT_ERROR,
        error
      });
    });
  },
});

export default creator;