import axios from 'axios';

export const getAllProducts = () => dispatch => {

    dispatch({ type: 'GET_PRODUCTS_REQUEST' })

    const url =
        import.meta.env.VITE_BASE_URL;

    axios.get(`${url}/products/getallproducts`)
        .then((res) => setProducts(res.data) dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: res.data }))
        .catch((err) => console.error(err) dispatch({ type: 'GET_PRODUCTS_FAILURE', payload: err }))
}