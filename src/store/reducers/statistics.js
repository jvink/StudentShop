import {
    GET_USERS_COUNT_ERROR,
    GET_USERS_COUNT_REQUEST,
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

const initialState = {
  isGettingUsersCount: false,
  getUsersCountError: undefined,
  getUsersCountResult: undefined,
  isGettingLowestStockProducts: false,
  getLowestStockProductsError: undefined,
  getLowestStockProductsResult: undefined,
  isGettingPendingOrdersCount: false,
  getPendingOrdersCountError: undefined,
  getPendingOrdersCountResult: undefined,
  isGettingDeliveredOrdersCount: false,
  getDeliveredOrdersCountError: undefined,
  getDeliveredOrdersCountResult: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_USERS_COUNT_REQUEST: {
      return Object.assign({}, state, {
        isGettingUsersCount: true,
      });
    }
    case GET_USERS_COUNT_ERROR: {
      return Object.assign({}, state, {
        isGettingUsersCount: false,
        getUsersCountError: action.error
      });
    }
    case GET_USERS_COUNT_SUCCESS: {
      return Object.assign({}, state, {
        isGettingUsersCount: false,
        getUsersCountResult: action.statistics
      });
    }
    case GET_LOWEST_PRODUCT_REQUEST: {
      return Object.assign({}, state, {
        isGettingLowestStockProducts: true,
      });
    }
    case GET_LOWEST_PRODUCT_ERROR: {
      return Object.assign({}, state, {
        isGettingLowestStockProducts: false,
        getLowestStockProductsError: action.error
      });
    }
    case GET_LOWEST_PRODUCT_SUCCESS: {
      return Object.assign({}, state, {
        isGettingLowestStockProducts: false,
        getLowestStockProductsResult: action.statistics
      });
    }
    case GET_PENDING_ORDERS_COUNT_REQUEST: {
      return Object.assign({}, state, {
        isGettingPendingOrdersCount: true,
      });
    }
    case GET_PENDING_ORDERS_COUNT_ERROR: {
      return Object.assign({}, state, {
        isGettingPendingOrdersCount: false,
        getPendingOrdersCountError: action.error
      });
    }
    case GET_PENDING_ORDERS_COUNT_SUCCESS: {
      return Object.assign({}, state, {
        isGettingPendingOrdersCount: false,
        getPendingOrdersCountResult: action.statistics
      });
    }
    case GET_DELIVERED_ORDERS_COUNT_REQUEST: {
      return Object.assign({}, state, {
        isGettingDeliveredOrdersCount: true,
      });
    }
    case GET_DELIVERED_ORDERS_COUNT_ERROR: {
      return Object.assign({}, state, {
        isGettingDeliveredOrdersCount: false,
        getDeliveredOrdersCountError: action.error
      });
    }
    case GET_DELIVERED_ORDERS_COUNT_SUCCESS: {
      return Object.assign({}, state, {
        isGettingDeliveredOrdersCount: false,
        getDeliveredOrdersCountResult: action.statistics
      });
    }
    default: {
      return state || initialState
    }
  }
}
  
export default reducer;