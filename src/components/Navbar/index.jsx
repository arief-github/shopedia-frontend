import React from 'react';
import './Navbar.css';
import  { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg">
		  <div className="container-fluid">
		    <a className="navbar-brand" href="#">Shopedia</a>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarNav">
		      <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
		        <li className="nav-item">
		          <a className="nav-link" href="#">Login</a>
		        </li>
		        <li className="nav-item">
		          <a className="nav-link disabled"> <FaShoppingCart/> </a>
		        </li>
		      </ul>
		    </div>
		  </div>
		</nav>
	)
}