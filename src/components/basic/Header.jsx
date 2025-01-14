import React, { useState } from 'react'
import logo from '../../assets/CPCL_Logo.png'
import { FmdBadRounded, NotificationsRounded, MenuOpenRounded } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import Navbar from './Navbar'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
            <div className="flex items-center">
                <div className='px-4 md:pl-10 md:pr-8'>
                    <img
                        src={logo}
                        alt='CPCL'
                        className="w-14 xxxl:w-16"
                    />
                </div>
                <div className='flex justify-between bg-primary pl-6 pr-2 md:px-10 h-[4rem] md:h-[4.5rem] xxxl:h-[6rem] w-full rounded-bl-[50px] border-l-4 border-l-secondary shadow-xl'>
                    <div className="flex flex-col justify-center">
                        <p className='text-xl lg:text-4xl font-poppins text-white font-bold '>
                            e-SafeView
                        </p>
                        <p className='hidden md:flex text-xs xxxl:text-lg font-inter font-medium xl:tracking-widest text-[#ff777c]'>
                        Centralized Safety Monitoring System
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div className='hidden md:flex px-[0.2rem] md:px-2'>
                        <FmdBadRounded fontSize='large' sx={{color: 'white'}}/>
                        </div>
                        <div className='hidden md:flex px-[0.2rem] md:px-2'>
                        <NotificationsRounded fontSize='large' sx={{color: 'white'}}/>
                        </div>
                        <div className='hidden md:flex pl-[0.2rem] md:pl-2'>
                            <Avatar className='font-semibold' sx={{bgcolor: 'white', color: '#EC1F24'}}>KD</Avatar> 
                            {/* width: '25px', height: '25px', fontSize: '12px' */}
                        </div>
                        <div 
                        className='flex md:hidden px-1 md:px-2'
                        onClick={() => setOpenMenu(true)}>
                            <MenuOpenRounded color='secondary'/>
                        </div>
                    </div>
                </div>
                <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </div>
    )
}

export default Header