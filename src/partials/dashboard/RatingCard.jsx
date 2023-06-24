import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import Excel from "../../pages/excel/Excel";
import { Base_Url } from "../../Config/config";

function DashboardCard07() {
  const [rating, setRating] = useState([]);
  const [excel, setExcel] = useState([]);
  const fileName = "mysamplefile";

  useEffect(() => {
    let data = [];
    
    axios
      .get(Base_Url + "admin/AllRating")
      .then((res) => {
        if (res.data.status == true) {
          if (res.data.status == true) {
            for (let index = 0; index < res.data.All_Data.length; index++) {
              const element = res.data.All_Data[index];
              const value = {
                GivenN: element.givenName,
                ReceiveN: element.driverName,
                Pickup: element.startaddress,
                Drop: element.endaddress,
                Date: moment(element.rideDate).format("DD/MM/YYYY"),
                Time: element.rideTime,
                Rating: element.startRating,
                Comment: element.message,
              };
              data.push(value);
            }
          }
          setRating(res.data.All_Data);
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
        <h2 className="font-semibold text-slate-800">All Rating</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">GivenName</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">ReceiveName</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">PickUp</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Drop</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Date</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Time</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Rating</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Comment</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {rating.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                          {customer.profile != "" ? (
                            <img
                              src={customer.profile}
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
                        <div
                          className="font-medium text-slate-800"
                          style={{ fontSize: "12px" }}
                        >
                          {customer.givenName}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                          {customer.driverProfile != "" ? (
                            <img
                              src={customer.driverProfile}
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
                        <div
                          className="font-medium text-slate-800"
                          style={{ fontSize: "12px" }}
                        >
                          {customer.driverName}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div
                        className="text-left font-medium text-black-500"
                        style={{ fontSize: "12px" }}
                      >
                        {customer.startaddress}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div
                        className="text-left font-medium text-black-500"
                        style={{ fontSize: "12px" }}
                      >
                        {customer.endaddress}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left" style={{ fontSize: "12px" }}>
                        {moment(customer.rideDate).format("DD/MM/YYYY")}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div
                        className="text-left font-medium text-black-500"
                        style={{ fontSize: "12px" }}
                      >
                        {moment(customer.rideTime).format(" h:mm a")}
                      </div>
                    </td>

                    <td className="p-2 whitespace-nowrap">
                      <div
                        className="text-left font-medium text-black-500"
                        style={{ fontSize: "12px" }}
                      >
                        {customer.startRating}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div
                        className="text-medium text-left"
                        style={{ fontSize: "12px" }}
                      >
                        {customer.message.length < 100 ? (
                          <p>{customer.message.slice(0, 30)}</p>
                        ) : (
                          <p>{customer.message}</p>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
