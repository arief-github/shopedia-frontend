import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/home';
import ProductDetail from './pages/productDetail';

function App() {
  return (
    <div className="App">
      <Router>
         <Route exact path="/" component={Home} />
         <Route path="/product/:id" component={ProductDetail}/>   
      </Router>
    </div>
  )
}

export default App
