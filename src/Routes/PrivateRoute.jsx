import React from 'react';
import useAuthHook from '../Hooks/useAuthHook';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuthHook();
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }
    return <Navigate to={"/login"} state={{ from: location }}></Navigate>
};

export default PrivateRoute;