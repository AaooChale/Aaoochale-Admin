import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { Scrollbars } from "react-custom-scrollbars";
import Excel from "../../pages/excel/Excel";
import { Base_Url } from "../../Config/config";


function RideBookedCard() {
  const [rideBooked, setRideBooked] = useState([]);
  const [excel, setExcel] = useState([]);

  const fileName = "mysamplefile";

  useEffect(() => {
    let data = [];

    axios
      .get(Base_Url +  "admin/AllBookedRides")
      .then((res) => {
        if (res.data.status == true) {
          for (let index = 0; index < res.data.value.length; index++) {
            const element = res.data.value[index];
            const value = {
              Name: element.firstName + " " + element.lastName,
              MobileNo: element.mobile,
              PickUp: element.startaddress,
              Drop: element.endaddress,
              Date: moment(element.rideDate).format("DD/MM/YYYY"),
              Time: moment(element.rideTime).format(" h:mm a"),
              Distanca: element.totalDistance,
              Route: element.centerroute,
              Passenger: element.passengerCount,
              Price: element.tripPrise,
              Status: element.status,
            };
            data.push(value);
          }
          setRideBooked(res.data.value);
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
        <h2 className="font-semibold text-slate-800">RideBooked</h2>
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
                  <div className="font-semibold text-left">Mobile No</div>
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
                  <div className="font-semibold text-left">Distance </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Route </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Passenger</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Price</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Status</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {rideBooked.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                          {customer.image != "" ? (
                            <img
                              src={customer.image}
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
                        <div className="font-medium text-slate-800" style={{fontSize:"12px"}}>
                          {customer.firstName + " " + customer.lastName}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-black-500" style={{fontSize:"12px"}}>
                        {customer.mobile}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-black-500" style={{fontSize:"12px"}}>
                        {customer.startaddress}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-black-500" style={{fontSize:"12px"}}>
                        {customer.endaddress}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left" style={{fontSize:"12px"}}>
                        {moment(customer.rideDate).format("DD/MM/YYYY")}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-black-500" style={{fontSize:"12px"}}>
                        {moment(customer.rideTime).format(" h:mm a")}
                        
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-medium text-left" style={{fontSize:"12px"}}>
                        {customer.totalDistance}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-medium text-left" style={{fontSize:"12px"}}>
                        {customer.centerroute.length < 100 ? (
                          <p>{customer.centerroute.slice(0, 18)}</p>
                        ) : (
                          <p>{customer.centerroute}</p>
                        )}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-medium text-left" style={{fontSize:"12px"}}>
                        {customer.passengerCount}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-medium text-left" style={{fontSize:"12px"}}>
                        {customer.tripPrise}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-medium text-left" style={{fontSize:"12px"}}>
                        {customer.status}
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

export default RideBookedCard;
