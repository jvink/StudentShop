import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import userReducer from './user';
import productReducer from './product';
import favouritesReducer from './favourites';

const rootReducer = combineReducers({
    toastr: toastrReducer,
    user: userReducer,
    product: productReducer,
    favourites: favouritesReducer
});

export default rootReducer;