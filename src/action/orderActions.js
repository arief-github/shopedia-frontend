import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

const placeOrder = (token, subtotal) => (dispatch, getState) => {
    const currentUser = getState().loginReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;

    dispatch({ type: 'PLACE_ORDER_REQUEST' });

    axios.post(`${url}/orders/placeorder`, { token, subtotal, currentUser, cartItems })
    .then((res) => {
        dispatch({ type: 'PLACE_ORDER_SUCCESS' })
    })
    .catch((err) => {
        dispatch({ type: 'PLACE_ORDER_FAILED' })
    })
}

const getOrdersByUserID = () => (dispatch, getState) => {
    
    const userid = getState().loginReducer.currentUser._id;
    
    dispatch({ type: 'GET_ORDERS_BY_ID_REQUEST' })

    axios.post(`${url}/orders/getordersbyuserid`, { userid: userid })
    .then((res) => {
        dispatch({ type: 'GET_ORDERS_BY_ID_SUCCESS', payload: res.data })
    })
    .catch((err) => {
        dispatch({ type: 'GET_ORDERS_BY_ID_FAILED', payload: err })
    })
}

const getOrderByID = (orderid) => (dispatch, getState) => {
    dispatch({ type: 'GET_ORDER_BY_ID_REQUEST' })

    axios.post(`${url}/orders/getorderbyid`, { orderid: orderid })
    .then((res) => {
        dispatch({ type: 'GET_ORDER_BY_ID_SUCCESS', payload: res.data })
    })
    .catch((err) => {
        dispatch({ type: 'GET_ORDER_BY_ID_FAILED', payload: err })
    })
}

export { placeOrder, getOrdersByUserID, getOrderByID };