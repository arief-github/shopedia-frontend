import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge } from 'reactstrap';
import { getOrderByID } from '../../action/orderActions';
import Error from '../../components/Common/Error';
import Loading from '../../components/Common/Loading';

export default function OrderDetail({ match }) {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getOrderByIdReducer);

  const { order, loading, error } = orderstate;

  useEffect(() => {
    dispatch(getOrderByID(match.params.orderid))
  }, [dispatch])

  return (
    <div>
        {error && <Error error="Something Went Wrong"/>}
        
        {loading && <Loading/>}

        {
            order && (
                <> 
                    <div className='row justify-content-center'>
                        <div className="col-md-5 card">
                            <h2>Items In Your Order</h2>
                            <hr/>
                            {
                                order.orderItems.map((item) => {
                                    return (
                                        <div className='orderitem'>
                                            <h1>{item.name}</h1>
                                            <h1>Quantity : <b>{item.quantity}</b></h1>
                                            <h1>
                                                Price : { item.quantity } * { item.price } = {" "}
                                                { item.price * item.quantity }
                                            </h1>
                                            <hr/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-md-5 text-right card">
                            <h2>Order Details</h2>
                            <hr/>
                            <h3>Order ID : {order._id}</h3>
                            <h3>Total Amount : {order.orderAmount}</h3>
                            <h3>Date Of Order : {order.createdAt.substring(0, 10)}</h3>
                            <h3>Transaction ID : {order.transactionId}</h3>
                            {order.isDelivered ? (<Badge color='primary'>Delivered</Badge>) : (<Badge color='success'>Order Placed</Badge>)}
                            <hr/>

                            <div className="text-right">
                                <h2>Shipping Details</h2>
                                <hr/>

                                <h1 className="text-right">
                                    Address : <b>{order.shippingAddress.address}</b>
                                </h1>
                                <h1 className="text-right">
                                    City : <b>{order.shippingAddress.city}</b>
                                </h1>
                                <h1 className="text-right">
                                    Country : <b>{order.shippingAddress.country}</b>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="text-left">Replacement Conditions</div>
                            <p>
                                A free replacement cannot be created for an item which was returned
                                and replaced once earlier. If your item is not eligible for free
                                replacement due to any reason, you can always return it for a
                                refund. If the item has missing parts or accessories, you may try to
                                contact the manufacturer for assistance. Manufacturer contact
                                information can usually be found on the item packaging or in the
                                paperwork included with the item.
                            </p>
                        </div>
                    </div>
                </>
            )
        }
    </div>
  )
}
