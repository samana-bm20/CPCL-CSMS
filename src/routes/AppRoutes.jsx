/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

//components
const MainLayout = React.lazy(() => import('../layout/MainLayout'));
const Login = React.lazy(() => import('../pages/Login'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const HotWork = React.lazy(() => import('../components/work permit/request/HotWork'));
const ColdWork = React.lazy(() => import('../components/work permit/request/ColdWork'));
const HeightWork = React.lazy(() => import('../components/work permit/request/HeightWork'));
const IssuePermit = React.lazy(() => import('../components/work permit/issue/IssuePermit'));
const WithdrawPermit = React.lazy(() => import('../components/work permit/issue/WithdrawPermit'));
const RequestClearance = React.lazy(() => import('../components/work permit/RequestClearance'));
const IssueClearance = React.lazy(() => import('../components/work permit/IssueClearance'));
const RequestClosure = React.lazy(() => import('../components/work permit/RequestClosure'));
const IssueClosure = React.lazy(() => import('../components/work permit/IssueClosure'));

const isAuthenticated = true;

const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/e-safeview/" replace />;
};

const router = createBrowserRouter([
    {
        path: '/e-safeview',
        element: (
            <Suspense fallback={<div><CircularProgress color='primary' /></div>}>
                {isAuthenticated ? <MainLayout /> : <Login />}
            </Suspense>
        ),
        children: [
            {
                path: 'dashboard',
                element: (
                    <Suspense fallback={<div><CircularProgress color='primary' /></div>}>
                        <ProtectedRoute element={<Dashboard />} />
                    </Suspense>
                ),
            },
            {
                path: 'requestColdWork',
                element: (
                    <Suspense fallback={<div><CircularProgress color='primary' /></div>}>
                        <ProtectedRoute element={<ColdWork />} />
                    </Suspense>
                ),
            },
            {
                path: 'requestHotWork',
                element: (
                    <Suspense fallback={<div><CircularProgress color='primary' /></div>}>
                        <ProtectedRoute element={<HotWork />} />
                    </Suspense>
                ),
            },
            {
                path: 'requestHeightWork',
                element: (
                    <Suspense fallback={<div><CircularProgress color='primary' /></div>}>
                        <ProtectedRoute element={<HeightWork />} />
                    </Suspense>
                ),
            },
            {
                path: 'requestHeightWork',
                element: (
                    <Suspense fallback={<div><CircularProgress color='primary' /></div>}>
                        <ProtectedRoute element={<HeightWork />} />
                    </Suspense>
                ),
            },
            {
                path: 'issuePermit',
                element: (
                    <Suspense fallback={<div><CircularProgress color='primary' /></div>}>
                        <ProtectedRoute element={<IssuePermit />} />
                    </Suspense>
                ),
            },
            {
                path: 'withdrawPermit',
                element: (
                    <Suspense fallback={<div><CircularProgress color='primary' /></div>}>
                        <ProtectedRoute element={<WithdrawPermit />} />
                    </Suspense>
                ),
            },
            {
                path: 'requestClearance',
                element: (
                    <Suspense fallback={<div><CircularProgress color='primary' /></div>}>
                        <ProtectedRoute element={<RequestClearance />} />
                    </Suspense>
                ),
            },
            {
                path: 'issueClearance',
                element: (
                    <Suspense fallback={<div><CircularProgress color='primary' /></div>}>
                        <ProtectedRoute element={<IssueClearance />} />
                    </Suspense>
                ),
            },
            {
                path: 'requestClosure',
                element: (
                    <Suspense fallback={<div><CircularProgress color='primary' /></div>}>
                        <ProtectedRoute element={<RequestClosure />} />
                    </Suspense>
                ),
            },
            {
                path: 'issueClosure',
                element: (
                    <Suspense fallback={<div><CircularProgress color='primary' /></div>}>
                        <ProtectedRoute element={<IssueClosure />} />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: '*', // Catch-all route for invalid paths
        element: <Navigate to="/e-safeview/" replace />,
    },
]);

const AppRoutes = () => {
    return <RouterProvider router={router} />;
};

export default AppRoutes;
