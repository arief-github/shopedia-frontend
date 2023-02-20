import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Product from '../../components/Product';

import axios from 'axios';

export default function Home() {
	const [products, setProducts] = useState();
	const url = import.meta.env.VITE_BASE_URL;

	useEffect(() => {
		axios.get(`${url}/products/getallproducts`)
		.then((res) => setProducts(res.data))
		.catch((err) => console.error(err))
	}, [])

	return (
		<>
			<Navbar/>
			<div className="row justify-content-center">
				{
					products?.length ? (products.map((product) => (<div key={product._id}><Product product={product}/></div>))) : null
				}
			</div>
		</>
	)
}