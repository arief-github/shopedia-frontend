import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from './pages/home';
import ProductDetail from './pages/productDetail';
import CartPage from './pages/cartPage';
import { Register, Login } from './pages/authPages';

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
      </Router>
    </div>
  )
}

export default App
