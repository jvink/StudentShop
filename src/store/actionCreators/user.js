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
    IS_ADMIN_SUCCESS,
    IS_ADMIN_REQUEST,
    IS_ADMIN_ERROR,
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_ERROR,
    GET_ALL_USERS_SUCCESS,
    DELETE_USER_ERROR,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    GET_ACCOUNT_SUCCESS,
    GET_ACCOUNT_ERROR,
    GET_ACCOUNT_REQUEST
} from '../actions/user';
import moment from 'moment';

const creator = (dispatch) => ({
  register: async (user) => {
    const url = "http://127.0.0.1:5000/api/accounts/register";
    dispatch({
      type: REGISTER_USER_REQUEST
    });

    try {
      let date = moment(user.birthday);
      let formattedDate = date.format("MM/DD/YYYY");
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "Name": user.firstName,
          "LastName": user.infix !== "" ? user.infix + " " + user.lastName : user.lastName,
          "Birthday": formattedDate,
          "Password": user.password,
          "Gender": user.gender,
          "Street_Name": user.Street_Name,
          "email": user.email,
          "House_Number": user.houseNumber,
          "Addition": user.houseNumberSuffix,
          "Postalcode": user.postalCode,
          "City": user.city,
          "Telephone_Number": user.phoneNumber
        })
      });
      const response = await res.json();
      if (res.ok) {
        dispatch({
          type: REGISTER_USER_SUCCESS
        });
      } else {
        dispatch({
          type: REGISTER_USER_ERROR,
          response
        });
      }

    } catch (response) {
      dispatch({
        type: REGISTER_USER_ERROR,
        response
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
  },

  getAccount: async(token) => {
    const url = "http://127.0.0.1:5000/api/Accounts/MyAccount?token=" + token;
    dispatch({
      type: GET_ACCOUNT_REQUEST
    });

    try {
      const res = await fetch(url);
      const account = await res.json();
      dispatch({
        type: GET_ACCOUNT_SUCCESS,
        account
      });
    } catch (error) {
      dispatch({
        type: GET_ACCOUNT_ERROR,
        error
      });
    }
  },

  isAdmin: async(token) => {
    if (token) {
      const url = "http://127.0.0.1:5000/api/admin/Status?token=" + token;
      dispatch({
        type: IS_ADMIN_REQUEST
      });
      
      try {
        const res = await fetch(url);
        const isAdmin = await res.json();
        dispatch({
          type: IS_ADMIN_SUCCESS,
          isAdmin
        });
      } catch (error) {
        dispatch({
          type: IS_ADMIN_ERROR,
          error
        });
      }
    } else {
      dispatch({
        type: IS_ADMIN_ERROR
      });
    }
  },
  
  getAllUsers: async(token) => {
    const url = "http://127.0.0.1:5000/api/admin/user?token=" + token;
    dispatch({
      type: GET_ALL_USERS_REQUEST
    });

    try {
      const res = await fetch(url);
      const users = await res.json();
      dispatch({
        type: GET_ALL_USERS_SUCCESS,
        users
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_USERS_ERROR,
        error
      });
    }
  },

  editUser: async (token, user) => {
    const url = "http://127.0.0.1:5000/api/accounts/edit?token=" + token;
    dispatch({
      type: EDIT_USER_REQUEST
    });

    try {
      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "Password": user.password,
          "Street_Name": user.street,
          "email": user.email,
          "House_Number": user.houseNumber,
          "Addition": user.houseNumberAddition,
          "Postalcode": user.postalCode,
          "City": user.city,
          "Telephone_Number": user.phoneNumber
        })
      });

      if (res.ok) {
        dispatch({
          type: EDIT_USER_SUCCESS
        });
      } else {
        dispatch({
          type: EDIT_USER_ERROR
        });
      }
    } catch (error) {
      dispatch({
        type: EDIT_USER_ERROR,
        error
      });
    }
  },

  deleteUser: async (userId, token) => {
    const url = "http://127.0.0.1:5000/api/admin/User/Delete?token=" + token;
    
    dispatch({
      type: DELETE_USER_REQUEST
    });
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      dispatch({
        type: DELETE_USER_SUCCESS,
        userId
      }); 
    })
    .catch((error) => {
      dispatch({
        type: DELETE_USER_ERROR,
        error
      }); 
    });
  },
});

export default creator;