import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../../action/orderActions';

const baseStripeKey = import.meta.env.VITE_STRIPE_BASE_URL;

export default function Checkout({ amount }) {

  const dispatch = useDispatch();

   // token handler
   const tokenHandler = (token) => {
    dispatch(placeOrder(token, amount))
   }

  return (
    <div>
        <StripeCheckout
            token={tokenHandler}
            amount={amount * 100}
            shippingAddress
            currency='USD'
            stripeKey={baseStripeKey}
        >
            <button className='btn text-uppercase'>PAY NOW</button>
        </StripeCheckout>
    </div>
  )
}
