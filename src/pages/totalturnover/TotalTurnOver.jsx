import React from 'react'
import TotalTurnOverCard from '../../partials/dashboard/TotalTurnOverCard'
import Header from '../../partials/Header'
import Sidebar from '../../partials/Sidebar'
const TotalTurnOver = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <Sidebar />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      {/*  Site header */}
      <Header/>
      <TotalTurnOverCard/>
      </div>
      </div>
  )
}

export default TotalTurnOver
