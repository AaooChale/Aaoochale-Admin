import React from 'react'
import AllUsersCard from '../../partials/dashboard/AllUsersCard'
import Header from '../../partials/Header'
import Sidebar from '../../partials/Sidebar'

const AllUsers = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header/>
        <AllUsersCard/>
      </div>
    </div>
  )
}

export default AllUsers
