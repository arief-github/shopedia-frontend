import { getAllProductsReducer, getProductByIdReducer } from './reducer/productReducer';
import cartReducer from './reducer/cartReducer';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const finalReducer = combineReducers({
	getAllProductsReducer: getAllProductsReducer,
	getProductByIdReducer: getProductByIdReducer,
	cartReducer: cartReducer,
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
	cartReducer: { cartItems: cartItems }
}

const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store;