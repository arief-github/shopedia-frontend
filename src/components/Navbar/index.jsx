import React, { useState } from 'react';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../action/userActions';

import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Navbar() {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen((prevState) => !prevState);

	const cartReducer = useSelector(state => state.cartReducer);

	const { cartItems } = cartReducer;

	const dispatch = useDispatch();

	const currentUser = JSON.parse(localStorage.getItem('currentUser'));

	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<Link to="/"><span className='navbar-brand'>Shopedia</span></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
						{
							currentUser ? (
								<Dropdown isOpen={dropdownOpen} toggle={toggle}>
									<DropdownToggle caret>{currentUser.name}</DropdownToggle>
									<DropdownMenu>
										{
											currentUser.isAdmin ? (<Link to="/admin"> <DropdownItem>Admin</DropdownItem> </Link>) : null
										}
										<Link to="/profile"><DropdownItem>Profile</DropdownItem></Link>
										<Link to="/orders"><DropdownItem>Order</DropdownItem></Link>
										<DropdownItem onClick={() => dispatch(logoutUser())}>Logout</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							) : (

								<li className="nav-item">
									<Link to="/login">Login</Link>
								</li>
							)
						}
						<li className="nav-item" style={{ textDecoration: 'none' }}>
							<Link to="/cart"> <FaShoppingCart style={{ color: 'white' }} /> <span style={{ textDecoration: 'none' }}>{cartItems.length}</span> </Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;