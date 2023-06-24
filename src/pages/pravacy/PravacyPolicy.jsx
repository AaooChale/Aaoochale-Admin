import React from 'react'
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import PravacyPolicyCard from "../../partials/dashboard/PravacyPolicyCard"
const PravacyPolicy = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header/>
        <PravacyPolicyCard/>
        
      </div>
      
    </div>
  )
}

export default PravacyPolicy
