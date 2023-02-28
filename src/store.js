import { getAllProductsReducer, getProductByIdReducer } from './reducer/productReducer';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';

const finalReducer = combineReducers({
	getAllProductsReducer: getAllProductsReducer,
	getProductByIdReducer: getProductByIdReducer,
});

const store = createStore(finalReducer, applyMiddleware(thunk))

export default store;