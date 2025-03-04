/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import routesConfig from './RoutesConfig';

//main components
const MainLayout = React.lazy(() => import('../layout/MainLayout'));
const Login = React.lazy(() => import('../pages/Login'));

const isAuthenticated = false;

const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/e-safeview" replace />;
};

const childRoutes = routesConfig.map((route) => ({
    path: route.path,
    element: (
        <ProtectedRoute
            element={
                <Suspense fallback={<div className='p-5'><CircularProgress color="primary"/></div>}>
                    {React.createElement(route.component)}
                </Suspense>
            }
        />
    ),
}));

const router = createBrowserRouter([
    {
        path: '/e-safeview',
        element: (
            <Suspense fallback={<div><CircularProgress color='primary' /></div>}>
                {isAuthenticated ? <MainLayout /> : <Login />}
            </Suspense>
        ),
        children: childRoutes,
    },
    {
        path: '*', 
        element: <Navigate to="/e-safeview" replace />,
    },
]);

const AppRoutes = () => {
    return <RouterProvider router={router} />;
};

export default AppRoutes;
