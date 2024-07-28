import React from 'react';
import useLoggedInUser from '../../hooks/useLoggedInUser';
import useAdmin from '../../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const AdminRoutes = ({ children }) => {
    const [users, isLoading] = useLoggedInUser();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (isLoading || isAdminLoading) {
        return <Loading />;
    }

    if (users && isAdmin) {
        return children;
    }
    return (
        <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>
    );
};

export default AdminRoutes;
