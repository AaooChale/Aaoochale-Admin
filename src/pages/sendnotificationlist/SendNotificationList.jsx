import React from 'react'
import SendNotificationListCard from '../../partials/dashboard/SendNotificationListCard';
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

const SendNotificationList = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header/>
        <SendNotificationListCard/>
      </div>
    </div>
  )
}

export default SendNotificationList
