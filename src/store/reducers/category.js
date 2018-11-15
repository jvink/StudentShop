import {
    GET_CATEGORY_ERROR,
    GET_CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS,
} from '../actions/category';

const initialState = {
  isGettingCategory: false,
  categoryError: undefined,
  getCategoryResult: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST: {
      return Object.assign({}, state, {
        isGettingCategory: true,
      });
    }
    case GET_CATEGORY_ERROR: {
      return Object.assign({}, state, {
        isGettingCategory: false,
        categoryError: action.error
      });
    }
    case GET_CATEGORY_SUCCESS: {
      return Object.assign({}, state, {
        isGettingCategory: false,
        getCategoryResult: action.category
      });
    }
    default: {
      return state || initialState
    }
  }
}
  
export default reducer;