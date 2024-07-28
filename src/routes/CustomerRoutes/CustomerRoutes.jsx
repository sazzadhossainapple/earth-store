import React from 'react';
import useLoggedInUser from '../../hooks/useLoggedInUser';
import useCustomer from '../../hooks/useCustomer';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const CustomerRoutes = ({ children }) => {
    const [users, isLoading] = useLoggedInUser();
    const [isCustomer, isCustomerLoading] = useCustomer();
    const location = useLocation();

    if (isLoading || isCustomerLoading) {
        return <Loading />;
    }

    if (users && isCustomer) {
        return children;
    }
    return (
        <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>
    );
};

export default CustomerRoutes;
