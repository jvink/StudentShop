import {
    REGISTER_USER_ERROR,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
} from '../actions/user';

const creator = (dispatch) => ({
  getUser: async (user) => {
    dispatch({
      type: REGISTER_USER_REQUEST
    });
    if (true) {
      dispatch({
        type: REGISTER_USER_SUCCESS,
        user
      });
    } else {
      dispatch({
        type: REGISTER_USER_ERROR,
        error
      });
    }
  }
});

export default creator;