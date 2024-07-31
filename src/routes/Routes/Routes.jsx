import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import DashboardLayout from '../../layout/Dashboard/DashboardLayout';
import Dashboard from '../../pages/Dashboard/Dashboard/Dashboard';
import User from '../../pages/Dashboard/DashboardUserSetting/User/User';
import Role from '../../pages/Dashboard/DashboardUserSetting/Role/Role';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import AdminRoutes from '../AdminRoutes/AdminRoutes';
import CustomerRoutes from '../CustomerRoutes/CustomerRoutes';
import CustomerProduct from '../../pages/Dashboard/CustomerProduct/CustomerProduct';
import DashboardProfile from '../../pages/Dashboard/DashboardProfile/DashboardProfile';
import ChangePassword from '../../pages/Dashboard/DashboardProfile/ChangePassword';
const Checkout = lazy(() => import('../../pages/Checkout/Checkout'));
const Cart = lazy(() => import('../../pages/Cart/Cart'));
const Main = lazy(() => import('../../layout/Main/Main'));
const Home = lazy(() => import('../../pages/Home/Home'));
const Contact = lazy(() => import('../../pages/Contact/Contact'));
const ErrorPage = lazy(() => import('../../pages/ErrorPage/ErrorPage'));
const About = lazy(() => import('../../pages/About/About'));
const Shop = lazy(() => import('../../pages/Shop/Shop'));
const ShopDetails = lazy(() => import('../../pages/ShopDetails/ShopDetails'));
const Login = lazy(() => import('../../pages/Login/Login'));
const Register = lazy(() => import('../../pages/Register/Register'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<Loading />}>
                <Main />
            </Suspense>
        ),
        errorElement: (
            <Suspense fallback={<Loading />}>
                <ErrorPage />
            </Suspense>
        ),
        children: [
            { path: '/', element: <Home /> },
            { path: '/contact', element: <Contact /> },
            { path: '/about', element: <About /> },
            { path: '/shop', element: <Shop /> },
            { path: '/cart', element: <Cart /> },
            { path: '/checkout', element: <Checkout /> },
            { path: '/sign-in', element: <Login /> },
            { path: '/sign-up', element: <Register /> },
            { path: '/product-details', element: <ShopDetails /> },

            // {
            //     path: '/product-details/:id',
            //     element: <ShopDetails />,
            //     loader: ({ params }) =>
            //         fetch(
            //             `${import.meta.env.VITE_API_KEY_URL}/api/v1/news/${params.id}`
            //         ),
            // },
        ].map((route) => ({
            ...route,
            element: (
                <Suspense fallback={<Loading />}>{route.element}</Suspense>
            ),
        })),
    },

    {
        path: '/dashboard',
        element: (
            <PrivateRoutes>
                <DashboardLayout />
            </PrivateRoutes>
        ),
        errorElement: <ErrorPage />,
        children: [
            { path: '/dashboard', element: <Dashboard /> },
            { path: '/dashboard/profile', element: <DashboardProfile /> },
            { path: '/dashboard/change-password', element: <ChangePassword /> },
            {
                path: '/dashboard/product',
                element: (
                    <CustomerRoutes>
                        <CustomerProduct />
                    </CustomerRoutes>
                ),
            },
            {
                path: '/dashboard/user',
                element: (
                    <AdminRoutes>
                        <User />
                    </AdminRoutes>
                ),
            },
            {
                path: '/dashboard/role',
                element: (
                    <AdminRoutes>
                        <Role />
                    </AdminRoutes>
                ),
            },
        ],
    },
]);
