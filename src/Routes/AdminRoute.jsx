import React from 'react';
import useAdmin from '../Hooks/useAdmin';
import useAuthHook from '../Hooks/useAuthHook';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const AdminRoute = ({children}) => {

    const {user, loading} = useAuthHook();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to={"/login"} state={{ from: location }}></Navigate>
};

export default AdminRoute;