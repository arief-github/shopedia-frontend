import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../action/productActions";

export default function ProductDetail({ match }) {
  const productId = match.params.id;
  const dispatch = useDispatch();
  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );

  const { product, loading, error } = getproductbyidstate;

  useEffect(() => {
    dispatch(getProductById(productId));
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error...</p>
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

              <select>
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
              <button className="btn btn-dark text-uppercase">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
