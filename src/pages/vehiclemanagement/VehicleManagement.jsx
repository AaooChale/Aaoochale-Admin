import React from "react";
import { NavLink } from "react-router-dom";
import VehicleManagementCard from "../../partials/dashboard/VehicleManagementCard";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import SingleButton from "../../singlebutton/SingleButton";
import style from "./style.css";

const VehicleManagement = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />
        <div
          style={{
            backgroundColor: "",
            height: "5vh",
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "",
              width: "80%",
              height: "5vh",
              padding: "2px 30px",
              gap: 10,
            }}
          >
            <NavLink to="/addbrand">
              <SingleButton
                btn="Add Brand"
                backgroundColor="#205CBE"
                color="white"
                fontSize="11px"
              />
            </NavLink>
          </div>
        </div>
        <VehicleManagementCard />
      </div>
    </div>
  );
};

export default VehicleManagement;
