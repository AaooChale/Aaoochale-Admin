import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleButton from "../../singlebutton/SingleButton";
import { NavLink } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import Loader from "../../pages/loader/Loader";
import { Base_Url } from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "30%",
    height: "40vh",
    boxShadow: "1px 1px 3px 3px #888888",
  },
};
function VehicleManagementCard() {
  const [allBrand, setAllBrand] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [updataBrand, setUpdataBrand] = useState("");
  const [brandId, setBrandId] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    All_Brand();
  }, []);

  const All_Brand = () => {
    axios
      .post(
        Base_Url + "brand/getAllVehicleBrand"
      )
      .then((res) => {
        setAllBrand(res.data.users);
      })
      .catch((err) => {
      });
  };

  const openModal = (id, name) => {
    setUpdataBrand(name);
    setBrandId(id);
    setShowModal(true);
  };

  const handleUpdate = () => {
    setLoad(true);
    var data = JSON.stringify({
      brandName: updataBrand,
      id: brandId,
    });
    var config = {
      method: "post",
      url: Base_Url + "brand/updateBrand",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (res) {
        if (res.data.status == true) {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setShowModal(false);
          setLoad(false);
          All_Brand();
        } else {
          toast.error(res.data.message, {
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

  const deleteModal = (id) => {
    setDeleteId(id);
    setShowDelete(true);
  };

  const handleDelete = () => {
    setLoad(true);

    var data = JSON.stringify({
      id: deleteId,
    });
    console.log(data);
    var config = {
      method: "post",
      url: Base_Url + "brand/deleteBrand",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (res) {
        if (res.data.status == true) {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setShowDelete(false);
          All_Brand();
          setLoad(false);
        } else {
          toast.error(res.data.message, {
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
        <h2 className="font-semibold text-slate-800">Vehicle BrandName</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <Scrollbars style={{ width: "100%", height: "80vh" }}>
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                <tr>
                  <th className="p-2">
                    <div className="font-semibold text-left">S.No</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">BrandName</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Edit</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-right">Delete</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-right">Show Modal</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-right">Add Modal</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm divide-y divide-slate-100">
                {allBrand.map((customer, index) => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-sm text-black-500" style={{fontSize:"12px"}}>
                          {index + 1}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-sm text-black-500" style={{fontSize:"12px"}}>
                          {customer.brandName}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-sm text-green-500">
                          <button
                            onClick={() =>
                              openModal(customer._id, customer.brandName)
                            }
                          >
                            <img
                              src="edit (1).png"
                              style={{ width: "17px", height: "17px" }}
                            />
                          </button>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-sm text-right">
                          <button onClick={() => deleteModal(customer.id)}>
                            <img
                              src="trash (1).png"
                              style={{ width: "17px", height: "17px" }}
                            />
                          </button>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-sm text-right">
                          <NavLink to="/showmodal" state={{ id: customer.id }}>
                            <SingleButton
                              btn="Show Modal"
                              height="4vh"
                              width="40%"
                              fontSize="10px"
                              textAlign="center"
                              backgroundColor="#205CBE"
                              color="white"
                            />
                          </NavLink>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-right">
                          <NavLink to="/addmodal" state={{ id: customer.id }}>
                            <SingleButton
                              btn="Add Modal"
                              height="4vh"
                              width="40%"
                              fontSize="10px"
                              textAlign="center"
                              backgroundColor="#205CBE"
                              color="white"
                            />
                          </NavLink>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Scrollbars>
        </div>
        {showModal ? (
          <>
            <div
              className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              style={customStyles}
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h5 className="text-2xl font=semibold">Edit BrandName</h5>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                      <Loader active={load} />
                      <h1
                        style={{
                          fontSize: "20px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Are you sure?
                      </h1>
                      <p style={{ fontSize: "18px" }}>
                        Do you really want Edit these BrandName? This process
                        connot be undo.
                      </p>
                      <div style={{ marginTop: "15px" }}>
                        <label className="block text-black text-sm font-bold mb-1">
                          Add BrandName
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          onChange={(e) => setUpdataBrand(e.target.value)}
                          value={updataBrand}
                          style={{ width: "100%", paddingLeft: "20px" }}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      // onClick={() => setShowModal(false)}
                      onClick={() => handleUpdate()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      {showDelete ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h6 className="text-2xl font=semibold">Delete BrandName</h6>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <Loader active={load} />
                    <label className="block text-black text-sm font-bold mb-1">
                      <h1 style={{ fontSize: "20px" }}>Are you sure?</h1>
                    </label>
                    <p style={{ fontSize: "18px" }}>
                      Do you really want delete these BrandName? This process
                      connot be undo.
                    </p>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowDelete(false)}
                  >
                    No
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => handleDelete()}
                  >
                    Yes
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
}

export default VehicleManagementCard;
