import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../action/productActions";
import { addToCartAction } from '../../action/cartAction.js';
import Loading from "../../components/Common/Loading";
import Error from "../../components/Common/Error";
import Review from "../../components/Review";

export default function ProductDetail({ match }) {
  const productId = match.params.id;

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );

  const { product, loading, error } = getproductbyidstate;

  const addToCart = () => {
  	// alert(qty);
  	dispatch(addToCartAction(product, qty))
  }

  useEffect(() => {
    dispatch(getProductById(productId));
  }, []);

  return (
    <>
      {loading ? (
        <Loading/>
      ) : error ? (
        <Error/>
      ) : (
        <div className="row">
          <div className="col-md-6">
            <div className="card p-2 m-2">
              <h1>{product.name}</h1>
              <img
                src={product.image}
                alt="photo product"
                className="img-fluid m-3 bigimg"
              />
              <p className="text-md-start">{product.description}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="m-2">
              <h1>Price : {product.price}</h1>

              <hr />

              <h1>Select Quantity</h1>

              <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                {product.countInStock === 0 ? (
                  <option value="">Out of Stock</option>
                ) : (
                  [...Array(product.countInStock).keys()].map(
                    (value, index) => {
                      return <option value={index + 1}>{index + 1}</option>;
                    }
                  )
                )}
              </select>

              <hr />
              {
              	product.countInStock === 0 ? (  <button className="btn btn-dark text-uppercase" disabled>
                Add to Cart
              </button>) : (  <button className="btn btn-dark text-uppercase" onClick={ addToCart }>
                Add to Cart
              </button>)
              }

              <hr/>

              <Review product={product}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
