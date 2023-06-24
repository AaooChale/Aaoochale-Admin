import React from 'react'
import AppSeoCard from '../../partials/dashboard/AppSeoCard';
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

const AppSeo = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <Sidebar />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      {/*  Site header */}
      <Header/>
      <AppSeoCard/>
    </div>
  </div>
  )
}

export default AppSeo
