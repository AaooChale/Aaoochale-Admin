import React from "react";
import SendNotificationCard from "../../partials/dashboard/SendNotificationCard";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

const SendNotification = () => {
  
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header/>
        <SendNotificationCard/>
      </div>
    </div>
  );
};

export default SendNotification;
