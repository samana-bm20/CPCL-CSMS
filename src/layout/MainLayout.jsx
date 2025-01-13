import React from 'react'
import Header from '../components/basic/Header'
import Navbar from '../components/basic/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-dvh'>
      <div className='w-full'>
        <Header />
        <Navbar />
      </div>
      <Outlet />
    </div>
  )
}

export default MainLayout