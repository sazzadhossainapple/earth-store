import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './customCSS/aboutPage/about.css';
import './customCSS/contactPage/contact.css';
import './customCSS/homePage/home.css';
import './customCSS/loginPage/login.css';
import './customCSS/cartPage/cart.css';
import './customCSS/shopDetailsPage/shopDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from './context/cartContext/CartContext.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CartContext>
            <App />
            <Toaster />
        </CartContext>
    </React.StrictMode>
);
