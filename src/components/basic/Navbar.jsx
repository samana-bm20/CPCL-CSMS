import { useState } from 'react'
import { ArrowDownwardRounded, ArrowDropDownRounded, ArrowDropUp, ArrowDropUpRounded, ArrowRightRounded, FmdBadRounded, NotificationsRounded, PersonRounded } from '@mui/icons-material'
import React from 'react'
import navItems from './NavRoutes'
import { useNavigate } from 'react-router-dom'
import { Divider } from '@mui/material'

const Navbar = ({ openMenu, setOpenMenu }) => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [hoveredSubItem, setHoveredSubItem] = useState(null);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        if (path) {
            navigate(`/e-safeview/${path}`);
        }
    };

    return (
        <>
            <div className='hidden md:block w-full shadow-xl px-10'>
                <div className='flex items-center justify-between h-full gap-2'>
                    {navItems.map((item, index) => (
                        <div key={index}>
                            <div
                                className='flex items-center justify-center relative group hover:text-secondary cursor-pointer py-3 font-semibold'
                                onMouseEnter={() => { setHoveredItem(item.title); setHoveredSubItem(null) }}
                                onMouseLeave={() => { setHoveredItem(null); setHoveredSubItem(null) }}
                                onClick={() => handleNavigation(item.path)}>
                                <item.icon color='primary' fontSize='small' className='group-hover:text-secondary' />
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
                                                        if (!subItem.children) {
                                                            setHoveredItem(null)
                                                        }
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

            {/* Mobile Navbar */}
            {openMenu && (
                <>
                    <div
                        className='h-screen w-screen fixed top-0 left-0 bg-contrast opacity-30 z-9'
                        onClick={() => {
                            console.log("Backdrop clicked");
                            setOpenMenu(false);
                        }}>

                    </div>
                    <div
                        className={`h-dvh w-3/4 fixed top-0 left-0 bg-white shadow-xl z-10 
                            transform transition-transform duration-500 ease-in-out 
                            ${openMenu ? "translate-x-0" : "translate-x-full"}`}
                    >
                        <div className='h-fit flex flex-col items-center p-5'>
                            <p className='text-3xl font-poppins font-bold text-primary'>
                                e-SafeView
                            </p>
                            <p className='text-[0.6rem] font-inter text-center font-semibold text-secondary'>
                                Centralized Safety Monitoring System
                            </p>
                        </div>

                        <div className='h-fit'>
                            <Divider />
                        </div>
                        <div className='h-full overflow-y-auto scrollbar-hide'>
                            <div className='p-5'>
                                {navItems.map((item, index) => (
                                    <div key={index} className='py-3'>
                                        <div
                                            className='flex justify-between'
                                            onClick={() => {
                                                if (item.path) {
                                                    handleNavigation(item.path);
                                                    setHoveredItem(null);
                                                    setHoveredSubItem(null);
                                                    console.log('nav item clicked');
                                                    setOpenMenu(false);
                                                }
                                                setHoveredItem(hoveredItem === item.title ? null : item.title);
                                                setHoveredSubItem(null)
                                            }}
                                        >
                                            <div className='flex items-center'>
                                                <item.icon color='contrast' fontSize='small' />
                                                <p className="font-inter font-sm font-semibold text-sm text-contrast ml-2">
                                                    {item.title}
                                                </p>
                                            </div>
                                            {item.dropdown && (
                                                <>
                                                    {hoveredItem === item.title ? (
                                                        <ArrowDropUpRounded fontSize='small' color='contrast' />
                                                    ) : (
                                                        <ArrowDropDownRounded fontSize='small' color='contrast' />
                                                    )}
                                                </>
                                            )}
                                        </div>

                                        {item.dropdown && hoveredItem === item.title && (
                                            <div className='pt-3'>
                                                {item.dropdown.map((subItem, index) => (
                                                    <div key={index} className='pl-7 py-3'
                                                        onClick={() => {
                                                            if (subItem.path) {
                                                                handleNavigation(subItem.path);
                                                                setHoveredItem(null);
                                                                setHoveredSubItem(null);
                                                                console.log('sub item clicked');
                                                                setOpenMenu(false);
                                                            }
                                                            setHoveredSubItem(hoveredSubItem === subItem.title ? null : subItem.title);
                                                        }}
                                                    >
                                                        <div className='flex justify-between'>
                                                            <p className="font-inter font-medium font-sm text-sm leading-tight text-contrast">
                                                                {subItem.title}
                                                            </p>
                                                            {subItem.children && (
                                                                <>
                                                                    {hoveredSubItem === subItem.title ? (
                                                                        <ArrowDropUpRounded fontSize='small' color='contrast' />
                                                                    ) : (
                                                                        <ArrowDropDownRounded fontSize='small' color='contrast' />
                                                                    )}
                                                                </>
                                                            )}
                                                        </div>

                                                        {subItem.children && hoveredSubItem === subItem.title && (
                                                            <div className='pt-3'>
                                                                {subItem.children.map((child, index) => (
                                                                    <div key={index} className='p-3'
                                                                        onClick={() => {
                                                                            handleNavigation(child.path);
                                                                            console.log('child clicked');
                                                                            setOpenMenu(false);
                                                                            setHoveredItem(null);
                                                                            setHoveredSubItem(null);
                                                                        }}>
                                                                        <p className="font-inter font-sm text-sm leading-tight text-contrast">
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
                                ))}
                            </div>

                            <Divider />

                            <div className='p-5'>
                                <div className=''>
                                    <div className='flex py-3 items-center'>
                                        <FmdBadRounded color='contrast' />
                                        <p className="font-inter font-sm text-sm text-contrast ml-2">
                                            Alerts
                                        </p>
                                    </div>
                                    <div className='flex py-3 items-center'>
                                        <NotificationsRounded color='contrast' />
                                        <p className="font-inter font-sm text-sm text-contrast ml-2">
                                            Notifications
                                        </p>
                                    </div>
                                    <div className='flex py-3 items-center'>
                                        <PersonRounded color='contrast' />
                                        <p className="font-inter font-sm text-sm text-contrast ml-2">
                                            Account
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Navbar
