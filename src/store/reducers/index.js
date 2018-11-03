import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import userReducer from './user';
import productReducer from './product';

const rootReducer = combineReducers({
    toastr: toastrReducer,
    user: userReducer,
    product: productReducer
});

export default rootReducer;