import React from 'react'
import Navbar from '../components/dashboard/Navbar'
import MapContainer from '../components/map-core/MapContainer'

const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Navbar */}
      <div className="bg-white h-[4rem] md:h-[4.5rem] xxxl:h-[6rem] shadow-md sticky top-0 z-100">
        <Navbar />
      </div>

      {/* MapContainer */}
      <div className="flex-1 overflow-hidden">
        <MapContainer />
      </div>
    </div>
  )
}

export default Dashboard