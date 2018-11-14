import {
    ADD_TO_FAVORITES_ERROR,
    ADD_TO_FAVORITES_REQUEST,
    ADD_TO_FAVORITES_SUCCESS,
    GET_FAVORITES_ERROR,
    GET_FAVORITES_REQUEST,
    GET_FAVORITES_SUCCESS,
} from '../actions/favorites';

const initialState = {
  isAddingToFavorites: false,
  addToFavoritesError: undefined,
  addToFavoritesResult: undefined,
  isGettingFavorites: false,
  getFavoritesError: undefined,
  getFavoritesResult: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES_REQUEST: {
      return Object.assign({}, state, {
        isAddingToFavorites: true,
      });
    }
    case ADD_TO_FAVORITES_ERROR: {
      return Object.assign({}, state, {
        isAddingToFavorites: false,
        addToFavoritesError: action.error
      });
    }
    case ADD_TO_FAVORITES_SUCCESS: {
      return Object.assign({}, state, {
        isAddingToFavorites: false,
        addToFavoritesResult: action.favorites
      });
    }
    case GET_FAVORITES_REQUEST: {
      return Object.assign({}, state, {
        isGettingFavorites: true,
      });
    }
    case GET_FAVORITES_ERROR: {
      return Object.assign({}, state, {
        isGettingFavorites: false,
        getFavoritesError: action.error
      });
    }
    case GET_FAVORITES_SUCCESS: {
      return Object.assign({}, state, {
        isGettingFavorites: false,
        getFavoritesResult: action.favorites
      });
    }
    default: {
      return state || initialState
    }
  }
}
  
export default reducer;