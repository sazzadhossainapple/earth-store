import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main/Main';
import Home from '../../pages/Home/Home';
import Contact from '../../pages/Contact/Contact';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import About from '../../pages/About/About';
import Shop from '../../pages/Shop/Shop';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/contact', element: <Contact /> },
            { path: '/about', element: <About /> },
            { path: '/shop', element: <Shop /> },
            { path: '/sign-in', element: <Login /> },
            { path: '/sign-up', element: <Register /> },
        ],
    },
]);
