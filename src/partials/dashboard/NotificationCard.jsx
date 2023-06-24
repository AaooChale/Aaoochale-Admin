import React, { useState, useEffect } from "react";
import axios from "axios";
import { Base_Url } from "../../Config/config";


function NotificationCard() {
  const [notification, setNotification] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const [updateType, setUpdateType] = useState("");
  const [updataMessage, setUpdateMessage] = useState("");
  const [modalDelete, setModalDelete] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [modalAdd, setModalAdd] = useState(false);


  useEffect(() => {
    All_Notification();
  }, []);

  const All_Notification = () => {
    axios
      .post(
        Base_Url + "notificationMsg/msgList"
      )
      .then((res) => {
        setNotification(res.data.msgList);
      })
      .catch((err) => {
      });
  };
  const editModal = (id, type, msg) => {
    setUpdateType(type);
    setUpdateMessage(msg);
    setEditId(id);
    setModalEdit(true);
  };
  const handleUpdate = () => {
    var data = JSON.stringify({
      type: updateType,
      msg: updataMessage,
      id: editId,
    });
    var config = {
      method: "post",
      url: Base_Url + "notificationMsg/msgUpdate",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (res) {
        if (res.data.status == true) {
          setModalEdit(false);
          All_Notification();
        } else {
        }
      })
      .catch(function (error) {
      });
  };
  const deleteModal = (id) => {
    setDeleteId(id);
    setModalDelete(true);
  };

  const handleDelete = () => {
    var data = JSON.stringify({
      id: deleteId,
    });

    console.log(data);
    var config = {
      method: "post",
      url:  Base_Url + "notificationMsg/msgDelete",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    console.log(config);
    axios(config)
      .then(function (res) {
        if (res.data.status == true) {
          setModalDelete(false);
          All_Notification();

        } else {
        }
      })
      .catch(function (error) {
      });
  };

  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Notification</h2>
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
                  <div className="font-semibold text-left">Message</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Type</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Edit</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-right">Delete</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-right">Add</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {notification.map((customer, index) => {
                return (
                  <tr key={customer.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                          {index + 1}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                          {customer.msg}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center font-medium text-black-500">
                        {customer.type}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-black-500">
                        <button
                          onClick={() =>
                            editModal(customer._id, customer.type, customer.msg)
                          }
                        >
                          <img
                            src="edit (1).png"
                            style={{ width: "20px", height: "20px" }}
                          />
                        </button>
                      </div>
                    </td>

                    <td className="p-2 whitespace-nowrap">
                      <div className="text-right">
                      <button onClick={() => deleteModal(customer.id)}>
                        <img
                          src="trash (1).png"
                          style={{ width: "20px", height: "20px" }}
                        />
                        </button>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-right">
                        <button
                          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                          style={{
                            height: "4h",
                            width: "21%",
                            fontSize: "13px",
                          }}
                          onClick={() => setModalAdd(true)}
                        >
                          Add
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {modalAdd ? (
            <>
              <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                      <h3 className="text-2xl font=semibold">
                        Add Notification
                      </h3>
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
                    <p style={{ fontSize: "18px" }}>
                      Do you really want Add these Notification? This process
                      connot be undo.
                    </p>
                    <div style={{ marginTop: "15px" }}>
                        <label className="block text-black text-sm font-bold mb-1">
                          Add Type
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          onChange={(e) => setUpdateType(e.target.value)}
                          value={updateType}
                          style={{ paddingLeft: "20px" }}
                        />
                        </div>
                        <div style={{ marginTop: "15px" }}>
                        <label className="block text-black text-sm font-bold mb-1">
                          Add Massege
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          onChange={(e) => setUpdateMessage(e.target.value)}
                          value={updataMessage}
                          style={{ paddingLeft: "20px" }}
                        />
                        </div>
                      </form>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setModalAdd(false)}
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
        {modalEdit ? (
          <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-2xl font=semibold">
                      Edit Notification
                    </h3>
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
                  <p style={{ fontSize: "18px" }}>
                    Do you really want Edit these Notification? This process
                    connot be undo.
                  </p>
                  <div style={{ marginTop: "15px" }}>
                      <label className="block text-black text-sm font-bold mb-1">
                        Edit Type
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        onChange={(e) => setUpdateType(e.target.value)}
                        value={updateType}
                        style={{ paddingLeft: "20px" }}
                      />
                      </div>
                      <div style={{ marginTop: "15px" }}>
                      <label className="block text-black text-sm font-bold mb-1">
                        Edit Massege
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        onChange={(e) => setUpdateMessage(e.target.value)}
                        value={updataMessage}
                        style={{ paddingLeft: "20px" }}
                      />
                      </div>
                    </form>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setModalEdit(false)}
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
      {modalDelete ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h6 className="text-2xl font=semibold">Delete Notification</h6>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      <h1 style={{ fontSize: "20px" }}>Are you sure?</h1>
                    </label>
                    <p style={{ fontSize: "18px" }}>
                      Do you really want delete these Notification? This process
                      connot be undo.
                    </p>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setModalDelete(false)}
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
    </div>
  );
}

export default NotificationCard;
