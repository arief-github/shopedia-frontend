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

const filterProduct = (searchKey, sortKey, category) => dispatch => {
  let filteredProduct;

  dispatch({ type: 'GET_PRODUCTS_REQUEST' });

  axios.get(`${url}/products/getallproducts`).then((res) => {
    
    filteredProduct = res.data;

    // conditional for search key 
    if(searchKey){
         filteredProduct = res.data.filter(product => {return product.name.toLowerCase().includes(searchKey)})
    }
    // conditional for sort key
    if(sortKey !== 'popular') {
      if(sortKey === 'htl') {
        filteredProduct = res.data.sort((a,b) => { return -a.price + b.price }) 
      } else {
        filteredProduct = res.data.sort((a,b) => { return a.price - b.price })
      }
   }

    // conditional for category
    if(category !== 'all') {
      filteredProduct = res.data.filter(product => { return product.category.toLowerCase().includes(category)})
    }

    // dispatch action
    dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: filteredProduct })
  })
  .catch(err => {
    dispatch({ type: 'GET_PRODUCTS_FAILED' })
  })
}

export { getAllProducts, getProductById, filterProduct };