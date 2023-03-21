import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../../action/orderActions';
import Error from '../Common/Error';
import Loading from '../Common/Loading';
import Success from '../Common/Success';

const baseStripeKey = import.meta.env.VITE_STRIPE_BASE_URL;

function Checkout({ amount }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const orderstate = useSelector(state => state.placeOrderReducer)

  const { loading, success, error } = orderstate;

   // token handler
   const tokenHandler = (token) => {
    dispatch(placeOrder(token, amount))
   }

   const handleValidate = () => { 
    if(!localStorage.getItem('currentUser')) {
     history.push('/login')
    }
 }


  return (
    <div>
        {loading && (<Loading/>)}
        {success && (<Success success='Your Order Placed Successfully'/>)}
        {error && (<Error error='Something went wrong'/>)}

        <StripeCheckout
            token={tokenHandler}
            amount={amount * 100}
            shippingAddress
            currency='USD'
            stripeKey={baseStripeKey}
        >
            <button className='btn text-uppercase bg-black text-white' onClick={handleValidate}>PAY NOW</button>
        </StripeCheckout>
    </div>
  )
}

export default Checkout;