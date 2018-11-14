import {
    ADD_TO_FAVORITES_ERROR,
    ADD_TO_FAVORITES_REQUEST,
    ADD_TO_FAVORITES_SUCCESS,
    GET_FAVORITES_ERROR,
    GET_FAVORITES_REQUEST,
    GET_FAVORITES_SUCCESS,
} from '../actions/favorites';

const creator = (dispatch) => ({
  addToFavorites: async (a, b) => {
    const url = "http://127.0.0.1:5000/api/favorites";

    dispatch({
      type: ADD_TO_FAVORITES_REQUEST
    });
    // await fetch(url, {method: 'post', headers: {'Content-Type':'application/json'}, body: {"UserId": a, "ProductId": b}})

    await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({UserId: a, ProductId: b})
    })

    .then((r) => {
      console.log(r);
      dispatch({
        type: ADD_TO_FAVORITES_SUCCESS
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_TO_FAVORITES_ERROR,
        error
      });
    });
  }
});

export default creator;