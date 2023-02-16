import React from 'react';
import './Product.css';

export default function Product({ product }) {
	return (
		<div className="col-md-3 m-5">
			<img src={product.image} alt="product image" className="img-fluid"/>
			<h1>{ product.name }</h1>
			<h1>Rating : { product.rating } </h1>
			<h1>Price : { product.price } </h1>
		</div>
	)
}