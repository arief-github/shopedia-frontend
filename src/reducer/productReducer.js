const getAllProductsReducer = (state = {products : []}, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_REQUEST':
            return { loading: true }
        case 'GET_PRODUCTS_SUCCESS':
            return { products: action.payload, loading: false }
        case 'GET_PRODUCTS_FAILURE':
            return { error: action.payload, loading: false }
        default:
            return state
    }
}

const getProductByIdReducer = (state={ product: {} }, action) => {
    switch(action.type) {
        case 'GET_PRODUCT_BY_ID_REQUEST' :
            return { loading: true }
        case 'GET_PRODUCT_BY_ID_SUCCESS' :
            return { product: action.payload, loading: false }
        case 'GET_PRODUCT_BY_ID_FAILED' :
            return { error: action.payload, loading: false }
        default :
            return state;
    }
}

export { getAllProductsReducer, getProductByIdReducer };