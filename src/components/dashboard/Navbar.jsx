import React from 'react'
import logo from '../../assets/CPCL_Logo.png'
import { FmdBadRounded, NotificationsRounded, MenuOpenRounded } from '@mui/icons-material'
import { Avatar } from '@mui/material'

const Navbar = () => {
    return (
            <div className="flex items-center mb-6">
                <div className='px-2 md:px-6'>
                    <img
                        src={logo}
                        alt='CPCL'
                        className="w-14 xxxl:w-16"
                    />
                </div>
                <div className='flex justify-between bg-[#2E3192] pl-8 pr-2 md:pl-10 md:pr-6 h-[4rem] md:h-[4.5rem] xxxl:h-[6rem] w-full rounded-bl-[80px] border-l-4 border-l-[#EC1F24] shadow-xl'>
                    <div className="flex flex-col justify-center">
                        <p className='text-xl lg:text-4xl font-poppins text-white font-bold '>
                            e-SafeView
                        </p>
                        <p className='hidden md:flex text-xs xxxl:text-lg font-poppins font-bold xl:tracking-wide text-[#ff777c]'>
                            CENTRALIZED SAFETY MONITORING SYSTEM
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div className='px-[0.2rem] md:px-2'>
                        <FmdBadRounded sx={{color: 'white'}}/>
                        </div>
                        <div className='px-[0.2rem] md:px-2'>
                        <NotificationsRounded sx={{color: 'white'}}/>
                        </div>
                        <div className='pl-[0.2rem] md:pl-2'>
                            <Avatar className='font-semibold' sx={{bgcolor: 'white', color: '#EC1F24', width: '25px', height: '25px', fontSize: '12px'}}>KD</Avatar>
                        </div>
                        {/* <div className='flex md:hidden px-1 md:px-2'>
                            <MenuOpenRounded sx={{color: 'white'}}/>
                        </div> */}
                    </div>
                </div>
            </div>
    )
}

export default Navbar