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

export { placeOrder };