// // import React, { useState } from "react";

// // const Modal = () => {
// //   const [showModal, setShowModal] = useState(false);
// //   return (
// //     <>
// //       <button
// //         className="bg-blue-200 text-black active:bg-blue-500
// //       font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
// //         type="button"
// //         onClick={() => setShowModal(true)}
// //       >
// //         Fill Details
// //       </button>
// //       {showModal ? (
// //         <>
// //           <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
// //             <div className="relative w-auto my-6 mx-auto max-w-3xl">
// //               <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
// //                 <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
// //                   <h3 className="text-3xl font=semibold">Edit BrandName</h3>
// //                   <button
// //                     className="bg-transparent border-0 text-black float-right"
// //                     onClick={() => setShowModal(false)}
// //                   >
// //                     <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
// //                       x
// //                     </span>
// //                   </button>
// //                 </div>
// //                 <div className="relative p-6 flex-auto">
// //                   <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
// //                     <label className="block text-black text-sm font-bold mb-1">
// //                       Add ModalModal
// //                     </label>
// //                     <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
// //                     <label className="block text-black text-sm font-bold mb-1">
// //                       Add BrandName
// //                     </label>
// //                     <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
// //                   </form>
// //                 </div>
// //                 <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
// //                   <button
// //                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
// //                     type="button"
// //                     onClick={() => setShowModal(false)}
// //                   >
// //                     Close
// //                   </button>
// //                   <button
// //                     className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
// //                     type="button"
// //                     onClick={() => setShowModal(false)}
// //                   >
// //                     Submit
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </>
// //       ) : null}
// //     </>
// //   );
// // };

// // export default Modal;
// import React from "react";
// import { NavLink } from "react-router-dom";

// const Test = () => {
//   return (
//     <section className="h-screen">
//       <div className="container h-full px-6 py-24">
//         <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
//           <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
//             <img
//               src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//               className="w-full"
//               alt="Phone image"
//             />
//           </div>
//           <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
//           <div style={{backgroundColor:"", marginBottom:"40px", height:"6vh", display:'flex'}}>
//           <img src="letter.png" style={{height:"70px", width:"60px", marginBottom:"10px"}}/>
//           <h1 style={{fontSize:"30px"}}>aoChale Login</h1>
//           </div>

//             <form>
//               {/* Email input */}
//               <div className="relative mb-6" data-te-input-wrapper-init>
//                 <input
//                   type="text"
//                   className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                   id="exampleFormControlInput3"
//                   placeholder="Email address"
//                   style={{height:'5vh', border:"1px solid grey"}}
//                 />
//                 <label
//                   htmlFor="exampleFormControlInput3"
//                   className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
//                 >
//                   Email address
//                 </label>
//               </div>
//               {/* Password input */}
//               <div className="relative mb-6" data-te-input-wrapper-init>
//                 <input
//                   type="password"
//                   className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                   id="exampleFormControlInput33"
//                   style={{height:'5vh', border:"1px solid grey"}}

//                 />
//                 <label
//                   htmlFor="exampleFormControlInput33"
//                   className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
//                 >
//                   Password
//                 </label>
//               </div>
//               <div className="mb-6 flex items-center justify-between">
//                 <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
//                   <input
//                     type="checkbox"
//                     defaultValue
//                     id="exampleCheck3"
//                     defaultChecked
//                   />
//                   <label
//                     className="inline-block pl-[0.15rem] hover:cursor-pointer"
//                     htmlFor="exampleCheck3"
//                   >
//                     Remember me
//                   </label>
//                 </div>
//                 <a
//                   href="#!"
//                   className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
//                 >
//                   Forgot password?
//                 </a>
//               </div>
//               {/* Submit button */}

//               <button
//                 type="submit"
//                 className="inline-block w-full rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
//                 data-te-ripple-init
//                 data-te-ripple-color="light"
//                 style={{backgroundColor:"#205CBE", height:"5vh" , fontSize:"18px"}}
//               >
//               <NavLink to="/dashboard">Sign In</NavLink>
//               </button>
//               <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
//                 <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
//                   OR
//                 </p>
//               </div>
//               <a
//                 className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pt-3 pb-2.5 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
//                 style={{ backgroundColor: "#3b5998" , height:"5vh" , fontSize:"16px"}}
//                 href="#!"
//                 role="button"
//                 data-te-ripple-init
//                 data-te-ripple-color="light"

//               >
//                 {/* Facebook */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="mr-2 h-4 w-4"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                 </svg>
//                 Continue with Facebook
//               </a>
//               <a
//                 className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pt-3 pb-2.5 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
//                 style={{ backgroundColor: "#55acee" , height:"5vh" , fontSize:"16px"}}
//                 href="#!"
//                 role="button"
//                 data-te-ripple-init
//                 data-te-ripple-color="light"
//               >
//                 {/* Twitter */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="mr-2 h-4 w-4"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                 </svg>
//                 Continue with Twitter
//               </a>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Test;

// import React from 'react'
// // import Button from 'react-bootstrap/Button';
// import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';

// export const ExportCSV = ({csvData, fileName}) => {

//     const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//     const fileExtension = '.xlsx';

//     const exportToCSV = (csvData, fileName) => {
//         const ws = XLSX.utils.json_to_sheet(csvData);
//         const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
//         const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//         const data = new Blob([excelBuffer], {type: fileType});
//         FileSaver.saveAs(data, fileName + fileExtension);
//     }

//     return (
//         <button variant="warning" onClick={(e) => exportToCSV(csvData,fileName)}>Export</button>
//     )
// }

// import React from "react";
// import { RotatingLines } from "react-loader-spinner";
// const Test = () => {
//   return (
//     <RotatingLines
//       strokeColor="#205CBE"
//       strokeWidth="5"
//       animationDuration="1.5"
//       width="96"
//       visible={true}
//     />
//   );
// };

// export default Test;

// import LoadingOverlay from 'react-loading-overlay'
// import BounceLoader from 'react-spinners/BounceLoader'

// export default function MyLoader({ active, children }) {
//   return (
//     <LoadingOverlay
//       active={active}
//       spinner={<BounceLoader />}
//     >
//       {children}
//     </LoadingOverlay>
//   )
// }

// import React from "react";

// const Test = () => {
//   return (
//     <div className="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
//       <h2 className="text-xl font-bold">Monthly Revenue</h2>
//       <div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
//         <div className="relative flex flex-col items-center flex-grow pb-5 group">
//           <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
//         500000
//           </span>
//           <div className="relative flex justify-center w-full h-8 bg-indigo-200" />
//           <div className="relative flex justify-center w-full h-6 bg-indigo-300" />
//           <div className="relative flex justify-center w-full h-16 bg-indigo-400" />
//           <span className="absolute bottom-0 text-xs font-bold">Mon</span>
//         </div>
//         <div className="relative flex flex-col items-center flex-grow pb-5 group">
//           <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
//             $45,000
//           </span>
//           <div className="relative flex justify-center w-full h-10 bg-indigo-200" />
//           <div className="relative flex justify-center w-full h-6 bg-indigo-300" />
//           <div className="relative flex justify-center w-full h-20 bg-indigo-400" />
//           <span className="absolute bottom-0 text-xs font-bold">Tue</span>
//         </div>
//         <div className="relative flex flex-col items-center flex-grow pb-5 group">
//           <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
//             $47,500
//           </span>
//           <div className="relative flex justify-center w-full h-10 bg-indigo-200" />
//           <div className="relative flex justify-center w-full h-8 bg-indigo-300" />
//           <div className="relative flex justify-center w-full h-20 bg-indigo-400" />
//           <span className="absolute bottom-0 text-xs font-bold">Wed</span>
//         </div>
//         <div className="relative flex flex-col items-center flex-grow pb-5 group">
//           <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
//             $50,000
//           </span>
//           <div className="relative flex justify-center w-full h-10 bg-indigo-200" />
//           <div className="relative flex justify-center w-full h-6 bg-indigo-300" />
//           <div className="relative flex justify-center w-full h-24 bg-indigo-400" />
//           <span className="absolute bottom-0 text-xs font-bold">Thu</span>
//         </div>
//         <div className="relative flex flex-col items-center flex-grow pb-5 group">
//           <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
//             $47,500
//           </span>
//           <div className="relative flex justify-center w-full h-10 bg-indigo-200" />
//           <div className="relative flex justify-center w-full h-8 bg-indigo-300" />
//           <div className="relative flex justify-center w-full h-20 bg-indigo-400" />
//           <span className="absolute bottom-0 text-xs font-bold">Fri</span>
//         </div>
//         <div className="relative flex flex-col items-center flex-grow pb-5 group">
//           <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
//             $55,000
//           </span>
//           <div className="relative flex justify-center w-full h-12 bg-indigo-200" />
//           <div className="relative flex justify-center w-full h-8 bg-indigo-300" />
//           <div className="relative flex justify-center w-full h-24 bg-indigo-400" />
//           <span className="absolute bottom-0 text-xs font-bold">Sat</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;

/**
 * Sample for Column series
 */
// import * as React from "react";
// import {
//   ChartComponent,
//   SeriesCollectionDirective,
//   SeriesDirective,
//   Inject,
//   Legend,
//   Category,
//   Tooltip,
//   ColumnSeries,
//   DataLabel,
//   Highlight,
// } from "@syncfusion/ej2-react-charts";
// import { Browser } from "@syncfusion/ej2-base";
// export let data1 = [
//   { x: "Mon", y: 35,  toolTipMappingName: "Monday"},
//   { x: "Tue", y: 26,toolTipMappingName: "Tuesday" },
//   { x: "Wed", y: 8, toolTipMappingName: "Wednesday"},
//   { x: "Thu", y: 19,  toolTipMappingName: "Thusday"},
//   { x: "Fri", y: 17, toolTipMappingName: "Friday" },
//   { x: "Sat", y: 2, toolTipMappingName: "Saturday"},
// ];

// const SAMPLE_CSS = `
//      .control-fluid {
//          padding: 0px !important;
//      }`;
// function Column() {
//   return (
//     <div className="control-pane">
//       <style>{SAMPLE_CSS}</style>
//       <div className="control-section">
//         <ChartComponent
//           id="charts"
//           style={{ textAlign: "center" }}
//           legendSettings={{ enableHighlight: true }}
//           primaryXAxis={{
//             labelIntersectAction: Browser.isDevice ? "None" : "Trim",
//             labelRotation: Browser.isDevice ? -45 : 0,
//             valueType: "Category",
//             interval: 1,
//             majorGridLines: { width: 0 },
//             majorTickLines: { width: 0 },
//             edgeLabelPlacement: "Shift",
//           }}
//           primaryYAxis={{
//             // title: "Medal Count",
//             majorTickLines: { width: 0 },
//             lineStyle: { width: 0 },
//             maximum: 50,
//             interval: 10,
//           }}
//           chartArea={{ border: { width: 0 } }}
//           load={load.bind(this)}
//           tooltip={{
//             enable: true,
//             header: "<b>${point.tooltip}</b>",
//             shared: true,
//           }}
//           height={Browser.isDevice ? "100%" : "60%"}
//           width={Browser.isDevice ? "100%" : "25%"}
//           title="Olympic Medal Counts - RIO"
//           loaded={loaded.bind(this)}
//         >
//           <Inject
//             services={[
//               ColumnSeries,
//               Legend,
//               Tooltip,
//               Category,
//               DataLabel,
//               Highlight,
//             ]}
//           />
//           <SeriesCollectionDirective>
//             <SeriesDirective
//               dataSource={data1}
//               tooltipMappingName="toolTipMappingName"
//               xName="x"
//               columnSpacing={0.1}
//               yName="y"
//               name="Gold"
//               type="Column"

//             ></SeriesDirective>
//           </SeriesCollectionDirective>
//         </ChartComponent>
//       </div>
//     </div>
//   );
//   function loaded(args) {
//     let chart = document.getElementById("charts");
//     chart.setAttribute("title", "");
//   }
//   function load(args) {
//     let selectedTheme = location.hash.split("/")[1];
//     selectedTheme = selectedTheme ? selectedTheme : "Material";
//     args.chart.theme = (
//       selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
//     ).replace(/-dark/i, "Dark");
//     if (selectedTheme === "highcontrast") {
//       args.chart.series[0].marker.dataLabel.font.color = "#000000";
//       args.chart.series[1].marker.dataLabel.font.color = "#000000";
//       args.chart.series[2].marker.dataLabel.font.color = "#000000";
//     }
//   }
// }
// export default Column;

// import {AxisModel, BarSeries, Category, ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective} from'@syncfusion/ej2-react-charts';
// import * as React from 'react';
// class App extends React.Component<{}, {}> {
//   public primaryXAxis: AxisModel = { valueType: 'Category'};
//   public data1 : any[]= [
//     { x: 'GER', y: 172 },
//     { x: 'RUS', y: 300 },
//     { x: 'BRZ', y: 439 },
//     { x: 'IND', y: 262 },
//     { x: 'CHN', y: 721 },
// ];
//
// public render() {
//     return <ChartComponent id='charts' primaryXAxis={this.primaryXAxis}>
//       <Inject services={[BarSeries, Category]} />
//       <SeriesCollectionDirective>
//       <SeriesDirective dataSource={this.data1} xName='x' yName='y' type='Bar'/>
//       </SeriesCollectionDirective>
//     </ChartComponent>
//   }
// };
// ReactDOM.render(
//   <App />,
//   document.getElementById('charts') as HTMLElement
// );

// import React from 'react'
// const Test = () => {
//   return (

//    <section className="vh-100" style={{backgroundColor: '#9A616D'}}>
//   <div className="container py-5 h-100">
//     <div className="row d-flex justify-content-center align-items-center h-100">
//       <div className="col col-sm-10">
//         <div className="card" style={{borderRadius: '1rem'}}>
//           <div className="row g-0" >
//             <div className="col-md-6 col-lg-5 d-none d-md-block">
//               <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
//             </div>
//             <div className="col-md-6 col-lg-7 d-flex align-items-center">
//               <div className="card-body p-4 p-lg-5 text-black">
//                 <form>
//                   <div className="d-flex align-items-center mb-3 pb-1">
//                     <img src='aaochale.png' style={{height:"50px", width:"50px", marginRight:"20px"}} />
//                     <span className="h1 fw-bold mb-0">Admin Login</span>
//                   </div>
//                   <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Sign into your account</h5>
//                   <div className="form-outline mb-4">
//                     <input type="email" id="form2Example17" className="form-control form-control-lg" />
//                     <label className="form-label" htmlFor="form2Example17">Email address</label>
//                   </div>
//                   <div className="form-outline mb-4">
//                     <input type="password" id="form2Example27" className="form-control form-control-lg" />
//                     <label className="form-label" htmlFor="form2Example27">Password</label>
//                   </div>
//                   <div className="pt-1 mb-4">
//                     <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//   )
// }

// export default Test

// import React, { useState } from 'react';
// import { Chart } from 'react-google-charts';

// const MyChart = () => {
//   const [data] = useState([
//     ['Year', 'Sales', 'Expenses'],
//     ['2013', 1000, 400],
//     ['2014', 1170, 460],
//     ['2015', 660, 1120],
//     ['2016', 1030, 540]
//   ]);

//   return (
//     <Chart
//       width={'400px'}
//       height={'300px'}
//       chartType="Bar"
//       data={data}
//     />
//   );
// }

// export default MyChart;

// import React, { Component } from 'react'

// export default class Test extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//           series: [
//             {
//               data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
//             },
//           ],
//           options: {
//             chart: {
//               type: "bar",
//               height: 350,
//             },
//             plotOptions: {
//               bar: {
//                 borderRadius: 4,
//                 horizontal: true,
//               },
//             },
//             dataLabels: {
//               enabled: false,
//             },
//             xaxis: {
//               categories: [
//                 "South Korea",
//                 "Canada",
//                 "United Kingdom",
//                 "Netherlands",
//                 "Italy",
//                 "France",
//                 "Japan",
//                 "United States",
//                 "China",
//                 "Germany",
//               ],
//             },
//           },
//         };
//       }
//     render() {
//         return (
//           <div id="chart">
//             <ReactApexChart
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               height={350}
//             />
//           </div>
//         );
//       }
// }

// import React, { Component } from "react";
// import CanvasJSReact from "./canvasjs.react";
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// class App extends Component {
//   render() {
//     const options = {
//       title: {
//         text: "Basic Column Chart",
//       },
//       data: [
//         {
//           // Change type to "doughnut", "line", "splineArea", etc.
//           type: "column",
//           dataPoints: [
//             { label: "Apple", y: 10 },
//             { label: "Orange", y: 15 },
//             { label: "Banana", y: 25 },
//             { label: "Mango", y: 30 },
//             { label: "Grape", y: 28 },
//           ],
//         },
//       ],
//     };
//     return (
//       <div>
//         <CanvasJSChart
//           options={options}
//           /* onRef={ref => this.chart = ref} */
//         />
//         {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
//       </div>
//     );
//   }
// }

       /////////////////Login form ///////////////////////////////////


// <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
//     <form class="space-y-6" action="#">
//         <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
//         <div>
//             <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//             <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
//         </div>
//         <div>
//             <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
//             <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
//         </div>
//         <div class="flex items-start">
//             <div class="flex items-start">
//                 <div class="flex items-center h-5">
//                     <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
//                 </div>
//                 <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
//             </div>
//             <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
//         </div>
//         <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
//         <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
//             Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
//         </div>
//     </form>
// </div>

import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

 const ExportToExcel = ({ apiData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    console.log(data, "Kishan");

    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
      <button
        variant="contained"
        onClick={(e) => exportToCSV(apiData, fileName)}
        style={{
          background: "linear-gradient(#1488CC, #2B32B2)",
          height:"5vh"
        }}
      >
        Export to Excel
      </button>
  );
};

export default ExportToExcel