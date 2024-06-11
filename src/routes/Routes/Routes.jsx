import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
const Main = lazy(() => import('../../layout/Main/Main'));
const Home = lazy(() => import('../../pages/Home/Home'));
const Contact = lazy(() => import('../../pages/Contact/Contact'));
const ErrorPage = lazy(() => import('../../pages/ErrorPage/ErrorPage'));
const About = lazy(() => import('../../pages/About/About'));
const Shop = lazy(() => import('../../pages/Shop/Shop'));
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
            { path: '/sign-in', element: <Login /> },
            { path: '/sign-up', element: <Register /> },
        ].map((route) => ({
            ...route,
            element: (
                <Suspense fallback={<Loading />}>{route.element}</Suspense>
            ),
        })),
    },
]);
