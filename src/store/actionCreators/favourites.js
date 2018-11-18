import {
    ADD_TO_FAVOURITES_ERROR,
    ADD_TO_FAVOURITES_REQUEST,
    ADD_TO_FAVOURITES_SUCCESS,
    GET_FAVOURITES_ERROR,
    GET_FAVOURITES_REQUEST,
    GET_FAVOURITES_SUCCESS,
} from '../actions/favourites';

const creator = (dispatch) => ({
  addToFavourites: async (userId, productId) => {
    const url = "http://127.0.0.1:5000/api/Favourites";

    dispatch({
      type: ADD_TO_FAVOURITES_REQUEST
    });

    await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "UserId": userId,
        "ProductId": productId
      })
    })
    .then((favourites) => {
      dispatch({
        type: ADD_TO_FAVOURITES_SUCCESS,
        favourites
      }); 
    })
    .catch((error) => {  
      dispatch({
        type: ADD_TO_FAVOURITES_ERROR,
        error
      }); 
    });
  },

  getAllFavourites: async (userId) => {
    const url = "http://127.0.0.1:5000/api/Favourites/" + userId;

    dispatch({
      type: GET_FAVOURITES_REQUEST
    });
    await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      return results;
    })
    .then((favourites) => {
      dispatch({
        type: GET_FAVOURITES_SUCCESS,
        favourites
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_FAVOURITES_ERROR,
        error
      });
    });
  }
});

export default creator;