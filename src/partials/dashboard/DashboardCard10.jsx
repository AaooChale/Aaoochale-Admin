import axios from "axios";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { Scrollbars } from "react-custom-scrollbars";
import { Base_Url } from "../../Config/config";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

function DashboardCard10() {
  const [showData, setShowData] = useState("");
  const [latestRide, setlatestRide] = useState([]);
  useEffect(() => {
    axios
      .get(Base_Url + "admin/DashbaordReport")
      .then((res) => {
        console.log(res.data, "hereeeeeeeeeeeeeeeee");
        if (res.data.status == true) {
          setShowData(res.data.datas);
          const slicedArray = res.data.datas.latestride.slice(0, 5);
          setlatestRide(slicedArray);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const slicedArray = array.slice(0, n);

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Latest Rides Booked</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <Scrollbars style={{ width: 570, height: 320 }}>
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Name</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Date</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Time</div>
                </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">PickUp</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Drop</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}

              <tbody className="text-sm divide-y divide-slate-100">
                {latestRide.map((customer) => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img
                              src={customer.user.profilePicture}
                              style={{
                                borderRadius: 50,
                                height: 40,
                                width: 45,
                              }}
                            />
                          </div>
                          <div className="font-medium text-slate-800" style={{fontSize:"12px"}}>
                            {customer.user.name}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left"  style={{fontSize:"12px"}}>
                          {moment(customer.bookingDate).format("DD/MM/YYYY")}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-black-500" style={{fontSize:"12px"}}>
                        {moment(customer.tripTime).format(" h:mm a")}
                      </div>
                    </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500"  style={{fontSize:"12px"}}>
                          {customer.startLocation}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-left"  style={{fontSize:"12px"}}>
                          {customer.endLocation}
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
      <div style={{backgroundColor:"", height:"8vh", float:"right", paddingRight:"40px"}}>
      <NavLink to="/ridebooked"><Button style={{fontWeight:"bold", color:"skyblue", border:"2px solid skyblue"}}>View</Button></NavLink>
      </div>
    </div>
  );
}

export default DashboardCard10;
