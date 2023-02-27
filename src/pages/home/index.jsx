import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../action/productActions";

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
      <Navbar />
      <div className="row justify-content-center">
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <p>Something went wrong</p>
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
