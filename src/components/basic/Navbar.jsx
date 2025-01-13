import { useState } from 'react'
import { ArrowRightRounded } from '@mui/icons-material'
import React from 'react'
import navItems from './NavRoutes'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [hoveredSubItem, setHoveredSubItem] = useState(null);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        if (path) {
            navigate(`/e-safeview/${path}`); // Add a base path if required
        }
    };

    return (
        <div className='hidden md:block w-full shadow-xl px-10'>
            <div className='flex justify-between h-full gap-2'>
                {navItems.map((item, index) => (
                    <div key={index}>
                        <div
                            className='flex items-center justify-center relative group hover:text-secondary cursor-pointer py-3 font-semibold'
                            onMouseEnter={() => setHoveredItem(item.title)}
                            onMouseLeave={() => { setHoveredItem(null); setHoveredSubItem(null) }}
                            onClick={() => handleNavigation(item.path)}>
                            {item.icon}
                            <p className='pl-1 font-inter text-sm text-primary group-hover:text-secondary leading-none'>
                                {item.title}
                            </p>

                            <div>
                                {item.dropdown && hoveredItem === item.title && (
                                    <div
                                        className="absolute left-0 top-full bg-white drop-shadow-md rounded-b-md w-[15rem] border-t-2 border-secondary px-2"
                                        onMouseEnter={() => setHoveredItem(item.title)}
                                        onMouseLeave={() => { setHoveredItem(null); setHoveredSubItem(null) }}>
                                        {item.dropdown.map((subItem, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-between items-center p-1 font-medium hover:font-semibold relative"
                                                onClick={() => {
                                                    handleNavigation(subItem.path)
                                                    setHoveredSubItem(subItem.title)
                                                }}
                                            >
                                                <p className="font-inter font-sm text-sm group-hover:text-contrast">
                                                    {subItem.title}
                                                </p>
                                                {subItem.children && (
                                                    <ArrowRightRounded fontSize='small' color='contrast' />
                                                )}

                                                {subItem.children && hoveredSubItem === subItem.title && (
                                                    <div className='absolute left-full -top-0.5 bg-white w-[15rem] drop-shadow-sm px-2 ml-1.5 border-t-2 border-secondary'>
                                                        {subItem.children.map((child, index) => (
                                                            <div
                                                                key={index}
                                                                className='p-1 font-medium hover:font-semibold'
                                                                onClick={() => {
                                                                    handleNavigation(child.path)
                                                                    setHoveredItem(null)
                                                                    setHoveredSubItem(null)
                                                                }}
                                                            >
                                                                <p className="font-inter font-sm text-sm group-hover:text-contrast bg-white">
                                                                    {child.title}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar
