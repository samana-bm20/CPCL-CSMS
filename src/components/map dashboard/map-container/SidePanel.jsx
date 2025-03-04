import React from 'react'
import { FilterAltOutlined, LayersOutlined, AssessmentOutlined, SettingsOutlined } from '@mui/icons-material'

const SidePanel = () => {
    const listItems = [
        {
            sno: 1,
            name: 'Filter',
            icon: <FilterAltOutlined color='secondary' />
        },
        {
            sno: 2,
            name: 'Layers',
            icon: <LayersOutlined color='secondary' />
        },
        {
            sno: 3,
            name: 'Reports',
            icon: <AssessmentOutlined color='secondary' />
        },
        {
            sno: 4,
            name: 'Settings',
            icon: <SettingsOutlined color='secondary' />
        },
    ]
    return (
        <div className="h-full md:h-auto w-full md:w-[5.5rem] flex flex-row md:flex-col mt-0 md:mt-2 items-start md:items-center justify-evenly md:justify-start">
            {listItems.map((item) => (
                <div key={item.sno} className="flex flex-col items-center justify-center mx-2 md:my-2 md:rounded-lg md:shadow-customPink h-[3.2rem] w-[3.2rem] bg-white">
                    {item.icon}
                    <p className="text-[0.7rem] font-inter font-medium text-contrast">{item.name}</p>
                </div>
            ))}
        </div>

    )
}

export default SidePanel