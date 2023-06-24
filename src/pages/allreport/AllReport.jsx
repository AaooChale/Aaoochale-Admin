import React from 'react'
import AllReportCard from '../../partials/dashboard/AllReportCard'
import Header from '../../partials/Header'
import Sidebar from '../../partials/Sidebar'
const AllReport = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <Sidebar />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      {/*  Site header */}
      <Header/>
      <AllReportCard/>
      </div>
      </div>
  )
}

export default AllReport
