import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import { Scrollbars } from "react-custom-scrollbars";
import Excel from "../../pages/excel/Excel";
import { Base_Url } from "../../Config/config";


function RideSharedCard() {
  const [rideShared, setRideShared] = useState([]);
  const [excel, setExcel] = useState([]);

  const fileName = "mysamplefile";
  useEffect(() => {
    let data = [];

    axios
      .get(Base_Url + "admin/AllCreatedRides")
      .then((res) => {
        if (res.data.status == true) {
          for (let index = 0; index < res.data.ride.length; index++) {
            const element = res.data.ride[index];
            const value = {
              Name: element.name,
              Date: moment(element.tripDate).format("DD/MM/YYYY"),
              PickUp: element.startLocation,
              Drop: element.endLocation,
              Route: element.select_route,
              Passenger: element.passengerCount,
            };
            data.push(value);
          }
          setRideShared(res.data.ride);
          setExcel(data);

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
    <Excel apiData={excel} fileName={fileName} />
  </div>
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">RideShared</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <Scrollbars style={{ width: "100%", height: "85vh" }}>
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                <tr>
                  <th className="p-2">
                    <div className="font-semibold text-left">Name</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Email</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Mobile</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Gender</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Date</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">PickUp</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Drop</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Route</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-right">Passenger</div>
                  </th>
               
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm divide-y divide-slate-100">
                {rideShared.map((customer) => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            {customer.profilePicture != "" ? (
                              <img
                                src={customer.profilePicture}
                                style={{
                                  borderRadius: 50,
                                  height: 40,
                                  width: 45,
                                }}
                              />
                            ) : (
                              <img
                                src="profile (1).png"
                                style={{
                                  height: 40,
                                  width: 45,
                                  borderRadius: "3px",
                                }}
                              />
                            )}
                          </div>
                          <div className="font-sm text-slate-800" style={{fontSize:"12px"}}>
                            {customer.name}
                          </div>
                        </div>
                      </td>
                      <td className="p-1 whitespace-nowrap">
                      <div className="text-left" style={{fontSize:"12px"}}>
                       <p>gauravjoshi897@gmail</p>
                      </div>
                    </td>
                    <td className="p-1 whitespace-nowrap">
                    <div className="text-left" style={{fontSize:"12px"}}>
                      <p>91181416726</p>
                    </div>
                  </td>
                  <td className="p-1 whitespace-nowrap">
                  <div className="text-center" style={{fontSize:"12px"}}>
                   <p>Male</p>
                  </div>
                </td>
                      <td className="p-1 whitespace-nowrap">
                        <div className="text-left" style={{fontSize:"12px"}}>
                          {moment(customer.tripDate).format("DD/MM/YYYY")}
                        </div>
                      </td>
                      <td className="p-1 whitespace-nowrap">
                        <div className="text-left font-sm text-black-500" style={{fontSize:"12px"}}>
                          {customer.startLocation}
                        </div>
                      </td>
                      <td className="p-1 whitespace-nowrap">
                        <div className="text-left font-sm text-black-500" style={{fontSize:"12px"}}>
                        {customer.endLocation.length < 100 ? (
                          <p>{customer.endLocation.slice(0, 10)}</p>
                        ) : (
                          <p>{customer.endLocation}</p>
                        )}
                         
                        </div>
                      </td>
                      <td className="p-1 whitespace-nowrap">
                        <div className="text-left font-sm text-black-500" style={{fontSize:"12px"}}>
                          {customer.select_route.length < 100 ? (
                            <p>{customer.select_route.slice(0, 15)}</p>
                          ) : (
                            <p>{customer.select_route}</p>
                          )}
                        </div>
                      </td>
                      <td className="p-1 whitespace-nowrap">
                        <div className="text-sm text-center" style={{fontSize:"12px"}}>
                          {customer.passengerCount}
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
}

export default RideSharedCard;
