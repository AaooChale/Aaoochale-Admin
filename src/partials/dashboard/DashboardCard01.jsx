import React, { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../EditMenu';
import axios from "axios";
import { Base_Url } from "../../Config/config";


// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard01() {
  const [showData, setShowData] = useState("");
  useEffect(() => {
    axios
      .get(Base_Url + "admin/DashbaordReport")
      .then((res) => {
        console.log(res.data, "hereeeeeeeeeeeeeeeee");
        setShowData(res.data.datas);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
      '06-01-2021', '07-01-2021', '08-01-2021',
      '09-01-2021', '10-01-2021', '11-01-2021',
      '12-01-2021', '01-01-2022', '02-01-2022',
      '03-01-2022', '04-01-2022', '05-01-2022',
      '06-01-2022', '07-01-2022', '08-01-2022',
      '09-01-2022', '10-01-2022', '11-01-2022',
      '12-01-2022', '01-01-2023',
    ],
    datasets: [
      // Indigo line
      {
        data: [
          732, 610, 610, 504, 504, 504, 349,
          349, 504, 342, 504, 610, 391, 192,
          154, 273, 191, 191, 126, 263, 349,
          252, 423, 622, 470, 532,
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
      // Gray line
      {
        data: [
          532, 532, 532, 404, 404, 314, 314,
          314, 314, 314, 234, 314, 234, 234,
          314, 314, 314, 388, 314, 202, 202,
          202, 202, 314, 720, 642,
        ],
        borderColor: tailwindConfig().theme.colors.slate[300],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
        clip: 20,
      },
    ],
  };

  return (
    
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200" >
    <NavLink to="/totalturn">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <NavLink to="/totalturn"> <img src="coin.png" width="20-" height="20" alt="Icon 01" /></NavLink>
          {/* Menu button */}
        </header>
        <h2 className="text-small font-semibold text-slate-800 mb-2"><NavLink to="/totalturn">Total TurnOver</NavLink></h2>
        <div className="flex items-start">
          <div className="text-2xl font-bold text-slate-800 mr-2">{showData.totalturnover}</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={389} height={128} />
      </div>
      </NavLink>
    </div>
  );
}

export default DashboardCard01;
