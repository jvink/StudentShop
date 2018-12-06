import {
    ADD_TO_FAVOURITES_ERROR,
    ADD_TO_FAVOURITES_REQUEST,
    ADD_TO_FAVOURITES_SUCCESS,
    REMOVE_FROM_FAVOURITES_ERROR,
    REMOVE_FROM_FAVOURITES_REQUEST,
    REMOVE_FROM_FAVOURITES_SUCCESS,
    GET_FAVOURITES_ERROR,
    GET_FAVOURITES_REQUEST,
    GET_FAVOURITES_SUCCESS,
    IS_FAVOURITE_ERROR,
    IS_FAVOURITE_REQUEST,
    IS_FAVOURITE_SUCCESS,
} from '../actions/favourites';

const creator = (dispatch) => ({
  flipFavourites: async (token, productId) => {
    isFavourite(token, productId)
    .then((isFavourite)=> {
      
      if (!isFavourite) {
        dispatch({
          type: ADD_TO_FAVOURITES_REQUEST
        });
        const url = "http://127.0.0.1:5000/api/Favourites/PostFavourite?token=" + token;
        fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
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
      } else {
        dispatch({
          type: REMOVE_FROM_FAVOURITES_REQUEST
        });
        const url = "http://127.0.0.1:5000/api/Favourites/RemoveFavourite/" + productId + "?token=" + token;
        fetch(url, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(() => {
          dispatch({
            type: REMOVE_FROM_FAVOURITES_SUCCESS,
            productId
          }); 
        })
        .catch((error) => {
          dispatch({
            type: REMOVE_FROM_FAVOURITES_ERROR,
            error
          }); 
        });
      }
    })
    .catch((err) => {
      throw new Error(err);
    })
  },

  getAllFavourites: async (token) => {
    const url = "http://127.0.0.1:5000/api/Favourites/MyFavourites/?token=" + token;

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
  },

  checkFavourite: async (token, productId) => {
    const url = "http://127.0.0.1:5000/api/Favourites/MyFavourites/" + productId + "?token=" + token;

    dispatch({
      type: IS_FAVOURITE_REQUEST
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
        type: IS_FAVOURITE_SUCCESS,
        favourites
      });
    })
    .catch((error) => {
      dispatch({
        type: IS_FAVOURITE_ERROR,
        error
      });
    });
  },
});

async function isFavourite(token, productId) {
  const url = "http://127.0.0.1:5000/api/Favourites/MyFavourites/" + productId + "?token=" + token;

  try {

    const isFav = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result
    })
    .catch((err) => {
      throw new Error(err);
    });
    return isFav;
  } catch(err) {
    throw new Error(err);
  }
}

export default creator;