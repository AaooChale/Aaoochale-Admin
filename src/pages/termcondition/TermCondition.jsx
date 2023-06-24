import React from 'react'
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import TermConditionCard from "../../partials/dashboard/TermConditionCard"
const TermCondition = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <Sidebar />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      {/*  Site header */}
      <Header/>
      <TermConditionCard/>
      
    </div>
    
  </div>
  )
}

export default TermCondition
