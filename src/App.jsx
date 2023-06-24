import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import TeamManagement from "./pages/TeamManagement";
import AllUsers from "./pages/allusers/AllUsers";
import RideBooked from "./pages/ridebooked/RideBooked";
import RideShared from "./pages/rideshared/RideShared";
import Rating from "./pages/rating/Rating";
import AllReport from "./pages/allreport/AllReport";
import Login from "./pages/login/Login";
import Notification from "./pages/notification/Notification";
import VehicleManagement from "./pages/vehiclemanagement/VehicleManagement";
import ShowModal from "./pages/showmodal/ShowModal";
import VehicleList from "./pages/vehiclelist/VehicleList";
import UsersAccountVerification from "./pages/usersaccountverification/UsersAccountVerification";
import AllTeam from "./pages/allteam/AllTeam";
import AddBrandName from "./pages/addbrand/AddBrandName";
import AddModalName from "./pages/addmodal/AddModalName";
import PravacyPolicy from "./pages/pravacy/PravacyPolicy";
import TermCondition from "./pages/termcondition/TermCondition";
import SendNotification from "./pages/sendnotification/SendNotification";
import AppSeo from "./pages/appseo/AppSeo";
import SendNotificationList from "./pages/sendnotificationlist/SendNotificationList";
import TotalTurnOver from "./pages/totalturnover/TotalTurnOver";


function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teamanagement" element={<TeamManagement />} />
        <Route path="/teamanagement" element={<TeamManagement />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/ridebooked" element={<RideBooked />} />
        <Route path="/rideshared" element={<RideShared />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/allreport" element={<AllReport />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/vehiclemanagement" element={<VehicleManagement />} />
        <Route path="/showmodal" element={<ShowModal />} />
        <Route path="/vehiclelist" element={<VehicleList />} />
        <Route
          path="/usersaccountverification"
          element={<UsersAccountVerification />}
        />
        <Route path="/allteam" element={<AllTeam />} />
        <Route path="/addbrand" element={<AddBrandName />} />
        <Route path="/addmodal" element={<AddModalName />} />
        <Route path="/pravacy" element={<PravacyPolicy />} />
        <Route path="/termcondition" element={<TermCondition />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/sendnotificationlist" element={<SendNotificationList/>}/>
        <Route path="/sendnotification" element={<SendNotification/>}/>
        <Route path="/appseo" element={<AppSeo/>}/>
        <Route path="/totalturn" element={<TotalTurnOver/>}/>






        
      </Routes>
    </>
  );
}

export default App;
