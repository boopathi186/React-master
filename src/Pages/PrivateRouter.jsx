import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const token = !!sessionStorage.getItem('token')
    return token ? <Outlet/> : <Navigate to="/login" />;
};

export const PrivateRoutes = () => {
    const token = !!sessionStorage.getItem('token')
    return !token ?<Outlet/> : <Navigate to="/dashboard" />;  
}

export default PrivateRoute;
