import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleButton from "../../singlebutton/SingleButton";
import { Scrollbars } from "react-custom-scrollbars";
import { NavLink } from "react-router-dom";
import { Base_Url } from "../../Config/config";

const SendNotificationListCard = () => {
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    axios
      .get(
        Base_Url + "admin/broadcastMessages"
      )
      .then((res) => {
        if (res.data.status == true) {
          setNotification(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <div
        style={{
          height: "8vh",
          width: "15%",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
      <NavLink to="/sendnotification">
        <SingleButton btn="Send Notification" color="white" backgroundColor="#205CBE"/>
        </NavLink>
      </div>
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">BroadCast Message</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <Scrollbars style={{ width: "100%", height: "73vh" }}>
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                <tr>
                  <th className="p-2">
                    <div className="font-semibold text-left">S.No</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">
                      BroadCast Message
                    </div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm divide-y divide-slate-100">
                {notification.map((customer, index) => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-6 shrink-0 mr-2 sm:mr-3" style={{fontSize:"13px"}}>
                            {index + 1}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div
                          className="text-left font-sm text-black-500"
                          style={{ fontSize: "13px" }}
                        >
                          {customer.message}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Scrollbars>
        </div>
      </div>
    </div>
  );
};

export default SendNotificationListCard;
