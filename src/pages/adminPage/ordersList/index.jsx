import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Error from '../../../components/Common/Error'
import Loading from '../../../components/Common/Loading'

import { getAllOrders } from '../../../action/orderActions'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'


export default function OrdersList() {
  const getordersstate = useSelector(state => state.getAllOrdersReducer);
  const { loading, error, orders } = getordersstate;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [])

  return (
    <div>
      {loading ? <Loading /> : null}
      {error ? <Error error="Something went wrong" /> : null}
      <h2>Orders List</h2>
      <Table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {
            orders ? orders.map((order) => (
              <tr onClick={() => <Link to={`/orderinfo/${order._id}`}/>}>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.userid}</td>
                <td>{order.orderAmount}</td>
                <td>{order.createdAt}</td>
                <td>{order.transactionId}</td>
              </tr>
            )) : (<h2>No Order Confirmed</h2>)
          }
        </tbody>
      </Table>
    </div>
  )
}
