import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

const getAllProducts = () => (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });

  axios
    .get(`${url}/products/getallproducts`)
    .then((res) => {
      console.log(res);

      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.error(err);

      dispatch({ type: "GET_PRODUCTS_FAILURE", payload: err });
    });
};

const getProductById = (productid) => (dispatch) => {
  dispatch({ type: "GET_PRODUCT_BY_ID_REQUEST" });

  axios
    .post(`${url}/products/getproductbyid`, { productid })
    .then((res) => {
      console.log(res);

      dispatch({ type: 'GET_PRODUCT_BY_ID_SUCCESS', payload: res.data });
    })
    .catch((err) => {
      console.error(err);

      dispatch({ type: 'GET_PRODUCT_BY_ID_FAILED', payload: err });
    })
}

export { getAllProducts, getProductById };