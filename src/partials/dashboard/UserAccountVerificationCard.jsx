import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleButton from "../../singlebutton/SingleButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Base_Url } from "../../Config/config";
const UserAccountVerificationCard = () => {
  const [verified, setVerified] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState([]);
  const [userId, setUserId] = useState("");
  const [doc2, setDoc2] = useState([]);

  useEffect(() => {
    const veri = [];
    axios
      .post(Base_Url + "admin/UserAllDoc")
      .then((res) => {
        if (res.data.status == true) {
          for (let index = 0; index < res.data.value.length; index++) {
            if (res.data.value[index].status === "Verified") {
              veri.push(res.data.value[index]);
            } else {
            }
          }
          setVerified(veri);
          
        } else {
          setVerified(res.data.value);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const openModal = (e, documents) => {
    setShowModal(true);
    setDetail(documents);
    setUserId(e);
  };
  const Verify_User = () => {
    var data = JSON.stringify({
      id: userId,
      status: "Verified",
    });
    var config = {
      method: "post",
      url: Base_Url + "admin/mangeUserStatus",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (res) {
        if (res.data.status == true) {
          All_Doc();
          setShowModal(false);
          toast.success(res.data.msg + " Verified", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error(res.data.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch(function (error) {
      });
  };

  const Unverify_User = () => {
    var data = JSON.stringify({
      id: userId,
      status: "Unverified",
    });
    var config = {
      method: "post",
      url: Base_Url + "admin/mangeUserStatus",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (res) {
        if (res.data.status == true) {
          setShowModal(false);
          // All_Doc();
          console.log(res.data)
          toast.error(res.data.msg + " Unverified", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error(res.data.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch(function (error) {
      });
  };
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Users Account Verified</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">S.No</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Mobile No</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">AdhaarF</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">AdhaarB</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Pan</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">DrivingLF</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">DrivingLB </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">View </div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {verified.map((customer, index) => {
                return (
                  <tr key={customer.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-sm text-black-500" style={{fontSize:"12px"}}>
                        {index + 1}
                      </div>
                    </td>
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
                          {customer.firstName + " " + customer.lastName}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-sm text-black-500" style={{fontSize:"12px"}}>
                        {customer.mobile.mobileNumber}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-sm text-black-500" >
                        {customer.documents.aadharCard.documentLink != "" ? (
                          <img
                            src={customer.documents.aadharCard.documentLink}
                            style={{ borderRadius: 5, height: 40, width: 65 }}
                          />
                        ) : (
                          <img
                            src="visa (1).png"
                            style={{
                              height: 55,
                              width: 65,
                              borderRadius: "3px",
                            }}
                          />
                        )}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">
                        {customer.documents.aadharCard.documentLink1 != "" ? (
                          <img
                            src={customer.documents.aadharCard.documentLink1}
                            style={{ borderRadius: 5, height: 40, width: 65 }}
                          />
                        ) : (
                          <img
                            src="visa (1).png"
                            style={{
                              height: 55,
                              width: 65,
                              borderRadius: "3px",
                            }}
                          />
                        )}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-sm text-green-500">
                        {customer.documents.panCard.documentLink != "" ? (
                          <img
                            src={customer.documents.panCard.documentLink}
                            style={{ borderRadius: 5, height: 40, width: 65 }}
                          />
                        ) : (
                          <img
                            src="visa (1).png"
                            style={{
                              height: 55,
                              width: 65,
                              borderRadius: "3px",
                            }}
                          />
                        )}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-right">
                        {customer.documents.drivingLicence.documentLink !=
                        "" ? (
                          <img
                            src={customer.documents.drivingLicence.documentLink}
                            style={{ borderRadius: 5, height: 40, width: 65 }}
                          />
                        ) : (
                          <img
                            src="visa (1).png"
                            style={{
                              height: 55,
                              width: 65,
                              borderRadius: "3px",
                            }}
                          />
                        )}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-right">
                        {customer.documents.drivingLicence.documentLink1 !=
                        "" ? (
                          <img
                            src={
                              customer.documents.drivingLicence.documentLink1
                            }
                            style={{ borderRadius: 5, height: 40, width: 65 }}
                          />
                        ) : (
                          <img
                            src="visa (1).png"
                            style={{
                              height: 55,
                              width: 65,
                              borderRadius: "3px",
                            }}
                          />
                        )}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-sm text-center">
                        <SingleButton
                          btn="View"
                          height="4.3vh"
                          width="80%"
                          fontSize="10px"
                          textAlign="center"
                          backgroundColor="#205CBE"
                          color="white"
                          onClick={() =>
                            openModal(customer.id, customer.documents)
                          }
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="flex   fixed inset-20  outline-none focus:outline-none">
            <div
              className="relative w-auto my-8 mx-auto max-w-8xl"
              style={{ width: "180%" , display:"flex", justifyContent:"center", alignItems:"center", paddingLeft:"60px"}}
            >
              <div
                className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none"
                style={{
                  width: "70%",
                  backgroundColor: "",
                  marginRight: "100px",
                }}
              >
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-2xl font=semibold">User Document</h3>
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
                    style={{ height: "49vh", width: "100%" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        height: "22vh",
                      }}
                    >
                      {detail.aadharCard.documentLink != "" ? (
                        <img
                          src={detail.aadharCard.documentLink}
                          style={{
                            height: "20vh",
                            width: "30%",
                            borderRadius: "7px",
                          }}
                        />
                      ) : (
                        <img
                          src="visa (1).png"
                          style={{
                            height: "29vh",
                            width: "30%",
                          }}
                        />
                      )}
                      {detail.aadharCard.documentLink1 != "" ? (
                        <img
                          src={detail.aadharCard.documentLink1}
                          style={{
                            height: "20vh",
                            width: "30%",
                            borderRadius: "7px",
                          }}
                        />
                      ) : (
                        <img
                          src="visa (1).png"
                          style={{
                            height: "29vh",
                            width: "30%",
                          }}
                        />
                      )}

                      {detail.panCard.documentLink != "" ? (
                        <img
                          src={detail.panCard.documentLink}
                          style={{
                            height: "20vh",
                            width: "30%",
                            borderRadius: "7px",
                          }}
                        />
                      ) : (
                        <img
                          src="visa (1).png"
                          style={{
                            height: "29vh",
                            width: "30%",
                          }}
                        />
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        height: "22vh",
                        width: "100%",
                      }}
                    >
                      {detail.drivingLicence.documentLink != "" ? (
                        <img
                          src={detail.drivingLicence.documentLink}
                          style={{
                            height: "20vh",
                            width: "30%",
                            borderRadius: "7px",
                          }}
                        />
                      ) : (
                        <img
                          src="visa (1).png"
                          style={{
                            height: "29vh",
                            width: "30%",
                          }}
                        />
                      )}
                      {detail.drivingLicence.documentLink1 != "" ? (
                        <img
                          src={detail.drivingLicence.documentLink1}
                          style={{
                            height: "20vh",
                            width: "33%",
                            borderRadius: "7px",
                          }}
                        />
                      ) : (
                        <img
                          src="visa (1).png"
                          style={{
                            height: "29vh",
                            width: "30%",
                          }}
                        />
                      )}
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => Unverify_User()}
                  >
                    Reject
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => Verify_User()}
                  >
                    Approved
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

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
};

export default UserAccountVerificationCard;
