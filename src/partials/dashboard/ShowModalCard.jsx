import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import Loader from "../../pages/loader/Loader";
import { Base_Url } from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VehicleManagementCard() {
  const [addModal, setAddModal] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [updataModal, setUpdataModal] = useState("");
  const [modalId, setModalId] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [load, setLoad] = useState(false);

  let location = useLocation();
  useEffect(() => {
    All_Modal();
  }, []);

  const All_Modal = () => {
    setLoad(true);
    var data = JSON.stringify({
      brandId: location.state.id,
    });
    var config = {
      method: "post",
      url: Base_Url + "model/getAllVehicleModel",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (res) {
        if (res.data.status == true) {
          setAddModal(res.data.Modal);
          setLoad(false);
        } else {
         
        }
      })
      .catch(function (error) {
      });
  };

  const openModal = (id, name) => {
    setUpdataModal(name);
    setModalId(id);
    setShowModal(true);
  };

  const handleUpdate = () => {
    setLoad(true);

    var data = JSON.stringify({
      modalName: updataModal,
      brandId: location.state.id,
      id: modalId,
    });
    var config = {
      method: "post",
      url: Base_Url + "model/updateModel",
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
          All_Modal();
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
  const deleteModal = (id) => {
    setShowDelete(true);
    setDeleteId(id);
  };

  const handleDelete = () => {
    setLoad(true);
    var data = JSON.stringify({
      id: deleteId,
    });
    var config = {
      method: "post",
      url: Base_Url + "model/deleteModel",
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
          All_Modal();
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
        <h2 className="font-semibold text-slate-800">Vehicle ModalName</h2>
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
                    <div className="font-semibold text-left">ModalName</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Edit</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-right">Delete</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm divide-y divide-slate-100">
                {addModal.map((customer, index) => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-sm text-black-500">
                          {index + 1}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-sm text-black-500">
                          {customer.modalName}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          <button
                            onClick={() =>
                              openModal(customer._id, customer.modalName)
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
                        <div className="text-lg text-right">
                          <button onClick={() => deleteModal(customer.id)}>
                            <img
                              src="trash (1).png"
                              style={{ width: "17px", height: "17px" }}
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Loader active={load} />
          </Scrollbars>
        </div>
        {showModal ? (
          <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h5 className="text-2xl font=semibold">Edit ModalName</h5>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                      <h1
                        style={{
                          fontSize: "20px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Are you sure?
                      </h1>
                      <Loader active={load} />

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
                          onChange={(e) => setUpdataModal(e.target.value)}
                          value={updataModal}
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
                  <h6 className="text-2xl font=semibold">Delete ModalName</h6>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      <h1 style={{ fontSize: "20px" }}>Are you sure?</h1>
                      <Loader active={load} />
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
    </div>
  );
}

export default VehicleManagementCard;
