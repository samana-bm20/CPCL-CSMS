import {
    HomeRounded, AssignmentRounded, CrisisAlertRounded, RemoveRoadRounded,
    WhatshotRounded, ExtensionRounded, MapRounded
} from "@mui/icons-material";

const navItems = [
    {
        icon: HomeRounded,
        title: 'Home',
        path: 'dashboard',
        dropdown: null
    },
    {
        icon: AssignmentRounded,
        title: "Work Permit",
        dropdown: [
            {
                title: "Request Permit",
                children: [
                    { title: "Cold Work", path: 'requestColdWork' },
                    { title: "Hot Work / Confined Space Entry", path: 'requestHotWork' },
                    { title: "Work at Height (Above 2 meters)", path: 'requestHeightWork' },
                    { title: "Radiography", path: 'requestRadiography' },
                    { title: "Vehicle Entry", path: 'requestVehicleEntry' },
                    { title: "Excavation", path: 'requestExcavation' },
                    { title: "Excavation Clearance", path: 'requestExcavationClearance' },
                    { title: "Electrical Isolation", path: 'requestElectricalIsolation' },
                    { title: "Electrical Energisation", path: 'requestElectricalEnergisation' },
                ],
            },
            {
                title: "Issue Permit",
                children: [
                    { title: "Issue Permit", path: 'issuePermit' },
                    { title: "Withdraw Permit (User)", path: 'withdrawPermit' },
                    { title: "Excavation Clearance Issue", path: 'issueExcavationClearance' },
                    { title: "Electrical Isolation / Energisation Pending", path: 'issueElectrical' },
                ]
            },
            { title: "Request Clearance", path: 'requestClearance' },
            { title: "Issue Clearance", path: 'issueClearance' },
            { title: "Request Closure", path: 'requestClosure' },
            { title: "Issue Closure", path: 'issueClosure' },
            {
                title: "Reports",
                children: [
                    { title: "Daily Reports" },
                    { title: "Weekly Reports" },
                    { title: "Monthly Reports" },
                    { title: "Annually Reports" },
                ]
            },
            { title: "Print Help" },
        ],
    },
    {
        icon: CrisisAlertRounded,
        title: 'Radiography',
        dropdown: null
    },
    {
        icon: RemoveRoadRounded,
        title: 'Road Blockage',
        dropdown: [
            { title: "Add Blockage" },
            { title: "Issue Blockage" },
            { title: "Remove Blockage" },
            { title: "Track Blockage" },
        ]
    },
    {
        icon: WhatshotRounded,
        title: 'Fire Water Network',
        dropdown: null
    },
    {
        icon: ExtensionRounded,
        title: 'Third Party Devices',
        dropdown: [
            { title: "Gas Detectors" },
            { title: "Manual Call Points (MCPs)" },
            { title: "Vehicle Tracking System (VTS)" },
        ]
    },
    {
        icon: MapRounded,
        title: 'Map Dashboard',
        dropdown: null
    },
]

// const navItems = [
//     {
//         icon: <HomeRounded color='primary' fontSize='small' className='group-hover:text-secondary' />,
//         title: 'Home',
//         path: 'dashboard',
//         dropdown: null
//     },
//     {
//         icon: <AssignmentRounded color='primary' fontSize='small' className='group-hover:text-secondary' />,
//         title: "Work Permit",
//         dropdown: [
//             {
//                 title: "Request Permit",
//                 children: [
//                     { title: "Cold Work", path: 'requestColdWork' },
//                     { title: "Hot Work / Confined Space Entry", path: 'requestHotWork' },
//                     { title: "Work at Height (Above 2 meters)", path: 'requestHeightWork' },
//                     { title: "Radiography", path: 'requestRadiography' },
//                     { title: "Vehicle Entry", path: 'requestVehicleEntry' },
//                     { title: "Excavation", path: 'requestExcavation' },
//                     { title: "Excavation Clearance", path: 'requestExcavationClearance' },
//                     { title: "Electrical Isolation", path: 'requestElectricalIsolation' },
//                     { title: "Electrical Energisation", path: 'requestElectricalEnergisation' },
//                 ],
//             },
//             {
//                 title: "Issue Permit",
//                 children: [
//                     { title: "Issue Permit", path: 'issuePermit' },
//                     { title: "Withdraw Permit (User)", path: 'withdrawPermit' },
//                     { title: "Excavation Clearance Issue", path: 'issueExcavationClearance' },
//                     { title: "Electrical Isolation / Energisation Pending", path: 'issueElectrical' },
//                 ]
//             },
//             { title: "Request Clearance", path: 'requestClearance' },
//             { title: "Issue Clearance", path: 'issueClearance' },
//             { title: "Request Closure", path: 'requestClosure' },
//             { title: "Issue Closure", path: 'issueClosure' },
//             {
//                 title: "Reports",
//                 children: [
//                     { title: "Daily Reports" },
//                     { title: "Weekly Reports" },
//                     { title: "Monthly Reports" },
//                     { title: "Annually Reports" },
//                 ]
//             },
//             { title: "Print Help" },
//         ],
//     },
//     {
//         icon: <CrisisAlertRounded color='primary' fontSize='small' className='group-hover:text-secondary' />,
//         title: 'Radiography',
//         dropdown: null
//     },
//     {
//         icon: <RemoveRoadRounded color='primary' fontSize='small' className='group-hover:text-secondary' />,
//         title: 'Road Blockage',
//         dropdown: [
//             { title: "Add Blockage" },
//             { title: "Issue Blockage" },
//             { title: "Remove Blockage" },
//             { title: "Track Blockage" },
//         ]
//     },
//     {
//         icon: <WhatshotRounded color='primary' fontSize='small' className='group-hover:text-secondary' />,
//         title: 'Fire Water Network',
//         dropdown: null
//     },
//     {
//         icon: <ExtensionRounded color='primary' fontSize='small' className='group-hover:text-secondary' />,
//         title: 'Third Party Devices',
//         dropdown: [
//             { title: "Gas Detectors" },
//             { title: "Manual Call Points (MCPs)" },
//             { title: "Vehicle Tracking System (VTS)" },
//         ]
//     },
//     {
//         icon: <MapRounded color='primary' fontSize='small' className='group-hover:text-secondary' />,
//         title: 'Map Dashboard',
//         dropdown: null
//     },
// ]

export default navItems;