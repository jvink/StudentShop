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

const initialState = {
  isAddingToFavourites: false,
  flipFavouritesError: undefined,
  flipFavouritesResult: undefined,
  isGettingFavourites: false,
  getFavouritesError: undefined,
  getFavouritesResult: undefined,
  isCheckingFavourite: false,
  isFavouriteError: undefined,
  isFavouriteResult: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES_REQUEST: {
      return Object.assign({}, state, {
        isAddingToFavourites: true,
      });
    }
    case ADD_TO_FAVOURITES_ERROR: {
      return Object.assign({}, state, {
        isAddingToFavourites: false,
        flipFavouritesError: action.error
      });
    }
    case ADD_TO_FAVOURITES_SUCCESS: {
      return Object.assign({}, state, {
        isAddingToFavourites: false,
        flipFavouritesResult: action.favourites
      });
    }
    case GET_FAVOURITES_REQUEST: {
      return Object.assign({}, state, {
        isGettingFavourites: true,
      });
    }
    case GET_FAVOURITES_ERROR: {
      return Object.assign({}, state, {
        isGettingFavourites: false,
        getFavouritesError: action.error
      });
    }
    case GET_FAVOURITES_SUCCESS: {
      return Object.assign({}, state, {
        isGettingFavourites: false,
        getFavouritesResult: action.favourites
      });
    }
    case IS_FAVOURITE_REQUEST: {
      return Object.assign({}, state, {
        isCheckingFavourite: true,
      });
    }
    case IS_FAVOURITE_ERROR: {
      return Object.assign({}, state, {
        isCheckingFavourite: false,
        isFavouriteError: action.error
      });
    }
    case IS_FAVOURITE_SUCCESS: {
      return Object.assign({}, state, {
        isCheckingFavourite: false,
        isFavouriteResult: action.favourites
      });
    }
    default: {
      return state || initialState
    }
  }
}
  
export default reducer;