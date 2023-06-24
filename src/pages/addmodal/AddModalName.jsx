import React from 'react'
import AddModalNameCard from '../../partials/dashboard/AddModalNameCard';
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

const AddModalName = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header/>
        <AddModalNameCard/>
      </div>
    </div>
  )
}

export default AddModalName
