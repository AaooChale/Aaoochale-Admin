import React from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import Loader from '../../pages/loader/Loader';
import { Base_Url } from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddModalNameCard = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [addModal, setAddModal] = useState("");
const [load, setLoad] = useState(false);


  let location = useLocation();

  const onSubmit = async () => {
    setLoad(true)
    axios({
      method: "POST",
      url: Base_Url + "model/addModelVehicle",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        modalName: addModal,
        brandId: location.state.id,
      },
    })
      .then((res) => {
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
          setLoad(false)
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
      .catch((err) => {
      });
  };
  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <Loader active={load} />
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div style={{ backgroundColor: "", height: "7vh" }}>
                <h1
                  style={{
                    fontSize: "28px",
                    color: "black",
                    fontFamily: "italic",
                  }}
                >
                  Add Modal Name
                </h1>
              </div>
              {/* Email input */}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <label>Add Modal</label>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                  style={{ border: "1px solid grey", width: "50%" }}
                  {...register("addModal")}
                  value={addModal}
                  onChange={(e) => setAddModal(e.target.value)}
                />
              </div>
              {/* Password input */}
              <div className="text-center lg:text-left">
                <button
                  type="button"
                  className="inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  style={{
                    width: "50%",
                    marginTop: "20px",
                    backgroundColor: "#205CBE",
                  }}
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
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
    </section>
  );
};

export default AddModalNameCard;
