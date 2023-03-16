import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from './pages/home';
import ProductDetail from './pages/productDetail';
import CartPage from './pages/cartPage';
import { Register, Login } from './pages/authPages';
import OrderPage from './pages/orderPage';
import OrderDetail from './pages/orderDetail';

function App() {
  return (
    <div className="App">
      <Router>
         <Navbar />
         <Route exact path="/" component={Home} />
         <Route path="/product/:id" component={ProductDetail}/>
         <Route path="/cart" component={CartPage} />   
         <Route path="/register" component={Register} />
         <Route path="/login" component={Login} />
         <Route path="/orders" component={OrderPage} />
         <Route path="/orderinfo/:orderid" component={OrderDetail}/>
      </Router>
    </div>
  )
}

export default App
