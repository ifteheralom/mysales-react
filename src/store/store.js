import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import cartReducer from './reducers'

export default (initialState = {}) => {
    return createStore(
        combineReducers({
            cart: cartReducer,
        })
    )
}