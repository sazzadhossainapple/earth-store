import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import DashboardLayout from "../../layout/Dashboard/DashboardLayout";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import User from "../../pages/Dashboard/DashboardUserSetting/User/User";
import Role from "../../pages/Dashboard/DashboardUserSetting/Role/Role";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import CustomerRoutes from "../CustomerRoutes/CustomerRoutes";
import CustomerProduct from "../../pages/Dashboard/CustomerProduct/CustomerProduct";
import DashboardProfile from "../../pages/Dashboard/DashboardProfile/DashboardProfile";
import ChangePassword from "../../pages/Dashboard/DashboardProfile/ChangePassword";
import Checkout from "../../pages/Checkout/Checkout";
import Cart from "../../pages/Cart/Cart";
const Main = lazy(() => import("../../layout/Main/Main"));
import Home from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import About from "../../pages/About/About";
import Shop from "../../pages/Shop/Shop";
import ShopDetails from "../../pages/ShopDetails/ShopDetails";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
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
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/sign-in", element: <Login /> },
      { path: "/sign-up", element: <Register /> },
      { path: "/product-details", element: <ShopDetails /> },

      // {
      //     path: '/product-details/:id',
      //     element: <ShopDetails />,
      //     loader: ({ params }) =>
      //         fetch(
      //             `${import.meta.env.VITE_API_KEY_URL}/api/v1/news/${params.id}`
      //         ),
      // },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/profile", element: <DashboardProfile /> },
      { path: "/dashboard/change-password", element: <ChangePassword /> },
      {
        path: "/dashboard/product",
        element: (
          <CustomerRoutes>
            <CustomerProduct />
          </CustomerRoutes>
        ),
      },
      {
        path: "/dashboard/user",
        element: (
          <AdminRoutes>
            <User />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/role",
        element: (
          <AdminRoutes>
            <Role />
          </AdminRoutes>
        ),
      },
    ],
  },
]);
