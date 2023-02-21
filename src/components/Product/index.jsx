import React, { useState } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const createArray = length => [...Array(length)];

const Star = ({ selected = false }) => (
	<FaStar color={ selected ? "red" : "grey" }/>
)

const StarRating = ({ totalStars = 5 , selectedStars = 0 }) => {
	return (
		<>
			{
				createArray(totalStars).map((n, i) => (
					<Star
						key={i}
						selected = { selectedStars > i }
					/>
				))
			}

		</>
	)
}


export default function Product({ product }) {
	return (
		<div>
			<Link to={`/product/${product.id}`}>
				<img src={product.image} alt="product image" className="img-fluid"/>
				<h1>{ product.name }</h1>
				<h1>Price : { product.price } </h1>	
				<StarRating selectedStars={product.rating}/>
			</Link>
		</div>
	)
}