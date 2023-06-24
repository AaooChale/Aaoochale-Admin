import React from "react";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Base_Url } from "../../Config/config";

const SendNotificationCard = () => {
 
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    if (message === '') {
        toast.error('vyjuvyjvyjvjyhvy', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    } else {
      var data = JSON.stringify({
        message: message,
      });
      var config = {
        method: "post",
        url: Base_Url + "admin/broadcastNotification",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (res) {
          console.log(res.data,'kISHAN')
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
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="w-xl max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-000"
        style={{ height: "70vh", width: "40%", marginTop: "80px" }}
      >
        <form className="space-y-6" action="#" >
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Send BroadCast Notification to Users
          </h5>
          <div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                BroadCast message
              </label>
              <textarea
                id="message"
                rows={12}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your  BroadCast message here..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{}}
            onClick={()=>onSubmit()}
          >
            Submit
          </button>
        </form>
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
};

export default SendNotificationCard;
