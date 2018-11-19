import {
    ADD_TO_FAVOURITES_ERROR,
    ADD_TO_FAVOURITES_REQUEST,
    ADD_TO_FAVOURITES_SUCCESS,
    GET_FAVOURITES_ERROR,
    GET_FAVOURITES_REQUEST,
    GET_FAVOURITES_SUCCESS,
    IS_FAVOURITE_ERROR,
    IS_FAVOURITE_REQUEST,
    IS_FAVOURITE_SUCCESS,
} from '../actions/favourites';

const creator = (dispatch) => ({
  addToFavourites: async (userId, productId) => {
    
    isFavourite(userId, productId)
    .then((isFavourite)=> {
      dispatch({
        type: ADD_TO_FAVOURITES_REQUEST
      });
      
      if (!isFavourite) {
        const url = "http://127.0.0.1:5000/api/Favourites";
        fetch(url, {
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
      } else {
        const url = "http://127.0.0.1:5000/api/Favourites/" + userId + "/" + productId;
        fetch(url, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
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
      }
    })
    .catch((err) => {
      throw new Error(err);
    })
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
  },

  checkFavourite: async (userId, productId) => {
    const url = "http://127.0.0.1:5000/api/Favourites/" + userId + "/" + productId;

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

async function isFavourite(userId, productId) {
  const url = "http://127.0.0.1:5000/api/Favourites/" + userId + "/" + productId;

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