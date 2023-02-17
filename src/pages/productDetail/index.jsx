import React from 'react';

export default function ProductDetail({ match }) {
	const productId = match.params.id;

	return (
		<div>
			<h1 className="text-center">Product Detail Page</h1>
			<p>Id product : { productId }</p>
		</div>
	)
}