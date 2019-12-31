import { combineReducers } from 'redux';
import cartReducer from './reducers';

export default () => {
    combineReducers({
        cart: cartReducer,
    });
}