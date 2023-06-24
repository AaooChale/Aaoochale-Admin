import React from 'react'
import AddBrandNameCard from '../../partials/dashboard/AddBrandNameCard';
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

const AddBrandName = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header/>
        <AddBrandNameCard/>
      </div>
    </div>
  )
}

export default AddBrandName
