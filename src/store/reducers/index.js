import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import userReducer from './user';
import productReducer from './product';
import favouritesReducer from './favourites';
import categoryReducer from './category';
import statisticsReducer from './statistics';
import historyReducer from './history';
import cartReducer from './cart';

const rootReducer = combineReducers({
    toastr: toastrReducer,
    user: userReducer,
    product: productReducer,
    favourites: favouritesReducer,
    category: categoryReducer,
    statistics: statisticsReducer,
    history: historyReducer,
    cart: cartReducer
});

export default rootReducer;