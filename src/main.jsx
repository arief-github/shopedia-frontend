import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={ store }>
        <App />    
    </Provider>
)
