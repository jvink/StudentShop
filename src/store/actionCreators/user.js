import {
    REGISTER_USER_ERROR,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    EDIT_USER_ERROR,
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS
} from '../actions/user';

const creator = (dispatch) => ({
  register: async (user) => {
    const url = "http://127.0.0.1:5000/api/accounts/register";
    dispatch({
      type: REGISTER_USER_REQUEST
    });

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "Name": user.firstName,
          "LastName": user.lastName,
          "Age": user.age,
          "Password": user.password,
          "Gender": user.gender,
          "Street_Name": user.street,
          "email": user.email,
          "House_Number": user.houseNumber,
          "Addition": user.houseNumberAddition,
          "Postalcode": user.postalCode,
          "City": user.city,
          "Telephone_Number": user.phoneNumber
        })
      });

      console.log(await res.json());

      dispatch({
        type: REGISTER_USER_SUCCESS
      });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        error
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

      console.log(await res.json());

      dispatch({
        type: EDIT_USER_SUCCESS
      });
    } catch (error) {
      dispatch({
        type: EDIT_USER_ERROR,
        error
      });
    }
  },
});

export default creator;