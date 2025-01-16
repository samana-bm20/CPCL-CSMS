import React from 'react';

//components
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
const MapContainer = React.lazy(() => import('../components/map dashboard/map-core/MapContainer'));

//routes
const routesConfig = [
    { path: 'dashboard', component: Dashboard },
    { path: 'requestColdWork', component: ColdWork },
    { path: 'requestHotWork', component: HotWork },
    { path: 'requestHeightWork', component: HeightWork },
    { path: 'issuePermit', component: IssuePermit },
    { path: 'withdrawPermit', component: WithdrawPermit },
    { path: 'requestClearance', component: RequestClearance },
    { path: 'issueClearance', component: IssueClearance },
    { path: 'requestClosure', component: RequestClosure },
    { path: 'issueClosure', component: IssueClosure },
    { path: 'map', component: MapContainer },
];
export default routesConfig;