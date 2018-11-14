import {
    ADD_TO_FAVOURITES_ERROR,
    ADD_TO_FAVOURITES_REQUEST,
    ADD_TO_FAVOURITES_SUCCESS,
    GET_FAVOURITES_ERROR,
    GET_FAVOURITES_REQUEST,
    GET_FAVOURITES_SUCCESS,
} from '../actions/favourites';

const initialState = {
  isAddingToFavourites: false,
  addToFavouritesError: undefined,
  addToFavouritesResult: undefined,
  isGettingFavourites: false,
  getFavouritesError: undefined,
  getFavouritesResult: undefined,
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
        addToFavouritesError: action.error
      });
    }
    case ADD_TO_FAVOURITES_SUCCESS: {
      return Object.assign({}, state, {
        isAddingToFavourites: false,
        addToFavouritesResult: action.favourites
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
    default: {
      return state || initialState
    }
  }
}
  
export default reducer;