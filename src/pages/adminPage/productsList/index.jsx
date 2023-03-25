import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProducts } from "../../../action/productActions";
import Error from "../../../components/Common/Error";
import { FaTrash, FaEdit } from 'react-icons/fa'
import Loading from "../../../components/Common/Loading";
import { Link } from "react-router-dom";

export default function ProductsList() {
  const [deletedProduct, setDeletedProduct] = useState(null);
  const dispatch = useDispatch();
  const getallproductsstate = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { products, loading, error } = getallproductsstate;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [deletedProduct]);

  const handleDelete = (productid) => {
    dispatch(deleteProduct(productid))
    setDeletedProduct(productid)
  }

  return (
    <div>
      <h2>Product List</h2>

      <table className="table table-bordered table-responsive-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? <Loading /> : null}
          {error ? <Error error="Something went wrong" /> : null}
          {products ? (
            products.map((product) => (
              <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.countInStock}</td>
                <td>{product._id}</td>
                <td>
                  <FaTrash onClick={() => { handleDelete(product._id) }} className="mx-2"/>
                  <Link to={`/admin/editproduct/${product._id}`}>
                    <FaEdit/>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <h2>No Products Available at this time</h2>
          )}
        </tbody>
      </table>
    </div>
  );
}
