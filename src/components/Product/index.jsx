import React, { useState } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import StarRating from '../StarRating';

export default function Product({ product }) {
	return (
		<div>
			<Link to={`product/${product._id}`}>
				<img src={product.image} alt="product image" className="img-fluid"/>
				<h1>{ product.name }</h1>
				<h1>Price : { product.price } </h1>	
				<StarRating selectedStars={product.rating}/>
			</Link>
		</div>
	)
}