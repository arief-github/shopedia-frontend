import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CreateProduct from './createProduct';
import EditProduct from './editProduct';
import OrdersList from './ordersList';
import ProductsList from './productsList';
import UsersList from './usersList';
import styles from './adminPage.module.css';

export default function AdminPage() {
  return (
    <div className={`${styles.AdminPage} row justify-content-center mt-2`}>
        <div className="col-md-10">
            <h2>Admin Panel</h2>
            <ul>
                <li>
                   <Link to="/admin/userslist">Users List</Link>
                </li>
                <li>
                  <Link to="/admin/productslist">Products List</Link>
                </li>
                <li>
                  <Link to="/admin/addnewproduct">Add New Product</Link>
                </li>
                <li>
                  <Link to="/admin/orderslist">Orders List</Link>
                </li>
            </ul>

            <Switch>
              <Route path='/admin/' component={UsersList} exact/>
              <Route path="/admin/userslist" component={UsersList}/>
              <Route path="/admin/orderslist" component={OrdersList} />
              <Route path="/admin/productslist" component={ProductsList} />
              <Route path="/admin/addnewproduct" component={CreateProduct} />
              <Route path="/admin/editproduct/:productid" component={EditProduct} />              
            </Switch>
        </div>
    </div>
  )
}
