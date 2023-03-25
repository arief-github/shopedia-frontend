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

const addProductReview = (review, productid) => (dispatch, getState) => {
  dispatch({ type: 'ADD_PRODUCT_REVIEW_REQUEST' })

  const currentUser = getState().loginReducer.currentUser;

  axios.post(`${url}/products/addreview`, {review, productid, currentUser})
  .then((res) => {
    dispatch({ type: 'ADD_PRODUCT_REVIEW_SUCCESS' })
  })
  .catch((err) => {
    dispatch({ type: 'ADD_PRODUCT_REVIEW_FAILED' })
  })
}

const deleteProduct = (productid) => dispatch => {
  dispatch({ type: 'DELETE_PRODUCT_REQUEST' });

  axios
  .post(`${url}/products/deleteproduct`, { productid })
  .then((res) => {
    dispatch({ type: 'DELETE_PRODUCT_SUCCESS' , payload: productid})
    alert("Product Deleted Successfully")
  })
  .catch((err) => {
    dispatch({ type: 'DELETE_PRODUCT_ERROR', payload: err })
  })
}

const addProduct = (product) => dispatch => {
  dispatch({ type: 'ADD_PRODUCT_REQUEST' });

  axios
    .post(`${url}/products/addproduct`, { product })
    .then((res) => {
      dispatch({ type: 'ADD_PRODUCT_SUCCESS' })
    })
    .catch((err) => {
      dispatch({ type: 'ADD_PRODUCT_FAILED', payload: err })
    })
}

const updateProduct = (productid, updatedproduct) => dispatch => {
  dispatch({ type: 'UPDATE_PRODUCT_REQUEST' });

  axios
    .post(`${url}/products/updateproduct`, { productid, updatedproduct })
    .then((res) => {
      dispatch({ type: 'UPDATE_PRODUCT_SUCCESS', payload: res.data })
    })
    .catch((err) => {
      dispatch({ type: 'UPDATE_PRODUCT_FAILED', payload: err })
    })
}


export { getAllProducts, getProductById, filterProduct, addProductReview, deleteProduct, addProduct, updateProduct };