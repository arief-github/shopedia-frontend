import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from './pages/home';
import ProductDetail from './pages/productDetail';
import CartPage from './pages/cartPage';

function App() {
  return (
    <div className="App">
      <Router>
         <Navbar />
         <Route exact path="/" component={Home} />
         <Route path="/product/:id" component={ProductDetail}/>
         <Route path="/cart" component={CartPage} />   
      </Router>
    </div>
  )
}

export default App
