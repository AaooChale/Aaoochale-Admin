import React, { useState, useEffect } from "react";
import RealtimeChart from "../../charts/RealtimeChart";
import axios from "axios";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";
import { Base_Url } from "../../Config/config";


function DashboardCard05() {
  const [data, setData] = useState();
  const [days, setDays] = useState();

  useEffect(() => {
    axios
      .get(Base_Url + "admin/DashbaordReport")
      .then((res) => {
        if (res.data.status == true) {
          setData(res.data.datas.daywiseBooking.data);
          setDays(res.data.datas.daywiseBooking.labels);
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const chartData = {
    labels: days,
    datasets: [
      {
        data: data,
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Daily Ride Booked</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <RealtimeChart data={chartData} width={50} height={248} />
    </div>
  );
}

export default DashboardCard05;
