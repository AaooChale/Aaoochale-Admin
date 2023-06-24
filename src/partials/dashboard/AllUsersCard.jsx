import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import SingleButton from "../../singlebutton/SingleButton";
// import SearchFilter from "../../pages/searchfilter/SearchFilter";
import Excel from "../../pages/excel/Excel";
import { Base_Url } from "../../Config/config";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AllUsersCard() {
  const [latestRide, setlatestRide] = useState([]);
  const [latestRide1, setlatestRide1] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [usersDetails, setusersDetails] = useState([]);
  const [excel, setExcel] = useState([]);
  const [userId, setUserId] = useState("");

  const fileName = "mysamplefile";

  const handleChange = (e) => {
    const keyword = e;
    if (keyword !== "") {
      const results = latestRide.filter((user) => {
        return user.firstName.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setlatestRide(results);
    } else {
      setlatestRide(latestRide1);
    }
    setSearchText(keyword);
  };
  const AllUser = () => {
    let data = [];
    axios
      .post(Base_Url + "admin/getAllUsers")
      .then((res) => {
        console.log(res.data.users);
        if (res.data.status == true) {
          for (let index = 0; index < res.data.users.length; index++) {
            const element = res.data.users[index];
            const value = {
              Name: element.firstName + " " + element.lastName,
              MobileNo: element.mobile.mobileNumber,
              City: element.city,
              DOJ: moment(element.doj).format("DD/MM/YYYY"),
              TRB: element.totalrideBooked,
              TRS: element.totalrideShared,
              NoofVehicles: element.noOfVehicles,
            };
            data.push(value);
          }
          setlatestRide(res.data.users);
          setExcel(data);
        }
        latestRide(data);
        setlatestRide1(data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    AllUser();
  }, []);
  const ShowDetails = (id) => {
    if (id) {
      var data = JSON.stringify({
        id: id,
      });

      var config = {
        method: "post",
        url: Base_Url + "perinfo/getUserPersoInfo",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (res) {
          if (res.data.status == true) {
            setusersDetails(res.data.data.user);
            setShowModal(true);
          } else {
          }
        })
        .catch(function (error) {
          console.log("something went wrong ", error);
        });
    } else {
      setShowModal(!true);
    }
  };

  const blockUser = (id) => {
    console.log(id);
    var data = JSON.stringify({
      userId: id,
      profileStatus: "true",
    });
    var config = {
      method: "post",
      url: "http://aaoochale.in:8000/aaoochale/UserAuth/admin/blockUnblockUser",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (res) {
        if (res.data.status == true) {
          AllUser();
        } else {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          AllUser();
        }
      })
      .catch(function (error) {});
  };
  const unblockUser = (id) => {
    console.log(id);
    var data = JSON.stringify({
      userId: id,
      profileStatus: "false",
    });
    var config = {
      method: "post",
      url: "http://aaoochale.in:8000/aaoochale/UserAuth/admin/blockUnblockUser",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (res) {
        if (res.data.status == true) {
          // toast.success("Hii Gaurav",{
          //   position: "top-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
          AllUser();
        } else {
          toast.success("User has been Unblocked Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          AllUser();
        }
      })
      .catch(function (error) {});
  };
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
        <h2 className="font-semibold text-slate-800">All Users</h2>
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
                  <div className="font-semibold text-left">Gender</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Mobile No</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">City</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">DOJ</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Booked</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Shared</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Vehicles </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Action</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Active</div>
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
                          className="font-sm text-slate-800"
                          style={{ fontSize: "12px" }}
                        >
                          {customer.firstName + " " + customer.lastName}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div
                        className="text-left font-sm text-black-500"
                        style={{ fontSize: "12px" }}
                      >
                        {customer.gender}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div
                        className="text-left font-sm text-black-500"
                        style={{ fontSize: "12px" }}
                      >
                        {customer.mobile.mobileNumber}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div
                        className="text-left font-sm text-black-500"
                        style={{ fontSize: "12px" }}
                      >
                        {customer.city}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left" style={{ fontSize: "12px" }}>
                        {moment(customer.doj).format("DD/MM/YYYY")}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div
                        className="text-center font-sm text-green-500"
                        style={{ fontSize: "12px" }}
                      >
                        <NavLink to="/ridebooked">
                          {" "}
                          {customer.totalrideBooked}
                        </NavLink>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div
                        className="text-sm text-center"
                        style={{ fontSize: "12px" }}
                      >
                        <NavLink to="/rideshared">
                          {" "}
                          {customer.totalrideShared}
                        </NavLink>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div
                        className="text-sm text-center"
                        style={{ fontSize: "12px" }}
                      >
                        <NavLink to="/vehiclelist">
                          {customer.noOfVehicles}
                        </NavLink>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">
                        <SingleButton
                          btn="View"
                          height="4vh"
                          width="70%"
                          fontSize="10px"
                          textAlign="center"
                          backgroundColor="#205CBE"
                          color="white"
                          onClick={() => ShowDetails(customer._id)}
                        />
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div
                        className="text-center font-sm text-black-500"
                        style={{ fontSize: "12px" }}
                      >
                        {customer.profileStatus === true ? (
                          <button onClick={() => unblockUser(customer._id)}>
                            {" "}
                            <img
                              src="approve.png"
                              style={{
                                borderRadius: 50,
                                height: 50,
                                width: 50,
                              }}
                            />
                          </button>
                        ) : (
                          <button onClick={() => blockUser(customer._id)}>
                            {" "}
                            <img
                              src="close.png"
                              style={{
                                height: 35,
                                width: 35,
                                borderRadius: "3px",
                              }}
                            />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {showModal ? (
          <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div
                className="relative w-auto my-6 mx-auto max-w-7xl"
                style={{
                  width: "180%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: "60px",
                }}
              >
                <div
                  className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none"
                  style={{ width: "70%" }}
                >
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-2xl font=semibold">User Details</h3>
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <img
                        src="cancel.png"
                        style={{ height: "30px", width: "30px" }}
                      />
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form
                      className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                      style={{ height: "60vh", width: "100%" }}
                    >
                      <div
                        style={{
                          backgroundColor: "",
                          height: "14vh",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "",
                            width: "14%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {usersDetails.profilePicture != "" ? (
                            <img
                              src={usersDetails.profilePicture}
                              alt="Not found"
                              style={{
                                height: "10vh",
                                width: "75%",
                                borderRadius: 100,
                              }}
                            />
                          ) : (
                            <img
                              src="profile (1).png"
                              style={{
                                height: "80%",
                                width: "80%",
                              }}
                            />
                          )}
                        </div>
                        <div style={{ backgroundColor: "", width: "87%" }}>
                          <h1
                            style={{
                              paddingTop: "25px",
                              fontSize: "16px",
                              fontWeight: "bold",
                            }}
                          >
                            {usersDetails.firstName +
                              " " +
                              usersDetails.lastName}
                          </h1>
                          <h1>{usersDetails.email.emailId}</h1>
                          <h1>{usersDetails.mobile.mobileNumber}</h1>
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundColor: "",
                          height: "8vh",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <label
                            style={{ fontSize: "15px", fontWeight: "bold" }}
                          >
                            DOB
                          </label>
                          <p>{moment(usersDetails.DOB).format("DD/MM/YYYY")}</p>
                        </div>
                        <div>
                          <label
                            style={{ fontSize: "15px", fontWeight: "bold" }}
                          >
                            Gender
                          </label>
                          <p>{usersDetails.gender}</p>
                        </div>
                        <div>
                          <label
                            style={{ fontSize: "15px", fontWeight: "bold" }}
                          >
                            Date of Join
                          </label>
                          <p>
                            {moment(usersDetails.createdOn).format(
                              "DD/MM/YYYY"
                            )}
                          </p>
                        </div>
                        <div>
                          <label
                            style={{ fontSize: "15px", fontWeight: "bold" }}
                          >
                            Status
                          </label>

                          {usersDetails.userStatus === "Verified" ? (
                            <p style={{ color: "green" }}>
                              {usersDetails.userStatus}
                            </p>
                          ) : (
                            <p style={{ color: "red" }}>
                              {usersDetails.userStatus}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            style={{ fontSize: "15px", fontWeight: "bold" }}
                          >
                            Active
                          </label>

                          {usersDetails.profileStatus === false ? (
                            <p style={{ color: "green" }}>{"UnBlock"}</p>
                          ) : (
                            <p style={{ color: "red" }}>{"Block"}</p>
                          )}
                        </div>
                      </div>
                      <label style={{ fontSize: "15px", fontWeight: "bold" }}>
                        Prefrencess
                      </label>
                      <div>
                        <p>1. {usersDetails.chattiness}</p>
                        <p>2. {usersDetails.music}</p>
                        <p>3. {usersDetails.smoking}</p>
                        <p>4. {usersDetails.pets}</p>
                      </div>
                      <div
                        style={{
                          backgroundColor: "",
                          height: "5vh",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "12%",
                        }}
                      >
                        <label style={{ fontSize: "15px", fontWeight: "bold" }}>
                          Documents
                        </label>
                      </div>
                      <div
                        style={{
                          backgroundColor: "",
                          height: "14vh",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ backgroundColor: "", width: "20%" }}>
                          <label
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            AdhaarF
                          </label>
                          {usersDetails.documents.aadharCard.documentLink !=
                          "" ? (
                            <img
                              src={
                                usersDetails.documents.aadharCard.documentLink
                              }
                              alt="Not found"
                              style={{
                                height: "8vh",
                                borderRadius: "5px",
                                width: "90%",
                              }}
                            />
                          ) : (
                            <img
                              src="visa (1).png"
                              style={{
                                height: "12vh",
                                width: "80%",
                              }}
                            />
                          )}
                        </div>
                        <div style={{ backgroundColor: "", width: "20%" }}>
                          <label
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            AdhaarB
                          </label>
                          {usersDetails.documents.aadharCard.documentLink1 !=
                          "" ? (
                            <img
                              src={
                                usersDetails.documents.aadharCard.documentLink1
                              }
                              alt="Not found"
                              style={{
                                height: "8vh",
                                borderRadius: "5px",
                                width: "90%",
                              }}
                            />
                          ) : (
                            <img
                              src="visa (1).png"
                              style={{
                                height: "12vh",
                                width: "80%",
                              }}
                            />
                          )}
                        </div>
                        <div style={{ backgroundColor: "", width: "20%" }}>
                          <label
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            panCard
                          </label>
                          {usersDetails.documents.panCard.documentLink != "" ? (
                            <img
                              src={usersDetails.documents.panCard.documentLink}
                              alt="Not found"
                              style={{
                                height: "8vh",
                                borderRadius: "5px",
                                width: "90%",
                              }}
                            />
                          ) : (
                            <img
                              src="visa (1).png"
                              style={{
                                height: "12vh",
                                width: "80%",
                              }}
                            />
                          )}
                        </div>
                        <div style={{ backgroundColor: "", width: "20%" }}>
                          <label
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            DrivingLF
                          </label>
                          {usersDetails.documents.drivingLicence.documentLink !=
                          "" ? (
                            <img
                              src={
                                usersDetails.documents.drivingLicence
                                  .documentLink
                              }
                              alt="Not found"
                              style={{
                                height: "8vh",
                                borderRadius: "5px",
                                width: "90%",
                              }}
                            />
                          ) : (
                            <img
                              src="visa (1).png"
                              style={{
                                height: "12vh",
                                width: "80%",
                              }}
                            />
                          )}
                        </div>
                        <div style={{ backgroundColor: "", width: "20%" }}>
                          <label
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            DrivingLB
                          </label>
                          {usersDetails.documents.drivingLicence
                            .documentLink1 != "" ? (
                            <img
                              src={
                                usersDetails.documents.drivingLicence
                                  .documentLink1
                              }
                              alt="Not found"
                              style={{
                                height: "8vh",
                                borderRadius: "5px",
                                width: "90%",
                              }}
                            />
                          ) : (
                            <img
                              src="visa (1).png"
                              style={{
                                height: "12vh",
                                width: "80%",
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </div>
  );
}

export default AllUsersCard;
