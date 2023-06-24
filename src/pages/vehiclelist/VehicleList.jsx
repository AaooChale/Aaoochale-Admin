import React from 'react'
import VehicleListCard from '../../partials/dashboard/VehicleListCard'
import Header from '../../partials/Header'
import Sidebar from '../../partials/Sidebar'
const VehicleList = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <Sidebar />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      {/*  Site header */}
      <Header/>
      <VehicleListCard/>
      </div>
      </div>
  )
}

export default VehicleList
