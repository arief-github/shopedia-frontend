import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Badge } from 'reactstrap';
import { getOrdersByUserID } from '../../action/orderActions';
import Error from '../../components/Common/Error';
import Loading from '../../components/Common/Loading';

export default function OrderPage() {
  const orderstate = useSelector(state => state.getOrdersByUserIdReducer)
  const {orders, loading, error} = orderstate;
  
  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('currentUser')) {
      dispatch(getOrdersByUserID())
    } else {
      window.location.href = "/login"
    }
  }, [dispatch])

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <h1 className='text-center my-2 text-uppercase'>My Orders</h1>

        <table className='table table-responsive'>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading && (<Loading/>)}
            {orders && (orders.map(order => {
              return (
                <tr onClick={() => { window.location=`/orderinfo/${order._id}` }} style={{cursor: 'pointer'}}>
                  <td>{order._id}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.transactionId}</td>
                  <td>{order.isDelivered ? (<Badge color='primary'>Delivered</Badge>) : (<Badge color='success'>Order Placed</Badge>)}</td>
                </tr>
              )
            }))}
            {error ? <Error error='Something Went Wrong'/> : null}
          </tbody>
        </table>
      </div>
    </div>
  )
}
