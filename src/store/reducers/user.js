import {
    REGISTER_USER_ERROR,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
} from '../actions/user';

const initialState = {
  isRegistering: false,
  registerError: undefined,
  registerUserResult: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST: {
      return Object.assign({}, state, {
        isRegistering: true,
      });
    }
    case REGISTER_USER_ERROR: {
      return Object.assign({}, state, {
        isRegistering: false,
        registerError: action.error
      });
    }
    case REGISTER_USER_SUCCESS: {
      return Object.assign({}, state, {
        isRegistering: false,
        registerUserResult: action.user
      });
    }
    default: {
      return state || initialState
    }
  }
}
  
export default reducer;