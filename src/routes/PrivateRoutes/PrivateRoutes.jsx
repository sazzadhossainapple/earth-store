import React from 'react';
import useLoggedInUser from '../../hooks/useLoggedInUser';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const PrivateRoutes = ({ children }) => {
    const [users, isLoading] = useLoggedInUser();
    const location = useLocation();

    if (isLoading) {
        return <Loading />;
    }

    if (users) {
        return children;
    }

    return (
        <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoutes;
