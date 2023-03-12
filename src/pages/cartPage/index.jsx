import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin2Line } from 'react-icons/ri'
import { addToCartAction, deleteFromCart } from '../../action/cartAction';
import Checkout from '../../components/Checkout';

const CartPage = () => {
	const cardreducerstate = useSelector(state => state.cartReducer);
	const dispatch = useDispatch();
	const { cartItems } = cardreducerstate;
	const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

	return (
		<div className='row mt-3 justify-content-center'>
			<div className="col-md-8 card text-center shadow p-3 mb-5 bg-white-rounded">
				<h2 className="text-center m-5">My Cart</h2>
				<table className="table table-bordered table-responsive-sm">
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Total Price</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{
							cartItems.map((item) => {
								if(!item) {
									return (
										<p>No Order!</p>
									)
								}
								
								return (
									<tr>
										<td>{item.name}</td>
										<td>{item.price}</td>
										<td>
											<select value={item.quantity}
												onChange={(e) => dispatch(addToCartAction(item, e.target.value))
												}>
												{[...Array(item.countInStock).keys()].map((value, index) => {
													return <option value={index + 1}>{index + 1}</option>
												})}
											</select>
										</td>
										<td>{item.quantity * item.price}</td>
										<td> <RiDeleteBin2Line color='red'  style={{ cursor: 'pointer' }} onClick={() => dispatch(deleteFromCart(item))}/> </td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
				<hr />
				<h2 className="text-center">Sub Total : {subtotal}</h2>
				<hr />
			    <Checkout amount={subtotal} />
			</div>
		</div>
	)
}

export default CartPage;