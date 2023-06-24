import React from 'react'
import RideSharedCard from '../../partials/dashboard/RideSharedCard'
import Header from '../../partials/Header'
import Sidebar from '../../partials/Sidebar'

const RideShared = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <Sidebar />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      {/*  Site header */}
      <Header/>
      <RideSharedCard/>
      </div>
      </div>
  )
}

export default RideShared
