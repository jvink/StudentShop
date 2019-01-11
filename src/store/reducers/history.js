import {
    GET_HISTORY_ERROR,
    GET_HISTORY_REQUEST,
    GET_HISTORY_SUCCESS,
} from '../actions/history';

const initialState = {
  isGettingHistory: false,
  getHistoryError: undefined,
  getHistoryResult: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_HISTORY_REQUEST: {
      return Object.assign({}, state, {
        isGettingHistory: true,
      });
    }
    case GET_HISTORY_ERROR: {
      return Object.assign({}, state, {
        isGettingHistory: false,
        getHistoryError: action.error
      });
    }
    case GET_HISTORY_SUCCESS: {
      return Object.assign({}, state, {
        isGettingHistory: false,
        getHistoryResult: action.history
      });
    }
    default: {
      return state || initialState
    }
  }
}
  
export default reducer;