import React, { useState, useEffect } from "react";
import axios from "axios";
import { Scrollbars } from "react-custom-scrollbars";
import Excel from "../../pages/excel/Excel";
import { Base_Url } from "../../Config/config";

function VehicleListCard() {
  const [allVehicle, setAllVehicle] = useState([]);
  const [excel, setExcel] = useState([]);

  const fileName = "mysamplefile";
  useEffect(() => {
    let data = [];

    axios
      .get(Base_Url + "admin/AllVehicle")
      .then((res) => {
        for (let index = 0; index < res.data.vehicle.length; index++) {
          const element = res.data.vehicle[index];
          const value = {
            BrandName: element.carBrand,
            ModalName: element.carModel,
            Color: element.carColor,
            Type: element.carType,
            SeatCount: element.seatCount,
            Year: element.manufacturYear,
            VehicleNo: element.vehicleRegiNumb,

          };
          data.push(value);
        }
        setAllVehicle(res.data.vehicle);
        setExcel(data);

      })
      .catch((err) => {
      });
  });

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
        <h2 className="font-semibold text-slate-800">Vehicle List</h2>
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
                    <div className="font-semibold text-left">S.No</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">VehicleImage</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">BrandName</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">ModalName</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-right">Color</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-right">Type</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-right">SeatCount</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-right">Year</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-right">Vehicle No</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm divide-y divide-slate-100">
                {allVehicle.map((customer, index) => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-black-500" style={{fontSize:"12px"}}>
                          {index + 1}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-black-500">
                        {customer.vehicleimage != "" ? (
                          <img
                            src={customer.vehicleimage}
                            alt="Not found"
                            style={{height:"30px", width:"40px", borderRadius:"3px"}}
                          />
                        ) : (
                          <img
                            src="car (2).png"
                            style={{height:"30px", width:"40px", borderRadius:"3px"}}
                            
                          />
                        )}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-black-500" style={{fontSize:"12px"}}>
                          {customer.carBrand}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-black-500" style={{fontSize:"12px"}}>
                          {customer.carModel}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-right font-medium text-black-500" style={{fontSize:"12px"}}>
                          {customer.carColor}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-right font-medium text-black-500" style={{fontSize:"12px"}}>
                          {customer.carType}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-right font-medium text-black-500" style={{fontSize:"12px"}}>
                          {customer.seatCount}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-right font-medium text-black-500" style={{fontSize:"12px"}}>
                          {customer.manufacturYear}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-right font-medium text-black-500" style={{fontSize:"12px"}}>
                          {customer.vehicleRegiNumb}
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

export default VehicleListCard;
