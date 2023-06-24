import React, { useState } from "react";

import UsersAccountVerificationCard from "../../partials/dashboard/UserAccountVerificationCard";
import UsersAccountVerificationCard1 from "../../partials/dashboard/UserAccountVerificationCard1";

import SingleButton from "../../singlebutton/SingleButton";

import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
const UsersAccountVerification = () => {
  const [open, setOpen] = useState(0);   

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
            height: "8vh",
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "",
              width: "20%",
              height: "8vh",
              padding: "12px 30px",
              gap: 10,
            }}
          >
            <SingleButton
              btn="Approved"
              height="5vh"
              width="60%"
              fontSize="12px"
              backgroundColor="#205CBE"
              color="white"
              onClick={() => setOpen(0)}
              value={open}
            />
          </div>
          <div
            style={{
              backgroundColor: "",
              width: "20%",
              height: "8vh",
              padding: "12px 30px",
              gap: 10,
            }}
          >
            <SingleButton
              btn="Reject"
              height="5vh"
              width="55%"
              backgroundColor="#205CBE"
              color="white"
              fontSize="12px"
              onClick={() => setOpen(1)}
              value={open}
            />
          </div>
        </div>
        {open == 0 && <UsersAccountVerificationCard />}
        {open == 1 && <UsersAccountVerificationCard1 />}
      </div>
    </div>
  );
};

export default UsersAccountVerification;
