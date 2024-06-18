import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './customCSS/aboutPage/about.css';
import './customCSS/contactPage/contact.css';
import './customCSS/homePage/home.css';
import './customCSS/loginPage/login.css';
import './customCSS/cartPage/cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
