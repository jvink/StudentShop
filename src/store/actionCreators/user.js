import {
    REGISTER_USER_ERROR,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
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
        type: REGISTER_USER_ERROR
      });
    }
  },

  login: async (email, password) => {
    const url = "http://127.0.0.1:5000/api/accounts/login";
    dispatch({
      type: LOGIN_USER_REQUEST
    });

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": email,
          "password": password
        })
      });

      const token = await res.json();
      if (token) {
        dispatch({
          type: LOGIN_USER_SUCCESS,
          token
        });
      } else {
        dispatch({
          type: LOGIN_USER_ERROR
        });
      }
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR
      });
    }
  }
});

export default creator;