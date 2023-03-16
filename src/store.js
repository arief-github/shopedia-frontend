import { getAllProductsReducer, getProductByIdReducer } from './reducer/productReducer';
import cartReducer from './reducer/cartReducer';
import { placeOrderReducer, getOrdersByUserIdReducer, getOrderByIdReducer } from './reducer/orderReducer';
import { registerNewUserReducer, loginReducer } from './reducer/userReducer';

import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const finalReducer = combineReducers({
	getAllProductsReducer: getAllProductsReducer,
	getProductByIdReducer: getProductByIdReducer,
	cartReducer: cartReducer,
	placeOrderReducer: placeOrderReducer,
	getOrdersByUserIdReducer: getOrdersByUserIdReducer,
	getOrderByIdReducer: getOrderByIdReducer,
	registerNewUserReducer: registerNewUserReducer,
	loginReducer: loginReducer,
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

const initialState = {
	cartReducer: { cartItems: cartItems },
	loginReducer: { currentUser: currentUser }
}

const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store;