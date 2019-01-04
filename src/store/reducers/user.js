import {
    REGISTER_USER_ERROR,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    EDIT_USER_ERROR,
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    IS_ADMIN_REQUEST,
    IS_ADMIN_ERROR,
    IS_ADMIN_SUCCESS,
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_ERROR,
    DELETE_USER_REQUEST,
    DELETE_USER_ERROR,
    DELETE_USER_SUCCESS,
    GET_ACCOUNT_REQUEST,
    GET_ACCOUNT_ERROR,
    GET_ACCOUNT_SUCCESS
} from '../actions/user';

const initialState = {
  isRegistering: false,
  registerError: undefined,
  registerUserResult: undefined,
  isLoggingIn: false,
  loginError: undefined,
  loginUserResult: undefined,
  isEdittingUser: false,
  editUserError: undefined,
  editUserResult: undefined,
  isCheckingAdmin: false,
  checkAdminError: undefined,
  checkAdminResult: undefined,
  isGettingUsers: false,
  getUsersError: undefined,
  getUsersResult: undefined,
  isDeletingUser: false,
  deleteUserError: undefined
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
        registerError: action.response,
        registerUserResult: false
      });
    }
    case REGISTER_USER_SUCCESS: {
      return Object.assign({}, state, {
        isRegistering: false,
        registerUserResult: true
      });
    }
    case LOGIN_USER_REQUEST: {
      return Object.assign({}, state, {
        isLoggingIn: true,
        loginError: false
      });
    }
    case LOGIN_USER_ERROR: {
      return Object.assign({}, state, {
        isLoggingIn: false,
        loginError: true
      });
    }
    case LOGIN_USER_SUCCESS: {
      return Object.assign({}, state, {
        isLoggingIn: false,
        loginUserResult: action.token,
        loginError: false
      });
    }
    case EDIT_USER_REQUEST: {
      return Object.assign({}, state, {
        isEdittingUser: true,
      });
    }
    case EDIT_USER_ERROR: {
      return Object.assign({}, state, {
        isEdittingUser: false,
        editUserError: action.error
      });
    }
    case EDIT_USER_SUCCESS: {
      return Object.assign({}, state, {
        isEdittingUser: false,
        editUserResult: true,
      });
    }
    case IS_ADMIN_REQUEST: {
      return Object.assign({}, state, {
        isCheckingAdmin: true,
      });
    }
    case IS_ADMIN_ERROR: {
      return Object.assign({}, state, {
        isCheckingAdmin: false,
        checkAdminError: action.error
      });
    }
    case IS_ADMIN_SUCCESS: {
      return Object.assign({}, state, {
        isCheckingAdmin: false,
        checkAdminResult: action.isAdmin,
      });
    }
    case GET_ALL_USERS_REQUEST: {
      return Object.assign({}, state, {
        isGettingUsers: true,
      });
    }
    case GET_ALL_USERS_ERROR: {
      return Object.assign({}, state, {
        isGettingUsers: false,
        getUsersError: action.error
      });
    }
    case GET_ALL_USERS_SUCCESS: {
      return Object.assign({}, state, {
        isGettingUsers: false,
        getUsersResult: action.users,
      });
    }
    case DELETE_USER_REQUEST: {
      return Object.assign({}, state, {
        isDeletingUser: true,
      });
    }
    case DELETE_USER_ERROR: {
      return Object.assign({}, state, {
        isDeletingUser: false,
        deleteUserError: action.error
      });
    }
    case DELETE_USER_SUCCESS: {
      return Object.assign({}, state, {
        isDeletingUser: false,
        getUsersResult: state.getUsersResult.filter((user) => {
          return user.id !== action.userId;
        })
      });
    }
    case GET_ACCOUNT_REQUEST: {
      return Object.assign({}, state, {
        isGettingUser: true,
      });
    }
    case GET_ACCOUNT_ERROR: {
      return Object.assign({}, state, {
        isGettingUser: false,
        getUserError: action.error
      });
    }
    case GET_ACCOUNT_SUCCESS: {
      return Object.assign({}, state, {
        isGettingUser: false,
        getUserResult: action.account,
      });
    }
    default: {
      return state || initialState
    }
  }
}
  
export default reducer;