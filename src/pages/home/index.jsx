import React, { useEffect, useState } from "react";
import Product from "../../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../action/productActions";
import Loading from "../../components/Common/Loading";
import Error from "../../components/Common/Error";

export default function Home() {
  const getAllProductsState = useSelector(
    (state) => state.getAllProductsReducer
  );

  const { loading, products, error } = getAllProductsState;

  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(getAllProducts());
  
  }, []);

  return (
    <>
      <div className="row justify-content-center">
        {loading ? (
          <Loading/>
        ) : error ? (
          <Error error="Something Went Wrong"/>
        ) : (
          products.map((product) => {
            return (
              <div className="col-md-3 m-3 card p-2">
                <Product product={product} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
