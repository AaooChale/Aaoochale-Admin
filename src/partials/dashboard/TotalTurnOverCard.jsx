import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import Excel from "../../pages/excel/Excel";
import { Base_Url } from "../../Config/config";

function TotalTurnOverCard() {
  const [turnOver, setTurnOver] = useState([]);
  const [excel, setExcel] = useState([]);
  const [famount, setFamount] = useState('');
  const fileName = "mysamplefile";

  useEffect(() => {
    let data = [];

    axios
      .get(Base_Url + "admin/AllCreatedRides")
      .then((res) => {
        // const totalTurnover = res.data.ride.reduce((acc, cur) => acc + cur.turnOver, 0);
        // console.log(res.data.ride.tripPrise)
        if (res.data.status == true) {
          if (res.data.status == true) {
            const finalAmount = [];
               res.data.ride.map((item, index) => {
              const totalSeat = item.passengerCount - item.totalSeatCount;
              const totalPrice = item.tripPrise * totalSeat;
              finalAmount.push(totalPrice);
            });
            const totalAmount = finalAmount.reduce((a, b) => a + b, 0);
            setFamount(totalAmount)
            for (let index = 0; index < res.data.ride.length; index++) {
              const element = res.data.ride[index];

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
          setTurnOver(res.data.ride);
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
        <h2 className="font-semibold text-slate-800">Total TurnOver</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
              
                <th className="p-2">
                  <div className="font-semibold text-left">Name</div>
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
                  <div className="font-semibold text-center">PassengerC</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">TotalTurnOver</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {turnOver.map((customer) => {
                return (
                  <>
                    {customer.passengerCount - customer.totalSeatCount === 0 ? (
                      <></>
                    ) : (
                      <>
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
                              <div
                                className="font-medium text-slate-800"
                                style={{ fontSize: "12px" }}
                              >
                                {customer.name}
                              </div>
                            </div>
                          </td>

                          <td className="p-2 whitespace-nowrap">
                            <div
                              className="text-left"
                              style={{ fontSize: "12px" }}
                            >
                              {moment(customer.tripDate).format("DD/MM/YYYY")}
                            </div>
                          </td>

                          <td className="p-2 whitespace-nowrap">
                            <div
                              className="text-left font-medium text-black-500"
                              style={{ fontSize: "12px" }}
                            >
                              {customer.startLocation}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div
                              className="text-left font-medium text-black-500"
                              style={{ fontSize: "12px" }}
                            >
                              {customer.endLocation}
                            </div>
                          </td>

                          <td className="p-2 whitespace-nowrap">
                            <div
                              className="text-center font-medium text-black-500"
                              style={{ fontSize: "12px" }}
                            >
                              {customer.passengerCount -
                                customer.totalSeatCount}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div
                              className="text-medium text-center"
                              style={{ fontSize: "12px" }}
                            >
                              {(customer.passengerCount -
                                customer.totalSeatCount) *
                                parseInt(customer.tripPrise)}
                            </div>
                          </td>
                        </tr>
                      </>
                    )}
                  </>
                );
              })}
              <div style={{backgroundColor:"", width:'355%', height:'8vh', }}>
              <p style={{textAlign:"right", paddingTop:"10px", fontSize:"20px", fontWeight:"bold"}}>Rs.{famount}</p>
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TotalTurnOverCard;
