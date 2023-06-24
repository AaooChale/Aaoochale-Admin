import React from 'react'
import RatingCard from '../../partials/dashboard/RatingCard'
import Header from '../../partials/Header'
import Sidebar from '../../partials/Sidebar'


const Rating = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <Sidebar />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      {/*  Site header */}
      <Header/>
      <RatingCard/>
      </div>
      </div>
  )
}

export default Rating
