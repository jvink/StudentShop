import {
    GET_USERS_COUNT_ERROR,
    GET_USERS_COUNT_REQUEST,
    GET_USERS_COUNT_SUCCESS,
} from '../actions/statistics';

const initialState = {
  isGettingUsersCount: false,
  getUsersCountError: undefined,
  getUsersCountResult: undefined,
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
    default: {
      return state || initialState
    }
  }
}
  
export default reducer;