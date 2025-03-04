import React from 'react'
import Header from '../components/basic/Header'
import Navbar from '../components/basic/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-dvh'>
      <div className='w-full h-fit z-10'>
        <Header />
        <Navbar />
      </div>
      <div className='z-9 h-calc-dvh-4rem md:h-calc-dvh-7.5rem overflow-auto scrollbar-hide bg-secondary-bg'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout