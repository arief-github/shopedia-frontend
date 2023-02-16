import React from 'react';
import Navbar from '../../components/Navbar';
import  {products} from '../../data/products';
import Product from '../../components/Product';

export default function Home() {
	return (
		<>
			<Navbar/>
			<div className="row justify-content-center">
				{
					products.map((product) => <Product product={product}/>)
				}
			</div>
		</>
	)
}