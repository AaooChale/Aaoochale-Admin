import React from 'react'
import ShowModalCard from '../../partials/dashboard/ShowModalCard'

import Header from '../../partials/Header'
import Sidebar from '../../partials/Sidebar'
const ShowModal = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <Sidebar />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      {/*  Site header */}
      <Header/>
      <ShowModalCard/>
      </div>
      </div>
  )
}

export default ShowModal
